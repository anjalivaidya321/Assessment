// src/CareerSection.jsx
import "./carrersection.css";

export default function CareerSection() {
  return (
    <section className="career">
      <div className="career__pill">
        <span className="career__pill-icon">✦</span>
        Limited Seats Available
      </div>

      <h1 className="career__title">
        Ready to transform your
        <br />
        <span className="career__title-accent">trading career?</span>
      </h1>

      <p className="career__subtitle">
        Join thousands of successful traders who started their journey with Haven Ark
      </p>

      <div className="career__actions">
        <button className="career__btn career__btn-primary">Get Started Now →</button>
        <button className="career__btn career__btn-ghost">View Programs</button>
      </div>

      <div className="career__stats">
        <Stat label="30,000+ Students" />
        <Stat label="9+ Years Experience" />
        <Stat label="4.9/5 Rating" />
      </div>
    </section>
  );
}

function Stat({ label }) {
  return (
    <div className="career__stat">
      <span className="career__stat-icon">✓</span>
      <span>{label}</span>
    </div>
  );
}