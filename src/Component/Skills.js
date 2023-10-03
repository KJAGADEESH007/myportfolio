import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./Skills.scss";

const Skills = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <div className="Skills">
        
      <div className="skills1">
      <h1>SKILLS</h1>
      <div className="box">
          <p>JAVA:</p>
          <BorderLinearProgress variant="determinate" value={80} /><span>70%</span>
        </div>
        <div className="box">
          <p>Flutter Framework:</p>
          <BorderLinearProgress variant="determinate" value={80} /><span>80%</span>
        </div>
        <div className="box">
          <p>REST API:</p>
          <BorderLinearProgress variant="determinate" value={80} /><span>50%</span>
        </div>
        <div className="box">
          <p>HTML:</p>
          <BorderLinearProgress variant="determinate" value={90} /><span>70%</span>
        </div>
        <div className="box">
          <p>CSS:</p>
          <BorderLinearProgress variant="determinate" value={90} /><span>70%</span>
        </div>
        <div className="box">
          <p>JAVASCRIPT:</p>
          <BorderLinearProgress variant="determinate" value={80} /><span>80%</span>
        </div>
        <div className="box">
          <p>REACT:</p>
          <BorderLinearProgress variant="determinate" value={80} /><span>80%</span>
        </div>
        <div className="box">
          <p>WORDPRESS:</p>
          <BorderLinearProgress variant="determinate" value={60} /><span>60%</span>
        </div>
        <div className="box">
          <p>SCSS:</p>
          <BorderLinearProgress variant="determinate" value={90} /><span>90%</span>
        </div>
        <div className="box">
          <p>BOOTSTRAP:</p>
          <BorderLinearProgress variant="determinate" value={70} /><span>70%</span>
        </div>
        <div className="box">
          <p>MYSQL:</p>
          <BorderLinearProgress variant="determinate" value={60} /><span>60%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
