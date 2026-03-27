import type { JSX } from 'react';
import antlrLogo from "@/assets/antlr-logo.svg";
import './Skills.css';

// MOCK DATA (Replace this with your actual import from @/lib/data)
const myStack = {
  "Languages": [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
  ],
  "Frameworks": [
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
  ],
  "Developer Tools": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
  ],
  "Libraries": [
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "ANTLR", icon: antlrLogo }
  ]
};

const Skills = (): JSX.Element => {
  return (
    <section id="my-stack" className="skills-section full-screen-section">
      <div className="container">
        
        <div className="skills-header">
          <h4>
            <span className="gradient-text">MY STACK</span>
          </h4>
        </div>

        <div className="skills-content">
          {
            Object.entries(myStack).map(([key, value]) => (
              <div className="skills-category-wrapper" key={key}>
                
                {/* Category Title Column */}
                <div>
                  <h3 className="skills-category-title">
                    {key}
                  </h3>
                </div>

                {/* Skills List Column */}
                <div className="skills-list">
                  {
                    value.map((item) => (
                      <div
                        className="skill-item"
                        key={item.name}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="skill-icon"
                        />
                        <span>
                          {item.name}
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skills;