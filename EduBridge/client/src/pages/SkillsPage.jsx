import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './SkillsPage.css';

const SkillsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [skillProgress, setSkillProgress] = useState({});

  const skillsDatabase = [
    // Programming & Development
    {
      id: 1,
      name: 'Python',
      category: 'Programming',
      difficulty: 'Beginner',
      emoji: '🐍',
      color: '#3776ab',
      description: 'Versatile, beginner-friendly programming language',
      relevanceScore: 95,
      salaryBoost: '₹2-5 LPA',
      careers: ['Software Engineering', 'Data Science', 'AI & Machine Learning Engineer'],
      learningPath: [
        { level: 1, title: 'Basics', weeks: 2, topics: ['Variables', 'Data types', 'Operators', 'Control flow'] },
        { level: 2, title: 'Functions & Modules', weeks: 2, topics: ['Functions', 'Modules', 'Packages', 'File handling'] },
        { level: 3, title: 'OOP', weeks: 3, topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism'] },
        { level: 4, title: 'Advanced', weeks: 4, topics: ['Decorators', 'Generators', 'Concurrency', 'Testing'] }
      ],
      resources: [
        { name: 'Codecademy Python', type: 'Interactive', link: '#', rating: '4.8/5' },
        { name: 'Python.org Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'Real Python', type: 'Tutorials', link: '#', rating: '4.7/5' },
        { name: 'Automate the Boring Stuff', type: 'Book', link: '#', rating: '4.8/5' }
      ],
      interviewQuestions: [
        'Explain list comprehension in Python',
        'What is the difference between == and is?',
        'What are decorators and how do you use them?',
        'Explain the GIL (Global Interpreter Lock)'
      ],
      projects: [
        'Build a Web Scraper',
        'Create a CLI Todo App',
        'Build a REST API with Flask',
        'Data Analysis with Pandas'
      ]
    },
    {
      id: 2,
      name: 'JavaScript',
      category: 'Programming',
      difficulty: 'Intermediate',
      emoji: '⚡',
      color: '#f7df1e',
      description: 'Essential for web development and modern applications',
      relevanceScore: 90,
      salaryBoost: '₹3-6 LPA',
      careers: ['Software Engineering', 'Mobile App Development', 'Product Management'],
      learningPath: [
        { level: 1, title: 'Fundamentals', weeks: 3, topics: ['Variables', 'Types', 'Functions', 'Scope'] },
        { level: 2, title: 'DOM & Events', weeks: 2, topics: ['DOM manipulation', 'Event listeners', 'Forms'] },
        { level: 3, title: 'Async Programming', weeks: 3, topics: ['Callbacks', 'Promises', 'Async/Await'] },
        { level: 4, title: 'Frameworks', weeks: 4, topics: ['React', 'Vue', 'Angular basics'] }
      ],
      resources: [
        { name: 'MDN Web Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'Eloquent JavaScript', type: 'Book', link: '#', rating: '4.8/5' },
        { name: 'JavaScript.info', type: 'Tutorial', link: '#', rating: '4.8/5' },
        { name: 'freeCodeCamp JS Course', type: 'Video', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'Explain closure in JavaScript',
        'What is event bubbling and event capturing?',
        'Difference between var, let, and const',
        'What is hoisting in JavaScript?'
      ],
      projects: [
        'Build a Calculator App',
        'Create a Weather App using APIs',
        'Build a Todo List Application',
        'Create a Chrome Extension'
      ]
    },
    {
      id: 3,
      name: 'Java',
      category: 'Programming',
      difficulty: 'Intermediate',
      emoji: '☕',
      color: '#007396',
      description: 'Enterprise-grade programming language',
      relevanceScore: 85,
      salaryBoost: '₹2-5 LPA',
      careers: ['Software Engineering', 'Mobile App Development'],
      learningPath: [
        { level: 1, title: 'Core Java', weeks: 3, topics: ['Syntax', 'OOP', 'Collections', 'Exceptions'] },
        { level: 2, title: 'Java Advanced', weeks: 3, topics: ['Multithreading', 'Streams', 'Generics'] },
        { level: 3, title: 'Frameworks', weeks: 3, topics: ['Spring Boot', 'Hibernate', 'RESTful APIs'] },
        { level: 4, title: 'Microservices', weeks: 4, topics: ['Architecture', 'Docker', 'Kubernetes'] }
      ],
      resources: [
        { name: 'Oracle Java Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'Head First Java', type: 'Book', link: '#', rating: '4.7/5' },
        { name: 'Baeldung Tutorials', type: 'Blog', link: '#', rating: '4.8/5' },
        { name: 'Java Complete Guide', type: 'Course', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'What is the difference between abstract class and interface?',
        'Explain the concept of inheritance',
        'What are checked and unchecked exceptions?',
        'How does garbage collection work in Java?'
      ],
      projects: [
        'Build a Bank Management System',
        'Create a Chat Application',
        'Build a Library Management System',
        'Create a Spring Boot REST API'
      ]
    },
    {
      id: 4,
      name: 'SQL',
      category: 'Database',
      difficulty: 'Beginner',
      emoji: '📊',
      color: '#cc2927',
      description: 'Query and manage relational databases',
      relevanceScore: 92,
      salaryBoost: '₹1-3 LPA',
      careers: ['Software Engineering', 'Data Science', 'Product Management', 'Quality Assurance & Testing'],
      learningPath: [
        { level: 1, title: 'Basics', weeks: 2, topics: ['SELECT', 'WHERE', 'ORDER BY', 'LIMIT'] },
        { level: 2, title: 'Joins & Aggregates', weeks: 2, topics: ['JOINs', 'GROUP BY', 'Aggregates'] },
        { level: 3, title: 'Advanced Queries', weeks: 2, topics: ['Subqueries', 'Window functions', 'CTEs'] },
        { level: 4, title: 'Optimization', weeks: 2, topics: ['Indexes', 'Query optimization', 'Performance tuning'] }
      ],
      resources: [
        { name: 'SQLZoo', type: 'Interactive', link: '#', rating: '4.7/5' },
        { name: 'Mode Analytics SQL', type: 'Tutorial', link: '#', rating: '4.8/5' },
        { name: 'HackerRank SQL', type: 'Practice', link: '#', rating: '4.6/5' },
        { name: 'LeetCode Database', type: 'Challenges', link: '#', rating: '4.5/5' }
      ],
      interviewQuestions: [
        'Explain INNER vs LEFT JOIN',
        'What is the difference between UNION and UNION ALL?',
        'How do you optimize a slow SQL query?',
        'What are indexes and why are they important?'
      ],
      projects: [
        'Build a Relational Database Design',
        'Create Complex JOIN Queries',
        'Optimize Database Queries',
        'Create a Data Warehouse Schema'
      ]
    },
    {
      id: 5,
      name: 'React',
      category: 'Web Framework',
      difficulty: 'Intermediate',
      emoji: '⚛️',
      color: '#61dafb',
      description: 'Modern JavaScript library for building UIs',
      relevanceScore: 88,
      salaryBoost: '₹3-7 LPA',
      careers: ['Software Engineering', 'Mobile App Development'],
      learningPath: [
        { level: 1, title: 'Fundamentals', weeks: 2, topics: ['JSX', 'Components', 'Props', 'State'] },
        { level: 2, title: 'Hooks', weeks: 2, topics: ['useState', 'useEffect', 'Custom hooks'] },
        { level: 3, title: 'State Management', weeks: 2, topics: ['Context API', 'Redux', 'Zustand'] },
        { level: 4, title: 'Advanced', weeks: 3, topics: ['Performance optimization', 'Testing', 'Deployment'] }
      ],
      resources: [
        { name: 'React Official Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'React Query Docs', type: 'Library', link: '#', rating: '4.8/5' },
        { name: 'Epic React Course', type: 'Course', link: '#', rating: '4.8/5' },
        { name: 'React Patterns', type: 'Blog', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'Explain the difference between props and state',
        'What are hooks and why were they introduced?',
        'How does the virtual DOM work?',
        'Explain React lifecycle methods'
      ],
      projects: [
        'Build an E-commerce Product Listing',
        'Create a Weather App with API',
        'Build a Real-time Chat Application',
        'Create a Complex Dashboard'
      ]
    },
    {
      id: 6,
      name: 'Docker',
      category: 'DevOps',
      difficulty: 'Intermediate',
      emoji: '🐳',
      color: '#2496ed',
      description: 'Containerization technology for applications',
      relevanceScore: 87,
      salaryBoost: '₹2-5 LPA',
      careers: ['Cloud Computing & DevOps', 'Software Engineering'],
      learningPath: [
        { level: 1, title: 'Docker Basics', weeks: 2, topics: ['Images', 'Containers', 'Dockerfile', 'Docker CLI'] },
        { level: 2, title: 'Docker Compose', weeks: 2, topics: ['Multi-container apps', 'Networks', 'Volumes'] },
        { level: 3, title: 'Registry & Optimization', weeks: 2, topics: ['Docker Hub', 'Private registries', 'Layer caching'] },
        { level: 4, title: 'Advanced', weeks: 2, topics: ['Security', 'Monitoring', 'Orchestration'] }
      ],
      resources: [
        { name: 'Docker Official Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'Docker Mastery', type: 'Course', link: '#', rating: '4.8/5' },
        { name: 'Play with Docker', type: 'Interactive', link: '#', rating: '4.7/5' },
        { name: 'Docker Deep Dive', type: 'Book', link: '#', rating: '4.8/5' }
      ],
      interviewQuestions: [
        'What is the difference between an image and a container?',
        'How do you optimize Docker images?',
        'Explain Docker networking',
        'What are Docker volumes and why use them?'
      ],
      projects: [
        'Dockerize a Python Application',
        'Create a Multi-container Application',
        'Build a Docker Compose Stack',
        'Implement Docker Best Practices'
      ]
    },
    {
      id: 7,
      name: 'Kubernetes',
      category: 'DevOps',
      difficulty: 'Advanced',
      emoji: '☸️',
      color: '#326ce5',
      description: 'Container orchestration and management platform',
      relevanceScore: 85,
      salaryBoost: '₹3-6 LPA',
      careers: ['Cloud Computing & DevOps', 'Software Engineering'],
      learningPath: [
        { level: 1, title: 'K8s Fundamentals', weeks: 3, topics: ['Pods', 'Deployments', 'Services', 'ConfigMaps'] },
        { level: 2, title: 'Advanced Deployments', weeks: 2, topics: ['StatefulSets', 'DaemonSets', 'Jobs'] },
        { level: 3, title: 'Networking & Storage', weeks: 2, topics: ['Networking', 'Volumes', 'PV/PVC'] },
        { level: 4, title: 'Production', weeks: 3, topics: ['Security', 'Monitoring', 'Scaling', 'Troubleshooting'] }
      ],
      resources: [
        { name: 'Kubernetes Official Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'Kubernetes By Example', type: 'Interactive', link: '#', rating: '4.7/5' },
        { name: 'A Cloud Guru K8s', type: 'Course', link: '#', rating: '4.8/5' },
        { name: 'Linux Academy K8s', type: 'Learning Path', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'Explain the difference between Pods and Deployments',
        'How does Kubernetes handle scaling?',
        'Explain the concept of services in Kubernetes',
        'How do you implement resource limits in K8s?'
      ],
      projects: [
        'Deploy an Application on Kubernetes',
        'Implement Auto-scaling',
        'Setup Ingress Controllers',
        'Implement Monitoring with Prometheus'
      ]
    },
    {
      id: 8,
      name: 'Solidity',
      category: 'Blockchain',
      difficulty: 'Advanced',
      emoji: '⛓️',
      color: '#363636',
      description: 'Smart contract programming language for Ethereum',
      relevanceScore: 82,
      salaryBoost: '₹3-8 LPA',
      careers: ['Blockchain Developer'],
      learningPath: [
        { level: 1, title: 'Solidity Basics', weeks: 3, topics: ['Syntax', 'Data types', 'Functions', 'State variables'] },
        { level: 2, title: 'Contract Development', weeks: 3, topics: ['Inheritance', 'Interfaces', 'Events', 'Error handling'] },
        { level: 3, title: 'Security', weeks: 3, topics: ['Common vulnerabilities', 'Best practices', 'Auditing'] },
        { level: 4, title: 'Advanced Topics', weeks: 3, topics: ['Gas optimization', 'Proxy patterns', 'DeFi protocols'] }
      ],
      resources: [
        { name: 'Solidity Docs', type: 'Official', link: '#', rating: '4.9/5' },
        { name: 'CryptoZombies', type: 'Interactive', link: '#', rating: '4.8/5' },
        { name: 'Ethereum Development', type: 'Guide', link: '#', rating: '4.7/5' },
        { name: 'OpenZeppelin Contracts', type: 'Library', link: '#', rating: '4.9/5' }
      ],
      interviewQuestions: [
        'Explain the concept of smart contracts',
        'What is gas and how does it work?',
        'What is the reentrancy vulnerability?',
        'How do you secure a smart contract?'
      ],
      projects: [
        'Create an ERC20 Token',
        'Build a Simple DAO',
        'Create an NFT Smart Contract',
        'Implement a DeFi Protocol'
      ]
    },
    {
      id: 9,
      name: 'Machine Learning',
      category: 'AI/ML',
      difficulty: 'Advanced',
      emoji: '🤖',
      color: '#ff6b35',
      description: 'Build intelligent systems that learn from data',
      relevanceScore: 89,
      salaryBoost: '₹4-9 LPA',
      careers: ['Data Science', 'AI & Machine Learning Engineer'],
      learningPath: [
        { level: 1, title: 'ML Fundamentals', weeks: 3, topics: ['Supervised learning', 'Regression', 'Classification'] },
        { level: 2, title: 'Advanced ML', weeks: 3, topics: ['Decision trees', 'Ensemble methods', 'SVM'] },
        { level: 3, title: 'Deep Learning', weeks: 4, topics: ['Neural networks', 'CNNs', 'RNNs'] },
        { level: 4, title: 'Specializations', weeks: 4, topics: ['NLP', 'Computer Vision', 'Reinforcement Learning'] }
      ],
      resources: [
        { name: 'Scikit-learn Docs', type: 'Official', link: '#', rating: '4.8/5' },
        { name: 'Fast.ai Courses', type: 'Course', link: '#', rating: '4.9/5' },
        { name: 'Hands-On ML Book', type: 'Book', link: '#', rating: '4.7/5' },
        { name: 'Andrew Ng ML Course', type: 'Course', link: '#', rating: '4.9/5' }
      ],
      interviewQuestions: [
        'Explain the bias-variance tradeoff',
        'What are hyperparameters and how do you tune them?',
        'Explain the difference between classification and regression',
        'How do you prevent overfitting?'
      ],
      projects: [
        'Build a Predictive Model',
        'Implement a Classification System',
        'Create a Recommendation Engine',
        'Participate in Kaggle Competitions'
      ]
    },
    {
      id: 10,
      name: 'Figma',
      category: 'Design',
      difficulty: 'Intermediate',
      emoji: '🎨',
      color: '#a259ff',
      description: 'Professional UI/UX design tool',
      relevanceScore: 86,
      salaryBoost: '₹1-3 LPA',
      careers: ['UI/UX Design', 'Product Management'],
      learningPath: [
        { level: 1, title: 'Design Basics', weeks: 2, topics: ['UI principles', 'Color theory', 'Typography'] },
        { level: 2, title: 'Figma Tools', weeks: 2, topics: ['Creating designs', 'Components', 'Prototyping'] },
        { level: 3, title: 'Advanced Design', weeks: 2, topics: ['Design systems', 'Collaboration', 'Handoff'] },
        { level: 4, title: 'UX Research', weeks: 2, topics: ['User research', 'Usability testing', 'Design thinking'] }
      ],
      resources: [
        { name: 'Figma Official Learn', type: 'Official', link: '#', rating: '4.8/5' },
        { name: 'Design Matters Course', type: 'Course', link: '#', rating: '4.7/5' },
        { name: 'Figma Bible', type: 'Tutorial', link: '#', rating: '4.8/5' },
        { name: 'Design Resources', type: 'Library', link: '#', rating: '4.6/5' }
      ],
      interviewQuestions: [
        'Walk us through your design process',
        'How do you justify design decisions?',
        'Explain the difference between wireframes and mockups',
        'How do you conduct user research?'
      ],
      projects: [
        'Design a Mobile App',
        'Create a Design System',
        'Build a Complete Website Design',
        'Redesign an Existing App'
      ]
    },
    {
      id: 11,
      name: 'AWS (Amazon Web Services)',
      category: 'Cloud',
      difficulty: 'Intermediate',
      emoji: '☁️',
      color: '#ff9900',
      description: 'Most popular cloud computing platform',
      relevanceScore: 91,
      salaryBoost: '₹2-6 LPA',
      careers: ['Cloud Computing & DevOps', 'Software Engineering'],
      learningPath: [
        { level: 1, title: 'AWS Basics', weeks: 2, topics: ['EC2', 'S3', 'RDS', 'IAM'] },
        { level: 2, title: 'Networking & Storage', weeks: 2, topics: ['VPC', 'EBS', 'CloudFront', 'Route 53'] },
        { level: 3, title: 'Advanced Services', weeks: 3, topics: ['Lambda', 'API Gateway', 'DynamoDB'] },
        { level: 4, title: 'Architecture', weeks: 3, topics: ['Auto-scaling', 'Load balancing', 'Disaster recovery'] }
      ],
      resources: [
        { name: 'AWS Official Docs', type: 'Official', link: '#', rating: '4.8/5' },
        { name: 'A Cloud Guru AWS', type: 'Course', link: '#', rating: '4.8/5' },
        { name: 'AWS Practice Exams', type: 'Practice', link: '#', rating: '4.7/5' },
        { name: 'Linux Academy', type: 'Learning Path', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'Explain the difference between S3 and EBS',
        'What is the AWS shared responsibility model?',
        'How do you ensure high availability on AWS?',
        'Explain auto-scaling on AWS'
      ],
      projects: [
        'Deploy a Web Application on AWS',
        'Create a Serverless Application',
        'Build a Data Pipeline',
        'Implement a Disaster Recovery Plan'
      ]
    },
    {
      id: 12,
      name: 'Selenium',
      category: 'Testing',
      difficulty: 'Intermediate',
      emoji: '🧪',
      color: '#90c53f',
      description: 'Automated testing framework for web applications',
      relevanceScore: 80,
      salaryBoost: '₹1-3 LPA',
      careers: ['Quality Assurance & Testing', 'Software Engineering'],
      learningPath: [
        { level: 1, title: 'Selenium Basics', weeks: 2, topics: ['WebDriver', 'Locators', 'Wait strategies'] },
        { level: 2, title: 'Test Frameworks', weeks: 2, topics: ['TestNG', 'Assertions', 'Reports'] },
        { level: 3, title: 'Advanced Testing', weeks: 2, topics: ['Page Object Model', 'Parallel testing', 'CI/CD'] },
        { level: 4, title: 'Best Practices', weeks: 2, topics: ['Maintenance', 'Debugging', 'Performance'] }
      ],
      resources: [
        { name: 'Selenium Official Docs', type: 'Official', link: '#', rating: '4.8/5' },
        { name: 'Selenium WebDriver Course', type: 'Course', link: '#', rating: '4.7/5' },
        { name: 'QA Automation Guide', type: 'Tutorial', link: '#', rating: '4.6/5' },
        { name: 'Testing Best Practices', type: 'Blog', link: '#', rating: '4.7/5' }
      ],
      interviewQuestions: [
        'Explain different types of waits in Selenium',
        'What are locators and which one is most reliable?',
        'How do you handle dynamic elements?',
        'Explain the Page Object Model pattern'
      ],
      projects: [
        'Automate Testing for an E-commerce Site',
        'Create an Automation Framework',
        'Build a Cross-browser Testing Suite',
        'Implement Continuous Integration Testing'
      ]
    }
  ];

  const filteredSkills = skillsDatabase.filter(skill =>
    (filterCategory === 'all' || skill.category === filterCategory) &&
    (skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     skill.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = ['all', ...new Set(skillsDatabase.map(s => s.category))];

  const skillToShow = selectedSkill || expandedSkill;

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    window.scrollTo(0, 0);
  };

  const handleProgressUpdate = (skillId, value) => {
    setSkillProgress({ ...skillProgress, [skillId]: value });
  };

  return (
    <div className="skills-page">
      {!skillToShow ? (
        <>
          {/* Header */}
          <div className="skills-header">
            <h1>📚 Skills Mastery Hub</h1>
            <p>Learn in-demand skills with structured learning paths</p>
          </div>

          {/* Search & Filter */}
          <div className="skills-controls">
            <input
              type="text"
              className="skills-search"
              placeholder="🔍 Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="skills-filter">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map(skill => (
              <div
                key={skill.id}
                className="skill-card"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="skill-header">
                  <div className="skill-emoji" style={{ color: skill.color }}>
                    {skill.emoji}
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <p className="skill-category">{skill.category}</p>
                    <div className="difficulty-badge" data-difficulty={skill.difficulty.toLowerCase()}>
                      {skill.difficulty}
                    </div>
                  </div>
                </div>

                <p className="skill-description">{skill.description}</p>

                <div className="skill-metrics">
                  <div className="metric">
                    <span className="metric-label">Relevance</span>
                    <span className="metric-value">{skill.relevanceScore}%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Salary Boost</span>
                    <span className="metric-value">{skill.salaryBoost}</span>
                  </div>
                </div>

                <div className="careers-tags">
                  {skill.careers.slice(0, 2).map((career, idx) => (
                    <span key={idx} className="career-tag">{career}</span>
                  ))}
                  {skill.careers.length > 2 && (
                    <span className="career-tag more">+{skill.careers.length - 2}</span>
                  )}
                </div>

                <button className="btn-explore">Explore Skill →</button>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="no-skills">
              <p>No skills found matching your search.</p>
            </div>
          )}
        </>
      ) : (
        // Skill Detail View
        <div className="skill-detail">
          <button className="btn-back" onClick={() => setSelectedSkill(null)}>
            ← Back to Skills
          </button>

          <div className="detail-header">
            <div className="detail-title">
              <span className="detail-emoji" style={{ color: skillToShow.color }}>
                {skillToShow.emoji}
              </span>
              <div>
                <h1>{skillToShow.name}</h1>
                <p>{skillToShow.description}</p>
              </div>
            </div>

            <div className="detail-stats">
              <div className="stat">
                <span>Relevance Score</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: `${skillToShow.relevanceScore}%` }}></div>
                </div>
                <span className="stat-value">{skillToShow.relevanceScore}%</span>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn-start">Start Learning</button>
              <button className="btn-track">Track Progress</button>
            </div>
          </div>

          <div className="detail-content">
            {/* Learning Path */}
            <section className="section">
              <h2>📚 Learning Path</h2>
              <div className="learning-path">
                {skillToShow.learningPath.map((item, idx) => (
                  <div key={idx} className="learning-step">
                    <div className="step-marker">{item.level}</div>
                    <div className="step-content">
                      <h3>{item.title}</h3>
                      <p className="step-duration">⏱️ {item.weeks} weeks</p>
                      <div className="topics">
                        {item.topics.map((topic, i) => (
                          <span key={i} className="topic-badge">{topic}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources */}
            <section className="section">
              <h2>📖 Learning Resources</h2>
              <div className="resources-grid">
                {skillToShow.resources.map((resource, idx) => (
                  <div key={idx} className="resource-card">
                    <div className="resource-header">
                      <h3>{resource.name}</h3>
                      <span className="resource-type">{resource.type}</span>
                    </div>
                    <div className="resource-rating">⭐ {resource.rating}</div>
                    <button className="btn-visit">Visit Resource →</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Interview Questions */}
            <section className="section">
              <h2>🎤 Interview Preparation</h2>
              <div className="interview-qa">
                {skillToShow.interviewQuestions.map((q, idx) => (
                  <div key={idx} className="qa-item">
                    <div className="question">Q{idx + 1}: {q}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="section">
              <h2>🎯 Real-world Projects</h2>
              <div className="projects-list">
                {skillToShow.projects.map((project, idx) => (
                  <div key={idx} className="project-item">
                    <span className="project-number">{idx + 1}</span>
                    <span className="project-name">{project}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Careers */}
            <section className="section">
              <h2>💼 Related Careers</h2>
              <div className="related-careers">
                {skillToShow.careers.map((career, idx) => (
                  <div key={idx} className="related-career-card">
                    <span>{career}</span>
                    <button className="btn-explore-career" onClick={() => navigate('/career')}>
                      Explore →
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;
