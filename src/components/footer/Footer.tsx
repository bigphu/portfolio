'use client';

import type { JSX } from 'react';
import { GitFork, Star } from "lucide-react";
import { useSendEmail, useOpenGithub, useFetchRepo } from "@/hooks";
import './Footer.css';

const Footer = (): JSX.Element => {
  const githubUsername = "bigphu";
  const repoName = "portfolio";
  const myEmail = atob("Z2lhcGh1LnBoYW0uZGV2QGdtYWlsLmNvbQ==");

  const sendEmail = useSendEmail(myEmail);
  const openGithub = useOpenGithub(githubUsername);
  const { repo, isLoading, error } = useFetchRepo(githubUsername, "portfolio");

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        
        <p className="footer-heading">Thank you for your attention</p>
        
        <a
          href={`mailto:${myEmail}`}
          onClick={(e) => {
            e.preventDefault(); 
            sendEmail(
              "Reaching out from your portfolio!", 
              "Hi there, I saw your website and wanted to chat about..."
            );
          }}
          className="footer-email gradient-text"
        >
          {myEmail}
        </a>

        <div>
          <a
            href={`https://github.com/${githubUsername}/${repoName}`}
            onClick={(e) => {
                e.preventDefault(); 
                openGithub(repoName);
              }
            }
            target="_blank"
            rel="noreferrer"
            className="footer-credits"
          >
            Built & Revised by {' '} 
            <span className="my-name">
              Phạm Trần Gia Phú
            </span> 

            <div className="footer-stats">
              <span className="footer-stat-item star">
                <Star size={16} /> 
                {isLoading || error || !repo ? 0 : repo.stargazers_count}
              </span>
              <span className="footer-stat-item fork">
                <GitFork size={16} /> 
                {isLoading || error || !repo ? 0 : repo.forks_count}
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;