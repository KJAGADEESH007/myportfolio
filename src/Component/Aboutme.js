import React from "react";
import "./Aboutme.scss";
import resume from "../assets/jaadeesh_res.pdf";
import { Button } from "@mui/material";
const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="aboutme1">
        <div className="aboutme2">
          <h1>About Me</h1>
          <p>
            {" "}
            Hello! I'm Jagadeesh, a passionate and dedicated male student born on
            March 17 2000, currently residing in the vibrant city of Bangalore,
            Karnataka, India. I am pursuing a Master of Computer Applications
            (M.C.A) degree in Engineering from Dayananda Sagar Institutions,
            with an anticipated graduation in 2023.
          </p>
          <h2> Education:</h2>
          <p>
            Degree: Master of Computer Applications (M.C.A) Institution:
            Dayananda Sagar Institutions, Bangalore, Karnataka, India Expected
            Graduation Year: 2023
          </p>
          <h2> Career and Employment:</h2>
          <p>
            {" "}
            I worked as an Mobile Application Developerand  React Developer Intern, where I have
            been gaining valuable experience in the field of Mobile Application and web development. My
            role at Promena LLP has provided me with practical exposure to
            real-world projects and challenges, allowing me to apply my academic
            knowledge to practical scenarios.
          </p>
          <h2> Passion for Coding:</h2>{" "}
          <p>
            My journey in the world of technology has been driven by an
            unwavering passion for coding. I find immense joy in translating
            creative ideas into functional and visually appealing websites. My
            commitment to honing my coding skills has been a driving force
            throughout my academic and professional journey.
          </p>
          <h2>Career Aspirations:</h2>
          <p>
            My ultimate career goal is to become a Full Stack Developer. I am
            deeply interested in crafting user-friendly and visually stunning
            websites that not only meet user needs but also create memorable
            online experiences. I am committed to staying updated with the
            latest web development trends and technologies to excel in this
            dynamic field.
          </p>
          <a href={resume} download="jagadeesh">
            <Button>Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
