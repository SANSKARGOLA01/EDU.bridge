# EduBridge - Full Stack Education Platform

A comprehensive web application designed to solve real-world education problems in India: lack of quality teachers, absence of personalized learning, poor career guidance, and language barriers.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)
- A code editor (VS Code recommended)

**Verify Installation:**
```bash
node --version
npm --version
```

---

## 🚀 Quick Start (Recommended)

### Method 1: One-Step Setup (Fastest)

#### Step 1: Open PowerShell and navigate to project
```bash
cd "c:\Users\sansk\OneDrive\ドキュメント\Desktop\Education\EduBridge"
```

#### Step 2: Install all dependencies
```bash
# Backend
cd server
npm install
cd ..

# Frontend
cd client
npm install
cd ..
```

#### Step 3: Start Backend (Terminal 1)
```bash
cd server
npm start
```
✅ **Expected output:** `Server running on port 5000`

#### Step 4: Start Frontend (Terminal 2)
```bash
cd client
npm run dev
```
✅ **Expected output:** `VITE v4.5.14 ready in 173 ms` and `Local: http://localhost:5173/`

#### Step 5: Open Browser
Visit: **`http://localhost:5173`**

---

## 📂 Detailed Step-by-Step Instructions

### Backend Setup

#### 1. Navigate to Server Directory
```bash
cd c:\Users\sansk\OneDrive\ドキュメント\Desktop\Education\EduBridge\server
```

#### 2. Install Dependencies
```bash
npm install
```
This installs: `express`, `cors`, `body-parser`, `bcryptjs`, `jsonwebtoken`

#### 3. Run the Server
```bash
npm start
```
or
```bash
node server.js
```

**Expected Output:**
```
Server running on port 5000
```

**If you get error `EADDRINUSE: address already in use :::5000`:**
- Kill existing Node processes:
```bash
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
```
- Then restart: `npm start`

---

### Frontend Setup

#### 1. Navigate to Client Directory (in NEW terminal)
```bash
cd c:\Users\sansk\OneDrive\ドキュメント\Desktop\Education\EduBridge\client
```

#### 2. Install Dependencies
```bash
npm install
```
This installs: `react`, `react-dom`, `react-router-dom`, `axios`, and Vite build tools

#### 3. Run Development Server
```bash
npm run dev
```

**Expected Output:**
```
VITE v4.5.14  ready in 173 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 Access Your Application

| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend** | `http://localhost:5173/` | Main application |
| **Home Page** | `http://localhost:5173/` | Landing page |
| **Courses** | `http://localhost:5173/courses` | Browse all courses |
| **Career Guidance** | `http://localhost:5173/career` | Career paths & roadmaps |
| **Chatbot** | `http://localhost:5173/chatbot` | AI Assistant full page |
| **Dashboard** | `http://localhost:5173/dashboard` | User profile & progress |
| **Login** | `http://localhost:5173/login` | User login |
| **Register** | `http://localhost:5173/register` | New user signup |
| **Backend API** | `http://localhost:5000/api` | API endpoints |

---

## 🎯 Features to Test

### 1. **Authentication**
- Navigate to `/register`
- Create account: Email & Password
- Go to `/login`
- Login with your credentials
- Check localStorage for JWT token

### 2. **Courses**
- Visit `/courses`
- Click "Enroll" button on any course
- Check `/dashboard` to see enrolled courses

### 3. **Chatbot**
- Click **💬** button (bottom-right corner) OR
- Go to `/chatbot` from navbar
- Try questions:
  - "What is Java?"
  - "Explain OOP"
  - "Career guidance for engineering"
  - "How to prepare for aptitude tests"

### 4. **Career Guidance**
- Visit `/career`
- See 4 career paths: Engineering, Government Jobs, Design, Data Science
- Each shows required skills and roadmap

### 5. **Dashboard**
- Login first
- Visit `/dashboard`
- See profile info
- View enrolled courses with progress bars

---

## 📁 Project Structure

