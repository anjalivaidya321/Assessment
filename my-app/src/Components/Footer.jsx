import React from "react";
import "./Footer.css";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* LEFT: Logo + HAVEN ARK */}
      <div className="footer-left">
        <div className="footer-brand">
          <img src="/logo.png" alt="logo" className="footer-logo" />
          <h2 className="footer-title">Haven Ark</h2>
        </div>

        <p className="footer-desc">
          Premier trading education academy empowering traders with
          comprehensive training and mentorship.
        </p>
      </div>

      {/* RIGHT: Follow us */}
      <div className="footer-right">
        <p className="follow-title">Follow us</p>
        <div className="follow-icons">
          <FaInstagram className="soc-icon" />
          <FaEnvelope className="soc-icon" />
        </div>
      </div>

      {/* CENTER: Links */}
      <div className="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Cancellation & Refund</a>
        <a href="#">Contact Us</a>
      </div>

      <p className="footer-copy">
        © 2025 Haven Ark. All rights reserved.
      </p>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-btn">
        <FaWhatsapp />
      </div>
    </footer>
  );
}
