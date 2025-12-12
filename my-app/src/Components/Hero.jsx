import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">

      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="tag">
          India's #1 Trading Education Platform
        </div>

        <h1 className="title">
          Master the <br />
          Art of <span className="blue">Trading</span>
        </h1>

        <p className="desc">
          Join 30,000+ traders who've transformed their trading journey. <br />
          Learn from mentors with 9+ years of market expertise.
        </p>

        {/* Buttons */}
        <div className="btns">
          <button className="btn-start">Start Learning Today →</button>
          <button className="btn-view">View Programs</button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="box">
            <h3>30,000+</h3>
            <p>Active Students</p>
          </div>
          <div className="box">
            <h3>9+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="box">
            <h3>500+</h3>
            <p>Live Sessions</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <img src="/hero.avif" className="hero-img" alt="hero" />
      </div>

    </div>
  );
}

export default Hero;