```
EduBridge/
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   └── FloatingChatBot.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── CareerGuidance.jsx
│   │   │   └── ChatbotPage.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── server/                          # Backend (Node.js + Express)
│   ├── data/
│   │   ├── users.json              # User accounts
│   │   ├── courses.json            # Course catalog
│   │   └── progress.json           # User progress
│   ├── server.js                   # Main server file
│   └── package.json
│
└── README.md                        # This file
```

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login & get JWT token
- `GET /api/auth/me` - Get current user (requires token)

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses/enroll/:id` - Enroll in course
- `GET /api/courses/enrolled` - Get user's enrolled courses

### Progress
- `GET /api/progress` - Get user's course progress

### Chatbot
- `POST /api/chatbot` - Send query to chatbot

---

## 🧪 Sample Test Data

### Courses Available
1. **Programming Basics** - Learn fundamentals of coding
2. **Aptitude Test** - Prepare for aptitude exams
3. **School Math** - Basic mathematics for students

### Test Credentials
Create your own account via `/register`:
- Email: any valid email
- Password: any password

---

## ⚠️ Troubleshooting

### **Issue: "Port 5000 already in use"**
**Solution:**
```bash
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
npm start
```

### **Issue: "Cannot GET /courses" (404 error)**
**Solution:**
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Refresh the page

### **Issue: Chatbot not responding**
**Solution:**
- Verify backend is running
- Check network tab in browser DevTools
- Try questions from suggested list

### **Issue: Blank page after visiting http://localhost:5173**
**Solution:**
- Clear browser cache: `Ctrl + Shift + Delete`
- Hard refresh: `Ctrl + Shift + R`
- Check browser console for errors

### **Issue: npm install fails**
**Solution:**
```bash
npm cache clean --force
npm install
```

---

## 🛠️ Available Commands

### Backend
```bash
cd server
npm start          # Start server
npm install        # Install dependencies
```

### Frontend
```bash
cd client
npm run dev        # Start development server
npm run build      # Create production build
npm run preview    # Preview production build
```

---

## 📊 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + Vite |
| **Frontend Routing** | React Router v6 |
| **HTTP Client** | Axios |
| **Backend** | Node.js + Express |
| **Authentication** | JWT + bcryptjs |
| **Data Persistence** | JSON files |
| **Styling** | CSS3 + CSS Variables |

---

## 🎨 UI/UX Features

- ✅ Modern dark theme
- ✅ Responsive design (mobile + desktop)
- ✅ Smooth animations
- ✅ Interactive chatbot with floating button
- ✅ Progress tracking with visual bars
- ✅ Professional navigation
- ✅ Clean form layouts

---

## 📝 Sample Tasks to Try

1. **Create Account**
   - Go to `/register`
   - Fill in email & password
   - Click "Register"

2. **Login**
   - Go to `/login`
   - Use your credentials
   - Redirects to `/dashboard`

3. **Enroll in Courses**
   - Click "Get Started" on home
   - Browse `/courses`
   - Click "Enroll" on any course

4. **Check Progress**
   - Visit `/dashboard`
   - See enrolled courses with progress

5. **Chat with Bot**
   - Click 💬 button OR go to `/chatbot`
   - Type: "What is Java?"
   - View bot response

6. **Explore Careers**
   - Visit `/career`
   - Review different career paths

---

## 🚀 Production Build (Optional)

To create a production build:

```bash
# Frontend
cd client
npm run build
# Creates "dist" folder ready for deployment

# Build time: ~1-2 seconds
```

---

## 📞 Support & Notes

- **Database**: Currently uses JSON files. For production, migrate to MongoDB.
- **Authentication**: JWT tokens expire session on browser close.
- **Chatbot**: Rule-based responses. Can integrate OpenAI API for real AI.
- **Data Persistence**: All data resets when server restarts (use MongoDB for production).

---

## ✅ Verification Checklist

Before considering setup complete:

- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] Can access http://localhost:5173
- [ ] Can register and login
- [ ] Can view courses
- [ ] Can interact with chatbot
- [ ] Can view career guidance
- [ ] Dashboard shows user info

---

## 🎯 Next Steps

1. **Explore the application** - Test all features
2. **Check browser DevTools** - See network requests
3. **Review code** - Understand the structure
4. **Customize** - Add your own features
5. **Deploy** - Host on cloud (Vercel, Heroku, AWS)

---

**Your EduBridge application is now ready! 🎉**

For questions or issues, check the localhost console output or browser DevTools.
