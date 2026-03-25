import type { JSX } from "react";
import { StatBox, Button } from "@/components";
import "./Banner.css";

const Banner = (): JSX.Element => {
  return (
    <section className="full-screen-section">
      <div className="container banner-layout">
        <div className="banner-content">
          <h1>
            <span className="gradient-title gradient-text">FRONTEND</span>
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
              An undergraduate Frontend Developer that 
              has been through building scalable and
              responsive web projects.
          </p>

          <div className="banner-buttons">
            <Button variant="primary">Contact me</Button>
          </div>
        </div>

        <div className="banner-stat">
          <StatBox items={ [{ desc: "CGPA", stat: "3.5" }, { desc: "IETLS", stat: "7.5" }] }/>
        </div>

      </div>
    </section>
  )
}

export default Banner;