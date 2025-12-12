import React from "react";
import "./Scroll.css";

export default function ScrollingLogos() {
  const logos = [
    { id: 1, src: "ys.png", alt: "Logo 1" },
    { id: 2, src: "hanslog.png", alt: "Logo 2" },
    { id: 3, src: "ys.png", alt: "Logo 3" },
    { id: 4, src: "hanslog.png", alt: "Logo 4" },
    { id: 5, src: "ys.png", alt: "Logo 5" },
    { id: 6, src: "hanslog.png", alt: "Logo 6" },
    { id: 7, src: "ys.png", alt: "Logo 7" },
  ];

  return (
    <div className="logo-section">
      <h2 className="featured-text">Featured In</h2>

      <div className="logo-container">
        <div className="logo-scroll">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}

          {/* Duplicate set for infinite scroll */}
          {logos.map((logo) => (
            <div key={"dup-" + logo.id} className="logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
