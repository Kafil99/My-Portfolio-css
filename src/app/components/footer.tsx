import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import React from "react";
import "./../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-text">©2024 Kafeel Ahmed</span>

          <div className="footer-info">
            <span>Fullstack Developer</span>
            <span>•</span>
            <span>UI Designer</span>
            <span>•</span>
            <span>Next.js Developer</span>
          </div>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kafeel-ahmed-6a2b382ba/"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kafil99"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:kafilahmed417@gmail.com" className="social-link">
              <Mail className="social-icon" />
            </a>
          </div>

          <span className="footer-text">
            Designed by{" "}
            <a href="#" className="designer-link">
              @kafeelahmed
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
