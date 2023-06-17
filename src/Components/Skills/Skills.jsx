import React from "react";

import "./Skills.css";
import DropDownSkills from "./DropDownSkills";

const Skills = () => {
  const frontEndSkills = {
    skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP"],
    skillName: "Front End",
  };
  const backEndEndSkills = {
    skills: ["MYSQL", "MONGODB", "NODEJS", "EXPRESS"],
    skillName: "Back End",
  };
  return (
    <div>
      <span id="section-divider"></span>
      <div className="skills">
        <div className="frontEnd">
          <DropDownSkills userSkills={frontEndSkills} />
        </div>
        <div className="backend">
          <DropDownSkills userSkills={backEndEndSkills} />
        </div>
        <div className="languages">
          <DropDownSkills userSkills={frontEndSkills} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
