import React from "react";
import type { JSX } from "react";
import { Button } from "@/components"
import "./Projects.css";

// MOCK DATA (Will replace with your API data later)
const PROJECTS = [
  {
    slug: "tyc-compiler",
    title: "TyC-Compiler",
    techStack: ["C", "C++", "Compiler Design", "ANTLR"],
    thumbnail: "https://via.placeholder.com/400x500/001c24/00c8ff?text=TyC+Compiler"
  },
  {
    slug: "study-buddy",
    title: "Study Buddy",
    techStack: ["ReactJS", "ExpressJS", "Node.js", "MySQL"],
    thumbnail: "https://via.placeholder.com/400x500/001c24/00c8ff?text=Study+Buddy"
  },
  {
    slug: "quickbuy",
    title: "QuickBuy",
    techStack: ["JavaScript", "ReactJS", "CSS", "API"],
    thumbnail: "https://via.placeholder.com/400x500/001c24/00c8ff?text=QuickBuy"
  }
];

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="projects-header">
          <h4>
            <span className="gradient-text">SELECTED PROJECTS</span>
          </h4>
        </div>

        <div className="projects-list">
          {
            PROJECTS.map((project, index) => (
              <a  
                className="project-item" 
                key={project.slug}
              >
                
                {/* MOBILE: Inline Image */}
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} thumbnail`} 
                  className="project-image-mobile" 
                />

                <div className="project-info-wrapper">
                  {/* INDEX NUMBER (e.g., 01.) */}
                  <h4 className="project-index">
                    {(index + 1).toString().padStart(2, '0')}.
                  </h4>

                  <div className="project">
                    {/* TITLE & HOVER ICON */}
                    <h3 className="project-title">
                      {project.title}
                    </h3>

                    {/* TECH STACK LIST */}
                    <div className="project-tech">
                      {
                        project.techStack.slice(0, 3).map((tech, idx, arr) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {/* Renders the dot separator, except after the last item */}
                            {idx !== arr.length - 1 && (
                              <span className="tech-dot"></span>
                            )}
                          </React.Fragment>
                        ))
                      }
                    </div>
                  </div>
                    <Button 
                      variant="secondary"
                      className="visit-btn"
                    >
                      <svg
                        className="external-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </Button>
                </div>

                {/* DESKTOP: Hover Revealed Floating Image */}
                <img 
                  src={project.thumbnail} 
                  alt={`${project.title} preview`} 
                  className="project-image-desktop" 
                />
                
              </a>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default Projects;