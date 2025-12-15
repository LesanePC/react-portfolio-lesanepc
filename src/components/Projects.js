import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects__inner card">
        <h2 className="projects__title">Проекты</h2>
        <p className="projects__subtitle">
          Подборка коммерческих и учебных работ, в которых я отрабатывал верстку,
          JavaScript и React.
        </p>

        {/* Фильтры */}
        <div className="projects__filters">
          <button
            className={
              activeFilter === "all"
                ? "projects__filter projects__filter--active"
                : "projects__filter"
            }
            onClick={() => setActiveFilter("all")}
          >
            Все
          </button>
          <button
            className={
              activeFilter === "commercial"
                ? "projects__filter projects__filter--active"
                : "projects__filter"
            }
            onClick={() => setActiveFilter("commercial")}
          >
            Коммерческие
          </button>
          <button
            className={
              activeFilter === "study"
                ? "projects__filter projects__filter--active"
                : "projects__filter"
            }
            onClick={() => setActiveFilter("study")}
          >
            Учебные
          </button>
        </div>

        {/* Новый счётчик */}
        <p className="projects__counter">
          Найдено проектов: {filteredProjects.length}
        </p>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
