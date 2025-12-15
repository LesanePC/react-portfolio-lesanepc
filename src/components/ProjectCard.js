import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, stack, demo, code, type }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className={`project-card__badge project-card__badge--${type}`}>
          {type === "commercial" ? "Коммерческий проект" : "Учебный проект"}
        </span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>

      <ul className="project-card__stack">
        {stack.map((item) => (
          <li key={item} className="project-card__tag">
            {item}
          </li>
        ))}
      </ul>

      <div className="project-card__links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="project-card__btn">
            Демо
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noreferrer" className="project-card__link">
            Код на GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
