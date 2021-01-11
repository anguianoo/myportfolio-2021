import React from "react";
import { ProjectItems } from "./ProjectItems";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      {ProjectItems.map((item, i) => {
        return (
          <div key={i} className="column">
            <img src={item.image} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="codeStack">{item.codeStack}</p>
            <a href={item.url} target="_blank">
              Repo
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
