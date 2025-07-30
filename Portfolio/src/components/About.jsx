import React, { useState } from 'react';
import './About.css';
import profileImg from '../assets/deepika-profile.png'; // Replace with your actual image

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <ul>
            {/* <li><span>UI/UX:</span> Designing Web/App Interfaces</li>
            <li><span>Frontend:</span> React.js, HTML, CSS, JS</li>
            <li><span>Backend:</span> Node.js, Express, PHP</li>
            <li><span>Database:</span> MongoDB, MySQL</li> */}

           <li><span> Frontend:</span> HTML5, CSS3, JavaScript (ES6+),Bootstrap, React.js</li>
           <li><span>Backend (Basics):</span> Node.js, Express.js</li>  
           <li><span> Version Control & Deployment:</span>Git, GitHub, Firebase</li> 
        <li><span> Other:</span> PHP, MySQL, MongoDB, Agile</li>   

          </ul>
        );
      case 'experience':
        return (
          <ul>
            <li><span>Intern - Full Stack Developer</span> @ RGUKT | 2023</li>
            <li>Built dynamic full-stack applications and admin dashboards.</li>
            <li> Led front-end development for web apps using React.js, HTML/CSS, and Firebase.</li>
            <li>Integrated PHP and MySQL for back-end operations and database management.</li>
          </ul>
        );
      case 'education':
        return (
          <ul>
            <li><span>B.Tech (CSE)</span> - Rajiv Gandhi University of Knowledge Technologies</li>
            <li>Graduated in 2025 with core projects in web development</li>
            <li>CGPA-8.86</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={profileImg} alt="Deepika" />
        </div>
        <div className="about-right">
          <h2> <span>A</span>bout <span>M</span>e</h2>
          <p>
             Full-Stack Developer skilled in building responsive, scalable web applications using the React.js, Node.js). Proficient in front
end technologies like MERN stack (MongoDB, Express.js, HTML, CSS, JavaScript, and back-end systems using MySQL,
 Firebase, and REST APIs. Strong grasp of agile methodologies, version control with Git and real-time data integration. Built
 and deployed 3+ full-stack projects and currently seeking roles in web or software development. 
          </p>

          <div className="tabs">
            <button
              className={activeTab === 'skills' ? 'active' : ''}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={activeTab === 'experience' ? 'active' : ''}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
