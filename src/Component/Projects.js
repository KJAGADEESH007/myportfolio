import React from "react";
import img1 from "../assets/images/vetcare1.jpg";
import mavk1 from "../assets/images/vetcare.png";
import engimach1 from "../assets/images/engimach1.JPEG";
import "./Projects.scss";

import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> MY WORKS</h1>
      <h2>Projects:</h2>
      <div className="project">
        <div className="projects">

        <div className="projectss">
            <div className="image-container">
              <img src={engimach1} alt="PROJECT ONE" class="zoom-image" />
              <div className="overlay">
                <button
                  className="view-button"
                  onClick={() => navigate("/engimach")}
                >
                  See Demo
                </button>
              </div>
            </div>
            <p className="projectss_title">VALUTR TRADE MOBILE</p>
            <p className="projectss_skills">
              Skills : FLUTTER FRAMEWORK,Dart Language,BlokChain
            </p>
            {/* <a href="">VIEW PROJECT</a> */}
          </div>


          <div className="projectss">
            <div className="image-container">
              <img src={mavk1} alt="PROJECT ONE" class="zoom-image" />
              <div className="overlay">
                <button
                  className="view-button"
                  onClick={() => navigate("/project1")}
                >
                  See Demo
                </button>
              </div>
            </div>
            <p className="projectss_title">Veterinary Healthcare and Products</p>
            <p className="projectss_skills">
              Skills : Java libraries ,Google FireBase 
            </p>
          </div>

          <div className="projectss">
            <div className="image-container">
              <img src={img1} alt="PROJECT ONE" class="zoom-image" />
              <div className="overlay">
                <button
                  className="view-button"
                  onClick={() => navigate("/project1")}
                >
                  See Demo
                </button>
              </div>
            </div>
            <p className="projectss_title">TO-DO List</p>
            <p className="projectss_skills">
              Skills : HTML, CSS, JAVASCRIPT, BOOTSTRAP
            </p>
            {/* <a href="https://todo-list54.netlify.app/">VIEW PROJECT</a> */}
          </div>

  

  

        </div>
      </div>
    </div>
  );
};

export default Projects;
