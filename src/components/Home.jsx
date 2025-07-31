import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import GridFlash from "./GridFlash";

const Home = () => {
  return (
    <section id="home" className="home">
      <GridFlash />
      <div className="home-content">
        <div className="fall-in delay-1">
          <h1>Hi, I'm Deepika</h1>
        </div>

        <div className="fall-in delay-2 typed-text">
          <span style={{ color: "#fbdc61", fontSize: "1.5rem" }}>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        <div className="fall-in delay-3">
          <p>
            I build responsive, scalable web applications with clean, intuitive
            UI and solid backend logic.
          </p>
        </div>

      

        <div className="fall-in delay-5">
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a href="/Resume-1.pdf" download className="btn download-btn">
            Download Resume
          </a>
        </div>
      </div>
       <div className="fall-in delay-4">
          <div className="social-icons">
            <a href="https://github.com/Deepika956" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/deepikapalla" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

      {/* <div className="scroll-down">&#8595;</div> */}
    </section>
  );
};

export default Home;
