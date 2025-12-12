import React from "react";
import "./feature.css";

export default function Features() {
  return (
    <div className="features-wrapper">

      {/* LEFT BIG BOX */}
      <div className="feature-big">
        <div className="icon-circle">🎓</div>

        <h2 className="feature-title">Expert Mentorship</h2>
        <p className="feature-desc">
          Learn directly from traders with 9+ years of market experience
        </p>

        <div className="tags">
          <span>Technical Analysis</span>
          <span>Options Trading</span>
          <span>Risk Management</span>
        </div>
      </div>

      {/* RIGHT GRID */}
      <div className="feature-grid">

        <div className="feature-box">
          <div className="icon-circle small">📘</div>
          <h3>Proven Strategies</h3>
          <p>Master techniques used by professional institutional traders</p>
        </div>

        <div className="feature-box">
          <div className="icon-circle small">🛡️</div>
          <h3>Risk Management</h3>
          <p>Protect your capital with institutional-grade risk frameworks</p>
        </div>

        <div className="feature-box">
          <div className="icon-circle small">📊</div>
          <h3>Live Market Training</h3>
          <p>Practice with real market conditions and expert guidance</p>
        </div>

        <div className="feature-box empty"></div>

      </div>
    </div>
  );
}
