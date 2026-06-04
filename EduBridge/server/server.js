const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(cors());
app.use(bodyParser.json());

// Simple JSON database
const usersFile = path.join(__dirname, 'data', 'users.json');
const coursesFile = path.join(__dirname, 'data', 'courses.json');
const progressFile = path.join(__dirname, 'data', 'progress.json');

const readData = (file) => {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

const writeData = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  const users = readData(usersFile);
  if (users.find(u => u.email === email)) return res.status(400).json({ message: 'User exists' });
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), name, email, password: hashedPassword });
  writeData(usersFile, users);
  res.status(201).json({ message: 'User registered' });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readData(usersFile);
  const user = users.find(u => u.email === email);
  if (!user || !await bcrypt.compare(password, user.password)) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, SECRET_KEY);
  res.json({ token });
});

app.get('/api/auth/me', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const users = readData(usersFile);
    const user = users.find(u => u.id === decoded.id);
    res.json(user);
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Courses routes
app.get('/api/courses', (req, res) => {
  const courses = readData(coursesFile);
  res.json(courses);
});

app.post('/api/courses/enroll/:id', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  const decoded = jwt.verify(token, SECRET_KEY);
  const progress = readData(progressFile);
  if (!progress.find(p => p.userId === decoded.id && p.courseId === parseInt(req.params.id))) {
    progress.push({ userId: decoded.id, courseId: parseInt(req.params.id), completed: 0 });
    writeData(progressFile, progress);
  }
  res.json({ message: 'Enrolled' });
});

app.get('/api/courses/enrolled', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  const decoded = jwt.verify(token, SECRET_KEY);
  const progress = readData(progressFile);
  const enrolled = progress.filter(p => p.userId === decoded.id).map(p => p.courseId);
  const courses = readData(coursesFile);
  const enrolledCourses = courses.filter(c => enrolled.includes(c.id));
  res.json(enrolledCourses);
});

// Progress routes
app.get('/api/progress', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });
  const decoded = jwt.verify(token, SECRET_KEY);
  const progress = readData(progressFile);
  const userProgress = {};
  progress.filter(p => p.userId === decoded.id).forEach(p => {
    userProgress[p.courseId] = p.completed;
  });
  res.json(userProgress);
});

// Chatbot route
app.post('/api/chatbot', (req, res) => {
  const { query } = req.body;
  // Simple rule-based responses
  let response = 'I am sorry, I do not understand.';
  if (query.toLowerCase().includes('java')) response = 'Java is a programming language used for building applications.';
  if (query.toLowerCase().includes('oop')) response = 'OOP stands for Object-Oriented Programming, which uses objects and classes.';
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});