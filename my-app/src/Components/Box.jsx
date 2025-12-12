import React from "react";
import "./box.css";

export default function Box() {
  return (
    <div className="box-wrapper">
      <div className="box-container">
        <h1 className="box-title">Why Haven Ark</h1>
        <h2 className="box-subtitle">
          Everything you need to <span className="highlight">succeed</span>
        </h2>
        <p className="box-description">
          A comprehensive approach to trading education designed for serious learners
        </p>
      </div>
    </div>
    
  );
}
