import React from "react";
import type { JSX } from "react";
import { Button } from "@/components"
import { useOpenGithub } from "@/hooks";
import "./Projects.css";
import golfClubThumbnail from "@/assets/golf-club-homepage.png";
import studyBuddyThumbnail from "@/assets/study-buddy-dashboard.png";
import quickBuyThumbnail from "@/assets/quickbuy-homepage.png";

// MOCK DATA (Will replace with API data later (maybe))
const projects = [
  {
    slug: "golf-club",
    title: "Golf Club Manager",
    techStack: ["ReactJS", "ExpressJS", "TailwindCSS", "Docker"],
    thumbnail: golfClubThumbnail
  },
  {
    slug: "study-buddy",
    title: "Study Buddy",
    techStack: ["ReactJS", "ExpressJS", "TailwindCSS", "MySQL"],
    thumbnail: studyBuddyThumbnail
  },
  {
    slug: "quick-buy",
    title: "QuickBuy",
    techStack: ["ReactJS", "ExpressJS", "TailwindCSS", "MySQL"],
    thumbnail: quickBuyThumbnail
  },
  {
    slug: "tyc-compiler",
    title: "TyC Compiler",
    techStack: ["Python", "Compiler Design", "ANTLR"],
  },
  {
    slug: "3d-ascii-renderer",
    title: "3D ASCII Renderer",
    techStack: ["C++", "Graphics Programming"]
  }
];

const Projects = (): JSX.Element => {
  const githubUsername = "bigphu";
  const openGithub = useOpenGithub("bigphu");

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
            projects.map((project, index) => (
              <a
                href={`https://github.com/${githubUsername}/${project.slug}`} 
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link navigation
                  openGithub(project.slug);
                }}
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
                        project.techStack.slice(0, 4).map((tech, idx, arr) => (
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
                      onClick={
                        () => openGithub(`${project.slug}`)
                      }
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
                {
                  project.thumbnail && (
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.title} preview`} 
                      className="project-image-desktop" 
                    />
                  )
                }
              </a>
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default Projects;