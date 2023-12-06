import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'eventfinderr',
      description: 'SVG Logo Generator',
      link: "https://github.com/kingrex0830/svg-logo-generator",
      repo: "https://github.com/kingrex0830/svg-logo-generator"
    },
    {
      name: 'student-manager',
      description: 'Password Generator',
      link: "https://github.com/kingrex0830/password-generator",
      repo: "https://github.com/kingrex0830/password-generator"
    },
    {
      name: 'weather-app',
      description: 'Weather App',
      link: "https://kingrex0830.github.io/weather-app/",
      repo: "https://github.com/kingrex0830/weather-app"
    },
    {
      name: 'text-editor',
      description: 'Work Day Scheduler',
      link: "https://kingrex0830.github.io/work-day-sched/",
      repo: "https://github.com/kingrex0830/work-day-sched"
    },
    {
      name: 'note-taker',
      description: 'ReadMe Generator',
      link: "https://github.com/kingrex0830/readme-generator",
      repo: "https://github.com/kingrex0830/readme-generator"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
