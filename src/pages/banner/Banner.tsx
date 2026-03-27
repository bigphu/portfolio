import type { JSX } from "react";
import { StatBox, Button } from "@/components";
import { useSendEmail, useOpenGithub } from "@/hooks";
import bkLogo from "@/assets/logo-bk.png"; 
import "./Banner.css"; 

const Banner = (): JSX.Element => {
  const sendEmail: CallableFunction = useSendEmail(atob("Z2lhcGh1LnBoYW0uZGV2QGdtYWlsLmNvbQ=="));
  const openGithub: CallableFunction = useOpenGithub("bigphu");

  return (
    <section className="full-screen-section">
      <div className="container banner-layout">
        <div className="banner-content">
          <h1>
            <span className="gradient-title gradient-text">SOFTWARE</span>
            <br></br>
            <span className="developer">DEVELOPER</span>
          </h1>

          <p className="banner-description">
              Hi! I&apos;m{' '}
              <span className="my-name">
                  Phạm Trần Gia Phú
              </span>
              . 
              <br></br>
              An undergraduate Software Developer that 
              has been through building scalable and
              responsive web projects.
          </p>

          <div className="banner-buttons">
            <Button variant="primary" onClick={() => sendEmail("Reaching out from your portfolio!", "Hi there, I saw your website and wanted to chat about...")}>
              Contact me
            </Button>
            <Button variant="secondary" onClick={() => openGithub()}>
              View Github
            </Button>
          </div>
        </div>

        <div className="banner-stat">
          <StatBox items={ [{ desc: "Education - Undergraduate", stat: bkLogo}, { desc: "Cumulative GPA", stat: "3.5" }, { desc: "IETLS - Overall", stat: "7.5" }] }/>
        </div>

      </div>
    </section>
  )
}

export default Banner;