import React from "react";
import "./Programming.css";

const webSkills = [
  { name: "HTML", level: 2 },
  { name: "CSS", level: 2 },
  { name: "JS/TS", level: 3 },
  { name: "React", level: 1 },
  { name: "Flutter", level: 1 },
];
const langSkills = [
  { name: "Python", level: 3 },
  { name: "Java", level: 3 },
  { name: "C/C++", level: 2 },
];
const Stars = ({ level }) => {
  if (level === 1) return <span style={{ color: "#abb4bf" }}>★</span>;
  if (level === 2) return <span style={{ color: "#facc15" }}>★★</span>;
  if (level === 3) return <span style={{ color: "#f97316" }}>★★★</span>;
};
const SkillGroup = ({ title, skills }) => (
  <div className="skill-group">
    <h3 className="group-title">{title}</h3>
    <ul className="skill-list" style={{ listStyleType: "none" }}>
      {skills.map((skill) => (
        <li className="skill-item" key={skill.name}>
          <span className="skill-name">{skill.name}</span>
          <Stars level={skill.level} />
        </li>
      ))}
    </ul>
  </div>
);

const Programming = () => {
  const [currentSkill, setCurrentSkill] = React.useState("webSkills");

  const isWebSkills = currentSkill === "webSkills";
  const skills = isWebSkills ? webSkills : langSkills;
  const title = isWebSkills ? "Web Development" : "Language";

  return (
    <section className="programming">
      <h1 className="programming-title">개발 스택</h1>
      <div className="card-container">
        <button
          className={`arrow-button left ${isWebSkills ? "invisible" : ""}`}
          onClick={() => setCurrentSkill("webSkills")}
        >
          ◀
        </button>

        <div className="card">
          <SkillGroup title={title} skills={skills} />
        </div>

        <button
          className={`arrow-button right ${!isWebSkills ? "invisible" : ""}`}
          onClick={() => setCurrentSkill("langSkills")}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Programming;
