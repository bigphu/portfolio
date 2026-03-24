import type { JSX } from "react";
import "./Banner.css";

const Banner = (): JSX.Element => {
  return (
    <section className="full-screen-section">
      <div className="container">
        <h1>
          <span className="gradient-title">FRONTEND</span>
          <br></br>
          <span className="developer">DEVELOPER</span>
        </h1>

        <p className="banner-description">
            Hi! I&apos;m{' '}
            <span className="my-name">
                Phạm Trần Gia Phú
            </span>
            . An undergraduate Frontend Developer that 
            has been through building scalable and
            responsive web projects.
        </p>
      </div>
    </section>
  )
}

export default Banner;