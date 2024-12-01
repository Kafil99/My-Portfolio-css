import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <main className="hero-main">
        <div className="hero-content">
          <h2 className="hero-subtitle">Hi, It&#39;s me</h2>
          <h1 className="hero-title">KAFEEL AHMED</h1>
          <div className="hero-description">
            <p className="hero-text">And I&#39;m a</p>
            <span className="hero-highlight">Fullstack Developer</span>
          </div>

          <p className="hero-paragraph">
            Passionate frontend developer with expertise in creating responsive
            and user-friendly web applications using modern technologies and
            best practices.
          </p>

          <div className="hero-buttons">
            <button className="hero-cv-button">
              <Link href={"https://milestone-1-2-tau.vercel.app/"} target="_blank">
                <span>My CV</span>
              </Link>
            </button>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/kafeel-ahmed-6a2b382ba/"
                target="_blank"
                className="social-link"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Kafil99"
                target="_blank"
                className="social-link"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/computer.png"
            alt="Coding illustration"
            className="image"
            width={800}
            height={600}
            priority
          />
        </div>
      </main>
    </div>
  );
}
