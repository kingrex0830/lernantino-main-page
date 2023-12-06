import React, { useState } from 'react';
import Project from "../Project";
import pic from '../../assets/small/portraits/pic.jpg';

function About() {
  const [projects] = useState([
    {
      name: 'svg-logo-generator',
      description: 'SVG Logo Generator',
      link: "https://github.com/kingrex0830/svg-logo-generator",
      repo: "https://github.com/kingrex0830/svg-logo-generator"
    },
    {
      name: 'password-generator',
      description: 'Password Generator',
      link: "https://kingrex0830.github.io/password-generator/",
      repo: "https://github.com/kingrex0830/password-generator"
    },
    {
      name: 'weather-app',
      description: 'Weather App',
      link: "https://kingrex0830.github.io/weather-app/",
      repo: "https://github.com/kingrex0830/weather-app"
    },
    {
      name: 'work-day-scheduler',
      description: 'Work Day Scheduler',
      link: "https://kingrex0830.github.io/work-day-sched/",
      repo: "https://github.com/kingrex0830/work-day-sched"
    },
    {
      name: 'readme-generator',
      description: 'ReadMe Generator',
      link: "https://github.com/kingrex0830/readme-generator",
      repo: "https://github.com/kingrex0830/readme-generator"
    }
  ]);

  return (
    <section className="my-5">

      <div className="row">
        <div className="my-2 col-md-6">
          <div className="profile-img my-5">
            <img
                style={{
                  width: "135px",
                  height: "135px",
                  borderRadius: "50%",
                }}
                src={pic}
                alt="A Picture of Yours Truly"
              />
          </div>
          <p>
            Hi! I'm Yoshi Cea, 20 year old Canadian programmer and writer.
          </p>
          <p>
            I am a student at the University of Toronto, enrolled in their Full-Stack Web Development bootcamp. I've been adept to computers ever since I started using them,
            and I've been coming up with stories since I could comprehend speech. I've worked in construction before, and have experience using Priva to manage employees, schedules,
            and production in a greenhouse or packhouse evironment.
          </p>
          <p>
            Contact me through my e-mail at ycea0830@yahoo.com, or call/text me at 519-991-2505.
          </p>
        </div>
        <div className="my-2 col-lg-4">
        <p>
          Download my <a href={require(`../../assets/Resume.pdf`)} download>resume. Contact info inside.</a>
          </p>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>

      <div className="flex-row my-5">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>

    </section>
  );
}

export default About;
