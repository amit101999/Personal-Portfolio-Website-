import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Skills.css";

const DropDownSkills = ({ userSkills }) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {userSkills.skillName} Skill
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {userSkills.skills.map((item) => {
            return <Dropdown.Item href="#/action-2">{item}</Dropdown.Item>;
          })}
          {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>  */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownSkills;
