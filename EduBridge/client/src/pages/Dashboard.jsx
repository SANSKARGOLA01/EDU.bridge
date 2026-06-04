import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const userRes = await axios.get('http://localhost:5000/api/auth/me', config);
      setUser(userRes.data);
      const coursesRes = await axios.get('http://localhost:5000/api/courses/enrolled', config);
      setCourses(coursesRes.data);
      const progressRes = await axios.get('http://localhost:5000/api/progress', config);
      setProgress(progressRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <div className="profile">
        <h3>Profile</h3>
        <p>Email: {user.email}</p>
      </div>
      <div className="enrolled-courses">
        <h3>Enrolled Courses</h3>
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h4>{course.title}</h4>
            <p>Progress: {progress[course.id] || 0}%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress[course.id] || 0}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;