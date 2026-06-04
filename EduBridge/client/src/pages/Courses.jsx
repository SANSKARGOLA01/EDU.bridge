import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data);
        
        const token = localStorage.getItem('token');
        if (token) {
          const config = { headers: { Authorization: `Bearer ${token}` } };
          const enrolledRes = await axios.get('http://localhost:5000/api/courses/enrolled', config);
          setEnrolledCourses(enrolledRes.data);
          
          const progressRes = await axios.get('http://localhost:5000/api/progress', config);
          setProgress(progressRes.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const enroll = async (courseId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to enroll');
      return;
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.post(`http://localhost:5000/api/courses/enroll/${courseId}`, {}, config);
      alert('Enrolled successfully!');
      window.location.reload();
    } catch (error) {
      alert('Enrollment failed');
    }
  };

  const enrolledIds = enrolledCourses.map(c => c.id);

  return (
    <div className="courses-container">
      {/* Tabs */}
      <div className="courses-tabs">
        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
          📚 All Courses
        </button>
        <button className={`tab-btn ${activeTab === 'enrolled' ? 'active' : ''}`} onClick={() => setActiveTab('enrolled')}>
          ✓ My Courses ({enrolledCourses.length})
        </button>
      </div>

      {/* All Courses Tab */}
      {activeTab === 'all' && (
        <div className="courses">
          <div className="section-header">
            <h2>🎓 Explore All Courses</h2>
            <p>Discover and enroll in quality education programs</p>
          </div>
          <div className="course-list">
            {courses.map(course => (
              <div key={course.id} className={`course-card ${enrolledIds.includes(course.id) ? 'enrolled' : ''}`}>
                {enrolledIds.includes(course.id) && <span className="enrolled-badge">ENROLLED</span>}
                
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span className="difficulty" data-level={course.difficulty || 'beginner'}>
                      {course.difficulty || 'Beginner'}
                    </span>
                    <span className="rating">⭐ {course.rating || '4.5'} ({course.students || '120'} students)</span>
                  </div>
                </div>

                <p className="course-description">{course.description}</p>

                <div className="course-details">
                  <div className="detail-item">
                    <span className="icon">⏱️</span>
                    <span>{course.duration || '4'} weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">📖</span>
                    <span>{course.lessons || '12'} lessons</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">👨‍🏫</span>
                    <span>{course.instructor || 'Expert'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">🎯</span>
                    <span>{course.category || 'Programming'}</span>
                  </div>
                </div>

                {course.tags && (
                  <div className="course-tags">
                    {course.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}

                <button 
                  className="enroll-btn" 
                  onClick={() => enroll(course.id)}
                  disabled={enrolledIds.includes(course.id)}
                >
                  {enrolledIds.includes(course.id) ? '✓ Enrolled' : 'Enroll Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enrolled Courses Tab */}
      {activeTab === 'enrolled' && (
        <div className="enrolled-section">
          <div className="section-header">
            <h2>📖 My Learning Path</h2>
            <p>Continue your learning journey</p>
          </div>
          
          {enrolledCourses.length === 0 ? (
            <div className="no-courses">
              <p>You haven't enrolled in any courses yet.</p>
              <button className="btn-start" onClick={() => setActiveTab('all')}>
                Explore Courses →
              </button>
            </div>
          ) : (
            <div className="enrolled-courses-list">
              {enrolledCourses.map(course => {
                const courseProgress = progress[course.id] || 0;
                return (
                  <div key={course.id} className="enrolled-course-card">
                    <div className="enrolled-header">
                      <h3>{course.title}</h3>
                      <span className="progress-percent">{courseProgress}% Complete</span>
                    </div>

                    <p className="course-description">{course.description}</p>

                    <div className="enrolled-details">
                      <div className="detail">
                        <span>⏱️ Duration: {course.duration || '4'} weeks</span>
                      </div>
                      <div className="detail">
                        <span>📖 Lessons: {course.lessons || '12'}</span>
                      </div>
                      <div className="detail">
                        <span>👨‍🏫 Instructor: {course.instructor || 'Expert'}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-section">
                      <div className="progress-bar-container">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${courseProgress}%` }}></div>
                        </div>
                      </div>
                      <div className="progress-info">
                        <span>Progress: {courseProgress}%</span>
                        <span className="lessons-done">{Math.ceil((courseProgress / 100) * (course.lessons || 12))} of {course.lessons || 12} lessons completed</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="enrolled-stats">
                      {courseProgress === 100 ? (
                        <div className="certificate-earned">
                          <span className="badge-success">🏆 Certificate Earned!</span>
                        </div>
                      ) : (
                        <div className="next-step">
                          <span>Next: Lesson {Math.ceil((courseProgress / 100) * (course.lessons || 12)) + 1}</span>
                        </div>
                      )}
                    </div>

                    <div className="enrolled-actions">
                      <button className="btn-continue">Continue Learning →</button>
                      <button className="btn-details">View Details</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;