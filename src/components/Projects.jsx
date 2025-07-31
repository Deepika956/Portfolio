import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Doctor Appointment Booking Web-Application",
    description: "Full-stack app to book appointments with doctors. Features login, profiles, and time slot selection.",
    tech: "React,Express.js, Node.js, MongoDB",
    link: "https://github.com/Deepika956/Doc-Online.git"
  },
  {
    title: "Blogging Web-Application",
    description: "Dynamic blog platform with user authentication and markdown support.",
    tech: "React, Express, Firebase",
    link: "https://github.com/Deepika956/my-projects.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
            <a href={proj.link} target="_blank" rel="noreferrer" className="btn">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
