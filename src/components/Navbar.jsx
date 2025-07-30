import React, { useRef, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const indicatorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (e) => {
    const link = e.target;
    const rect = link.getBoundingClientRect();
    const parentRect = link.parentElement.parentElement.getBoundingClientRect();

    if (window.innerWidth < 768) {
      const offsetTop = rect.top - parentRect.top;
      indicatorRef.current.style.transform = `translateY(${offsetTop}px)`;
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.height = `${rect.height}px`;
      indicatorRef.current.style.opacity = 1;
    } else {
      const offsetLeft = rect.left - parentRect.left;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.height = `40px`;
      indicatorRef.current.style.opacity = 1;
    }
  };

  const handleLeave = () => {
    indicatorRef.current.style.opacity = 0;
  };

  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="name">
          <span>P</span>ALLA <span>D</span>EEPIKA
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`} onMouseLeave={handleLeave}>
          <li><a href="#home" onMouseEnter={handleHover}>Home</a></li>
          <li><a href="#about" onMouseEnter={handleHover}>About</a></li>
          <li><a href="#projects" onMouseEnter={handleHover}>Projects</a></li>
          <li><a href="#contact" onMouseEnter={handleHover}>Contact</a></li>
          <span className="hover-indicator" ref={indicatorRef}></span>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
