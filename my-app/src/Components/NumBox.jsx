import React from "react";
import "./NumBox.css";

export default function NumberBox() {
  return (
    <div className="stats-box">

      <div className="stat-item">
        <h2 className="stat-number">3</h2>
        <p className="stat-label">Months</p>
      </div>

      <div className="stat-item">
        <h2 className="stat-number">12</h2>
        <p className="stat-label">Weeks</p>
      </div>

      <div className="stat-item">
        <h2 className="stat-number">70+</h2>
        <p className="stat-label">Topics</p>
      </div>

      <div className="stat-item">
        <h2 className="stat-number">100+</h2>
        <p className="stat-label">Hours</p>
      </div>

    </div>
  );
}
