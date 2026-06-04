import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerGuidance.css';

const CareerGuidance = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const [compareCareer, setCompareCareer] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const careers = [
    {
      id: 1,
      title: 'Software Engineering',
      emoji: '💻',
      icon: '⚙️',
      description: 'Build applications and systems through code',
      salaryRange: '₹5-25 LPA',
      demandLevel: 'Very High',
      timeToJob: '6-12 months',
      experience_levels: [
        { level: 'Fresher', role: 'Junior Developer', salary: '₹5-8 LPA', skills: 'Basic programming, Data structures' },
        { level: 'Mid-level (2-5 yrs)', role: 'Senior Developer', salary: '₹8-15 LPA', skills: 'System design, Databases' },
        { level: 'Senior (5+ yrs)', role: 'Tech Lead/Architect', salary: '₹15-25 LPA', skills: 'Leadership, Cloud architecture' }
      ],
      skills: ['Math', 'Physics', 'Programming', 'Data Structures', 'Algorithms', 'Database'],
      roadmap: ['Learn programming basics (3 months)', 'Master DSA (3 months)', 'Build projects (3 months)', 'Apply for jobs'],
      courses: ['Programming Basics', 'Data Science with Python', 'Web Development'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Azure Developer'],
      companies: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'TCS', 'Infosys'],
      interviewTips: [
        'Practice coding problems daily on LeetCode/HackerRank',
        'Focus on DSA and system design interviews',
        'Build 2-3 strong projects with GitHub portfolio',
        'Practice mock interviews repeatedly'
      ],
      relatedRoles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer'],
      faqs: [
        { q: 'Is degree necessary?', a: 'Not always. Strong portfolio and skills matter more.' },
        { q: 'How much time to prepare?', a: '6-12 months of dedicated preparation recommended.' },
        { q: 'What languages to learn?', a: 'Python, JavaScript, Java, C++ are most popular.' }
      ]
    },
    {
      id: 2,
      title: 'Government Jobs',
      emoji: '🏛️',
      icon: '📋',
      description: 'Serve the nation through competitive exams',
      salaryRange: '₹25,000-70,000/month',
      demandLevel: 'High',
      timeToJob: '12-24 months',
      experience_levels: [
        { level: 'Officer (IAS/IPS/IFS)', role: 'Administrative Officer', salary: '₹70,000+/month', skills: 'Aptitude, Interview skills' },
        { level: 'Clerk/SSC', role: 'Bank PO/Clerk', salary: '₹30,000-50,000/month', skills: 'Math, Reasoning, English' },
        { level: 'Technical Posts', role: 'Engineer Grade A/B', salary: '₹40,000-70,000/month', skills: 'Technical knowledge, Aptitude' }
      ],
      skills: ['Aptitude', 'General Knowledge', 'English', 'Reasoning', 'Numerical Ability', 'Current Affairs'],
      roadmap: ['Choose exam (1 month)', 'Study material collection (1 month)', 'Intensive prep (6-9 months)', 'Mock tests (3 months)', 'Apply and interview'],
      courses: ['Aptitude Test Preparation', 'School Math'],
      certifications: ['CSE Cleared', 'Bank Exam Certified', 'SSC Qualified'],
      companies: ['UPSC', 'SSC', 'Banking Services', 'Railways', 'State Services'],
      interviewTips: [
        'Join coaching institute for guidance',
        'Solve previous year papers consistently',
        'Prepare strong interview answers about your state',
        'Stay updated with current affairs'
      ],
      relatedRoles: ['IAS Officer', 'Bank PO', 'Police Officer', 'Railway Employee'],
      faqs: [
        { q: 'What exams to attempt?', a: 'UPSC, SSC, Banking exams based on your interest.' },
        { q: 'Age limit?', a: 'Varies by exam, typically 18-32 years with relaxations.' },
        { q: 'How many attempts?', a: 'Usually unlimited or 4-6 attempts depending on exam.' }
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      emoji: '🎨',
      icon: '✏️',
      description: 'Create beautiful and intuitive user interfaces',
      salaryRange: '₹4-20 LPA',
      demandLevel: 'Very High',
      timeToJob: '8-12 months',
      experience_levels: [
        { level: 'Fresher', role: 'Junior Designer', salary: '₹4-6 LPA', skills: 'Design tools, Basic principles' },
        { level: 'Mid-level (2-4 yrs)', role: 'Senior Designer', salary: '₹6-12 LPA', skills: 'Research, Prototyping' },
        { level: 'Senior (4+ yrs)', role: 'Design Lead', salary: '₹12-20 LPA', skills: 'Strategy, Team management' }
      ],
      skills: ['Creativity', 'Figma/Adobe XD', 'User Research', 'Prototyping', 'Color Theory', 'Typography'],
      roadmap: ['Learn design tools (1 month)', 'Study design principles (2 months)', 'Build portfolio (3-4 months)', 'Practice real projects'],
      courses: ['UI/UX Design Principles', 'Web Development Fundamentals'],
      certifications: ['Google UX Design Certificate', 'Figma Advanced', 'Adobe Creative Suite Master'],
      companies: ['Google', 'Apple', 'Adobe', 'Figma', 'Zomato', 'Flipkart', 'Airbnb'],
      interviewTips: [
        'Build a strong portfolio with 5-6 case studies',
        'Practice design thinking and problem-solving',
        'Be ready to justify your design decisions',
        'Stay updated with latest design trends'
      ],
      relatedRoles: ['Graphic Designer', 'Product Designer', 'Web Designer', 'Interaction Designer'],
      faqs: [
        { q: 'Do I need formal degree?', a: 'No, a strong portfolio is more important.' },
        { q: 'Which tools to learn?', a: 'Figma (essential), Adobe XD, Protopie.' },
        { q: 'How many projects for portfolio?', a: 'Minimum 5-6 detailed case studies recommended.' }
      ]
    },
    {
      id: 4,
      title: 'Data Science',
      emoji: '📊',
      icon: '📈',
      description: 'Analyze data to drive business decisions',
      salaryRange: '₹6-30 LPA',
      demandLevel: 'Very High',
      timeToJob: '9-15 months',
      experience_levels: [
        { level: 'Fresher', role: 'Junior Data Analyst', salary: '₹6-9 LPA', skills: 'Python, SQL, Statistics' },
        { level: 'Mid-level (2-4 yrs)', role: 'Senior Analyst', salary: '₹9-18 LPA', skills: 'Machine Learning, Deep Learning' },
        { level: 'Senior (4+ yrs)', role: 'ML Engineer/Data Lead', salary: '₹18-30 LPA', skills: 'Advanced ML, Leadership' }
      ],
      skills: ['Statistics', 'Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Big Data'],
      roadmap: ['Python & Math (3 months)', 'SQL & Data Analysis (2 months)', 'Machine Learning (3 months)', 'Projects & Kaggle'],
      courses: ['Data Science with Python', 'School Math'],
      certifications: ['Google Cloud Data Engineer', 'AWS ML Specialist', 'IBM Data Science Professional'],
      companies: ['Google', 'Microsoft', 'Amazon', 'IBM', 'Flipkart', 'Swiggy', 'PhonePe'],
      interviewTips: [
        'Build ML projects from scratch',
        'Contribute to Kaggle competitions',
        'Practice SQL and statistics heavily',
        'Prepare business case studies'
      ],
      relatedRoles: ['Machine Learning Engineer', 'Data Analyst', 'Business Analyst', 'Computer Vision Engineer'],
      faqs: [
        { q: 'Do I need statistics background?', a: 'Helpful but not required. Learn on the go.' },
        { q: 'Which programming language?', a: 'Python is industry standard for Data Science.' },
        { q: 'How important are projects?', a: 'Very important. Employers look at your Kaggle/GitHub.' }
      ]
    },
    {
      id: 5,
      title: 'Cloud Computing & DevOps',
      emoji: '☁️',
      icon: '🌐',
      description: 'Manage cloud infrastructure and deployment pipelines',
      salaryRange: '₹7-28 LPA',
      demandLevel: 'Very High',
      timeToJob: '8-14 months',
      experience_levels: [
        { level: 'Fresher', role: 'Cloud Associate', salary: '₹7-10 LPA', skills: 'Cloud basics, Linux' },
        { level: 'Mid-level (2-5 yrs)', role: 'Cloud Engineer', salary: '₹10-18 LPA', skills: 'Infrastructure, Automation' },
        { level: 'Senior (5+ yrs)', role: 'Cloud Architect', salary: '₹18-28 LPA', skills: 'Architecture Design, Leadership' }
      ],
      skills: ['Linux', 'Docker', 'Kubernetes', 'AWS/Azure/GCP', 'CI/CD Pipelines', 'Infrastructure as Code'],
      roadmap: ['Learn Linux fundamentals (1 month)', 'Master Docker & containers (2 months)', 'Learn cloud platforms (2 months)', 'CI/CD & automation (2 months)'],
      courses: ['Programming Basics', 'Data Science with Python'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Kubernetes Admin (CKA)'],
      companies: ['Amazon', 'Microsoft', 'Google', 'IBM', 'HCL', 'Cognizant', 'Accenture'],
      interviewTips: [
        'Build projects using Docker and Kubernetes',
        'Practice AWS/Azure hands-on labs extensively',
        'Understand CI/CD pipelines deeply',
        'Be ready with real infrastructure scenarios'
      ],
      relatedRoles: ['DevOps Engineer', 'Cloud Administrator', 'Infrastructure Engineer', 'Release Engineer'],
      faqs: [
        { q: 'Do I need coding experience?', a: 'Coding knowledge helps, but not mandatory. Focus on infrastructure.' },
        { q: 'Which cloud platform to start?', a: 'AWS is most popular, followed by Azure and GCP.' },
        { q: 'How practical is the learning?', a: 'Very practical. Use free tiers to practice real scenarios.' }
      ]
    },
    {
      id: 6,
      title: 'Cybersecurity',
      emoji: '🔒',
      icon: '🛡️',
      description: 'Protect systems and data from cyber attacks',
      salaryRange: '₹8-32 LPA',
      demandLevel: 'Very High',
      timeToJob: '12-18 months',
      experience_levels: [
        { level: 'Fresher', role: 'Security Analyst', salary: '₹8-12 LPA', skills: 'Network basics, Threat analysis' },
        { level: 'Mid-level (3-6 yrs)', role: 'Security Engineer', salary: '₹12-20 LPA', skills: 'Penetration testing, Compliance' },
        { level: 'Senior (6+ yrs)', role: 'Security Architect', salary: '₹20-32 LPA', skills: 'Security design, Governance' }
      ],
      skills: ['Network Security', 'Cryptography', 'Penetration Testing', 'Ethical Hacking', 'OWASP', 'Linux Security'],
      roadmap: ['Networking fundamentals (2 months)', 'Learn ethical hacking (3 months)', 'Get certified (2-3 months)', 'Practice on CTF challenges'],
      courses: ['Programming Basics', 'Data Science with Python'],
      certifications: ['CEH (Certified Ethical Hacker)', 'CompTIA Security+', 'OSCP (Offensive Security)'],
      companies: ['Microsoft', 'Google', 'Amazon', 'IBM', 'TCS Cyber', 'Infosys Security', 'Wipro'],
      interviewTips: [
        'Be knowledgeable about latest cyber threats',
        'Demonstrate hands-on penetration testing skills',
        'Understand encryption and security protocols',
        'Show passion for continuous learning in security'
      ],
      relatedRoles: ['Penetration Tester', 'Security Analyst', 'Network Security Engineer', 'Security Consultant'],
      faqs: [
        { q: 'Is hacking involved?', a: 'Yes, but legal and ethical hacking only to find vulnerabilities.' },
        { q: 'Which certification to start with?', a: 'CompTIA Security+ or CEH are good starting points.' },
        { q: 'What about previous IT experience?', a: 'Helpful but not mandatory if you have strong learning ability.' }
      ]
    },
    {
      id: 7,
      title: 'Mobile App Development',
      emoji: '📱',
      icon: '🔧',
      description: 'Build native and cross-platform mobile applications',
      salaryRange: '₹6-24 LPA',
      demandLevel: 'Very High',
      timeToJob: '8-12 months',
      experience_levels: [
        { level: 'Fresher', role: 'Junior Mobile Dev', salary: '₹6-9 LPA', skills: 'App basics, UI implementation' },
        { level: 'Mid-level (2-4 yrs)', role: 'Senior Mobile Dev', salary: '₹9-16 LPA', skills: 'Architecture, APIs' },
        { level: 'Senior (4+ yrs)', role: 'Mobile Tech Lead', salary: '₹16-24 LPA', skills: 'Strategy, Mentoring' }
      ],
      skills: ['Java/Kotlin', 'Swift/Objective-C', 'React Native/Flutter', 'Mobile UI/UX', 'APIs', 'Databases'],
      roadmap: ['Choose platform (Android/iOS) (1 month)', 'Learn language & framework (3 months)', 'Build 3-4 apps (2-3 months)', 'App store deployment'],
      courses: ['Programming Basics', 'Web Development Fundamentals', 'UI/UX Design Principles'],
      certifications: ['Android Developer Certified', 'iOS Developer Certificate', 'Flutter Certification'],
      companies: ['Google', 'Apple', 'Microsoft', 'Samsung', 'Flipkart', 'Swiggy', 'Uber'],
      interviewTips: [
        'Build original apps and publish on app stores',
        'Master platform-specific design guidelines',
        'Understand mobile-specific challenges',
        'Show knowledge of performance optimization'
      ],
      relatedRoles: ['iOS Developer', 'Android Developer', 'Cross-platform Developer', 'Mobile Architect'],
      faqs: [
        { q: 'Android or iOS - which to learn first?', a: 'Start with Android (easier). Then iOS or Flutter.' },
        { q: 'Can I build apps without degree?', a: 'Absolutely! Strong portfolio matters more.' },
        { q: 'How to monetize mobile app?', a: 'Ad networks, in-app purchases, subscriptions, sponsorship.' }
      ]
    },
    {
      id: 8,
      title: 'Digital Marketing',
      emoji: '📢',
      icon: '📊',
      description: 'Promote brands and drive business growth online',
      salaryRange: '₹3-18 LPA',
      demandLevel: 'High',
      timeToJob: '6-10 months',
      experience_levels: [
        { level: 'Fresher', role: 'Marketing Executive', salary: '₹3-5 LPA', skills: 'Social media, Content basics' },
        { level: 'Mid-level (2-4 yrs)', role: 'Digital Marketing Manager', salary: '₹5-10 LPA', skills: 'SEO, SEM, Analytics' },
        { level: 'Senior (4+ yrs)', role: 'Marketing Head', salary: '₹10-18 LPA', skills: 'Strategy, Budget management' }
      ],
      skills: ['SEO/SEM', 'Social Media Marketing', 'Content Writing', 'Google Analytics', 'Email Marketing', 'Copywriting'],
      roadmap: ['Learn digital basics (1 month)', 'Master specific channels (2 months)', 'Build portfolio (2 months)', 'Freelance projects'],
      courses: ['Aptitude Test Preparation'],
      certifications: ['Google Analytics Master', 'HubSpot Marketing Hub', 'Facebook Blueprint Certified'],
      companies: ['Google', 'Meta', 'Amazon', 'Flipkart', 'Swiggy', 'OYO', 'MakeMyTrip'],
      interviewTips: [
        'Show data-driven approach with case studies',
        'Stay updated with algorithm changes',
        'Build a personal brand online',
        'Demonstrate ROI improvement for campaigns'
      ],
      relatedRoles: ['Content Marketer', 'SEO Specialist', 'Social Media Manager', 'Email Marketing Specialist'],
      faqs: [
        { q: 'Do I need to be technical?', a: 'Not required but technical knowledge helps with SEO/SEM.' },
        { q: 'What tools to learn?', a: 'Google Analytics, SEMrush, Ahrefs, Canva, Buffer, Mailchimp.' },
        { q: 'Can I start freelancing early?', a: 'Yes! Start with small projects and build portfolio.' }
      ]
    },
    {
      id: 9,
      title: 'Product Management',
      emoji: '🎯',
      icon: '💡',
      description: 'Lead product development and strategy',
      salaryRange: '₹8-35 LPA',
      demandLevel: 'Very High',
      timeToJob: '10-16 months',
      experience_levels: [
        { level: 'Fresher', role: 'Associate Product Manager', salary: '₹8-12 LPA', skills: 'Research, Analytics' },
        { level: 'Mid-level (2-5 yrs)', role: 'Senior PM', salary: '₹12-22 LPA', skills: 'Strategy, Roadmap' },
        { level: 'Senior (5+ yrs)', role: 'Director of Product', salary: '₹22-35 LPA', skills: 'Vision, Leadership' }
      ],
      skills: ['Product Strategy', 'User Research', 'Data Analytics', 'Communication', 'Business Acumen', 'Technical Basics'],
      roadmap: ['Learn PM fundamentals (1 month)', 'Understand user research (2 months)', 'Build product portfolio (3-4 months)', 'Network with PMs'],
      courses: ['Programming Basics', 'Data Science with Python'],
      certifications: ['Reforge Product Management', 'Product School PM Certificate', 'Pragmatic Institute'],
      companies: ['Google', 'Meta', 'Microsoft', 'Flipkart', 'Swiggy', 'Paytm', 'Amazon India'],
      interviewTips: [
        'Solve real product case studies',
        'Show data-driven decision making',
        'Understand user psychology deeply',
        'Be ready to discuss trade-offs'
      ],
      relatedRoles: ['APM (Associate Product Manager)', 'Product Analyst', 'Growth PM', 'Technical PM'],
      faqs: [
        { q: 'Do I need to code as PM?', a: 'Not required but technical understanding helps greatly.' },
        { q: 'What background is needed?', a: 'Any background works. Strong analytical skills needed.' },
        { q: 'How to transition to PM role?', a: 'APM programs or PM internships are common entry points.' }
      ]
    },
    {
      id: 10,
      title: 'Quality Assurance & Testing',
      emoji: '✅',
      icon: '🧪',
      description: 'Ensure software quality through testing',
      salaryRange: '₹4-18 LPA',
      demandLevel: 'High',
      timeToJob: '6-10 months',
      experience_levels: [
        { level: 'Fresher', role: 'QA Tester', salary: '₹4-6 LPA', skills: 'Manual testing, Test cases' },
        { level: 'Mid-level (2-4 yrs)', role: 'QA Engineer', salary: '₹6-12 LPA', skills: 'Automation, Test frameworks' },
        { level: 'Senior (4+ yrs)', role: 'QA Lead', salary: '₹12-18 LPA', skills: 'Strategy, Team management' }
      ],
      skills: ['Manual Testing', 'Automation Testing', 'Selenium', 'Test Planning', 'Bug Reporting', 'API Testing'],
      roadmap: ['Learn testing basics (1 month)', 'Master automation tools (2 months)', 'Selenium/Python (2 months)', 'Real projects'],
      courses: ['Programming Basics', 'Data Science with Python'],
      certifications: ['ISTQB Test Engineer', 'Selenium WebDriver', 'JMETER Performance Testing'],
      companies: ['Microsoft', 'Google', 'TCS QA', 'HCL QA Division', 'Infosys', 'Cognizant', 'Accenture'],
      interviewTips: [
        'Build portfolio with automation scripts',
        'Show knowledge of testing frameworks',
        'Understand different testing types deeply',
        'Demonstrate problem-solving ability'
      ],
      relatedRoles: ['Automation Engineer', 'Performance Tester', 'Security Tester', 'Test Architect'],
      faqs: [
        { q: 'Do I need programming knowledge?', a: 'For automation, yes. For manual testing, no.' },
        { q: 'Which automation tool is best?', a: 'Selenium is most popular for web applications.' },
        { q: 'Career growth possible?', a: 'Yes! QAs can move to development or management roles.' }
      ]
    },
    {
      id: 11,
      title: 'AI & Machine Learning Engineer',
      emoji: '🤖',
      icon: '⚡',
      description: 'Build intelligent systems with artificial intelligence',
      salaryRange: '₹10-40 LPA',
      demandLevel: 'Very High',
      timeToJob: '12-18 months',
      experience_levels: [
        { level: 'Fresher', role: 'ML Engineer', salary: '₹10-15 LPA', skills: 'ML basics, Python, Libraries' },
        { level: 'Mid-level (3-5 yrs)', role: 'Senior ML Engineer', salary: '₹15-25 LPA', skills: 'Deep Learning, NLP' },
        { level: 'Senior (5+ yrs)', role: 'ML Architect', salary: '₹25-40 LPA', skills: 'Advanced AI, Strategy' }
      ],
      skills: ['Python', 'TensorFlow/PyTorch', 'Deep Learning', 'NLP', 'Computer Vision', 'ML Ops'],
      roadmap: ['Master Python & math (3 months)', 'Learn ML algorithms (3 months)', 'Deep Learning frameworks (2-3 months)', 'Build models'],
      courses: ['Data Science with Python', 'School Math'],
      certifications: ['TensorFlow Developer', 'Google AI ML Certificate', 'Fast.ai Deep Learning'],
      companies: ['Google AI', 'Meta AI Research', 'Microsoft AI', 'Tesla AI', 'Flipkart', 'Swiggy', 'PhonePe'],
      interviewTips: [
        'Build original ML projects end-to-end',
        'Understand math behind algorithms deeply',
        'Stay updated with latest AI research papers',
        'Practice on competitions like Kaggle'
      ],
      relatedRoles: ['Deep Learning Engineer', 'NLP Engineer', 'Computer Vision Engineer', 'AI Researcher'],
      faqs: [
        { q: 'Math knowledge required?', a: 'Understanding of linear algebra, calculus helpful but learnable.' },
        { q: 'How different from Data Science?', a: 'ML focuses on building models. DS is broader analytics.' },
        { q: 'What hardware needed?', a: 'GPUs help but cloud services make it affordable.' }
      ]
    },
    {
      id: 12,
      title: 'Blockchain Developer',
      emoji: '⛓️',
      icon: '🔗',
      description: 'Build decentralized applications and smart contracts',
      salaryRange: '₹12-40 LPA',
      demandLevel: 'Very High',
      timeToJob: '10-16 months',
      experience_levels: [
        { level: 'Fresher', role: 'Junior Blockchain Dev', salary: '₹12-18 LPA', skills: 'Solidity basics, Smart contracts' },
        { level: 'Mid-level (2-4 yrs)', role: 'Blockchain Engineer', salary: '₹18-28 LPA', skills: 'DeFi, Advanced contracts' },
        { level: 'Senior (4+ yrs)', role: 'Blockchain Architect', salary: '₹28-40 LPA', skills: 'Protocol design, Strategy' }
      ],
      skills: ['Solidity', 'Smart Contracts', 'Ethereum', 'Web3.js', 'Cryptography', 'Consensus Mechanisms'],
      roadmap: ['Learn blockchain basics (2 months)', 'Master Solidity (2 months)', 'Build DApps (3 months)', 'Audit smart contracts'],
      courses: ['Programming Basics', 'Data Science with Python'],
      certifications: ['Ethereum Developer Certified', 'Certified Blockchain Professional', 'Hyperledger Fabric'],
      companies: ['Ethereum Foundation', 'Consensys', 'Polygon', 'Cisco Blockchain', 'Microsoft Azure', 'JPMorgan Quorum'],
      interviewTips: [
        'Build deployed DApps and smart contracts',
        'Understand tokenomics and DeFi protocols',
        'Show security mindset for smart contracts',
        'Be aware of gas optimization techniques'
      ],
      relatedRoles: ['Smart Contract Developer', 'DeFi Engineer', 'Blockchain Architect', 'Web3 Developer'],
      faqs: [
        { q: 'Is blockchain future-proof?', a: 'Growing significantly. Learn but diversify skills.' },
        { q: 'What blockchain to start with?', a: 'Ethereum is most established and job-rich.' },
        { q: 'How risky is crypto field?', a: 'Volatile but tech side is growing steadily.' }
      ]
    }
  ];

  const filteredCareers = careers.filter(career =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
    setActiveTab({ ...activeTab, [index]: 'overview' });
  };

  const handleProgressUpdate = (careerTitle, value) => {
    setUserProgress({ ...userProgress, [careerTitle]: value });
  };

  return (
    <div className="career-container">
      <div className="career-header">
        <h1>🚀 Career Guidance & Roadmap</h1>
        <p>Explore diverse career paths and build your future</p>
        <button className="btn-skills-hub" onClick={() => navigate('/skills')}>
          📚 View Skills Mastery Hub →
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search careers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Comparison Mode */}
      {compareCareer && (
        <div className="comparison-section">
          <h2>🔄 Career Comparison</h2>
          <div className="comparison-close" onClick={() => setCompareCareer(null)}>✕</div>
          <div className="comparison-cards">
            {[compareCareer, ...filteredCareers.filter(c => c.id !== compareCareer.id)].slice(0, 2).map((career, idx) => (
              <div key={idx} className="comparison-card">
                <h3>{career.emoji} {career.title}</h3>
                <div className="comparison-data">
                  <div className="comparison-row">
                    <span>💰 Salary:</span>
                    <strong>{career.salaryRange}</strong>
                  </div>
                  <div className="comparison-row">
                    <span>📈 Demand:</span>
                    <strong>{career.demandLevel}</strong>
                  </div>
                  <div className="comparison-row">
                    <span>⏱️ Time to Job:</span>
                    <strong>{career.timeToJob}</strong>
                  </div>
                  <div className="comparison-row">
                    <span>🎯 Skills Count:</span>
                    <strong>{career.skills.length}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Career Cards */}
      <div className="career-list">
        {filteredCareers.map((career, index) => (
          <div key={career.id} className={`career-card ${expandedCard === index ? 'expanded' : ''}`}>
            {/* Preview Section */}
            <div className="card-preview" onClick={() => toggleCard(index)}>
              <div className="card-header">
                <div className="career-icon">{career.emoji}</div>
                <div className="career-info">
                  <h3>{career.title}</h3>
                  <p>{career.description}</p>
                </div>
                <div className="card-stats">
                  <div className="stat-item">
                    <span className="stat-label">Salary</span>
                    <span className="stat-value">{career.salaryRange}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Demand</span>
                    <span className={`stat-value demand-${career.demandLevel.replace(/\s/g, '').toLowerCase()}`}>
                      {career.demandLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="progress-tracker">
                <label>Your Progress:</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={userProgress[career.title] || 0}
                  onChange={(e) => handleProgressUpdate(career.title, e.target.value)}
                  className="progress-slider"
                  onClick={(e) => e.stopPropagation()}
                />
                <span className="progress-text">{userProgress[career.title] || 0}%</span>
              </div>
            </div>

            {/* Expanded Details */}
            {expandedCard === index && (
              <div className="card-expanded">
                {/* Tabs */}
                <div className="card-tabs">
                  <button
                    className={`tab-btn ${(activeTab[index] || 'overview') === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab({ ...activeTab, [index]: 'overview' })}
                  >
                    📋 Overview
                  </button>
                  <button
                    className={`tab-btn ${(activeTab[index] || 'overview') === 'roadmap' ? 'active' : ''}`}
                    onClick={() => setActiveTab({ ...activeTab, [index]: 'roadmap' })}
                  >
                    🛣️ Roadmap
                  </button>
                  <button
                    className={`tab-btn ${(activeTab[index] || 'overview') === 'interview' ? 'active' : ''}`}
                    onClick={() => setActiveTab({ ...activeTab, [index]: 'interview' })}
                  >
                    🎤 Interview Tips
                  </button>
                  <button
                    className={`tab-btn ${(activeTab[index] || 'overview') === 'faq' ? 'active' : ''}`}
                    onClick={() => setActiveTab({ ...activeTab, [index]: 'faq' })}
                  >
                    ❓ FAQs
                  </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {(activeTab[index] || 'overview') === 'overview' && (
                    <div className="overview-section">
                      <div className="section-box">
                        <h4>💼 Experience Levels</h4>
                        <div className="experience-levels">
                          {career.experience_levels.map((exp, i) => (
                            <div key={i} className="exp-item">
                              <div className="exp-level">{exp.level}</div>
                              <div className="exp-details">
                                <p><strong>Role:</strong> {exp.role}</p>
                                <p><strong>Salary:</strong> {exp.salary}</p>
                                <p><strong>Skills:</strong> {exp.skills}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="section-box">
                        <h4>🎯 Required Skills</h4>
                        <div className="skills-grid">
                          {career.skills.map((skill, i) => (
                            <button
                              key={i}
                              className="skill-badge skill-badge-clickable"
                              onClick={() => navigate(`/skills?skill=${encodeURIComponent(skill)}`)}
                              title="Click to view skill details"
                            >
                              {skill} →
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="section-box">
                        <h4>🏢 Top Companies Hiring</h4>
                        <div className="companies-grid">
                          {career.companies.map((company, i) => (
                            <span key={i} className="company-badge">{company}</span>
                          ))}
                        </div>
                      </div>

                      <div className="section-box">
                        <h4>🎓 Related Certifications</h4>
                        <div className="certifications-list">
                          {career.certifications.map((cert, i) => (
                            <div key={i} className="cert-item">✓ {cert}</div>
                          ))}
                        </div>
                      </div>

                      <div className="section-box">
                        <h4>🔗 Related Job Roles</h4>
                        <div className="roles-grid">
                          {career.relatedRoles.map((role, i) => (
                            <span key={i} className="role-badge">{role}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {(activeTab[index] || 'overview') === 'roadmap' && (
                    <div className="roadmap-section">
                      <h4>📍 Your Path to Success</h4>
                      <div className="roadmap-timeline">
                        {career.roadmap.map((step, i) => (
                          <div key={i} className="timeline-step">
                            <div className="step-number">{i + 1}</div>
                            <div className="step-content">
                              <p>{step}</p>
                            </div>
                            {i < career.roadmap.length - 1 && <div className="step-arrow">↓</div>}
                          </div>
                        ))}
                      </div>

                      <div className="section-box">
                        <h4>📚 Recommended Courses</h4>
                        <div className="courses-list">
                          {career.courses.map((course, i) => (
                            <div key={i} className="course-item">📖 {course}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {(activeTab[index] || 'overview') === 'interview' && (
                    <div className="interview-section">
                      <h4>🎤 Interview Preparation Tips</h4>
                      <div className="tips-list">
                        {career.interviewTips.map((tip, i) => (
                          <div key={i} className="tip-item">
                            <div className="tip-number">{i + 1}</div>
                            <div className="tip-text">{tip}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(activeTab[index] || 'overview') === 'faq' && (
                    <div className="faq-section">
                      <h4>❓ Frequently Asked Questions</h4>
                      <div className="faq-list">
                        {career.faqs.map((faq, i) => (
                          <div key={i} className="faq-item">
                            <div className="faq-q">Q: {faq.q}</div>
                            <div className="faq-a">A: {faq.a}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                  <button className="btn-start">Start Learning</button>
                  <button
                    className="btn-compare"
                    onClick={() => setCompareCareer(career)}
                  >
                    Compare
                  </button>
                  <button className="btn-close" onClick={() => toggleCard(index)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCareers.length === 0 && (
        <div className="no-results">
          <p>No careers found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;