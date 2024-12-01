import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./../styles/About.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="header">
          <h2 className="title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="underline"></div>
        </div>

        <div className="content">
          <div className="image-container">
            <Image
              src="/images/profilepic.png"
              alt="Profile"
              width={384}
              height={384}
              className="profile-image"
            />
          </div>

          <div className="text-container">
            <h3 className="subtitle">Fullstack Developer & Web Designer</h3>
            <p className="description">
              I&#39;m a passionate Fullstack Developer and Web Designer with
              experience in building dynamic, user-friendly websites. I have a solid
              understanding of front-end and back-end technologies, including HTML, CSS, TypeScript, Node.js, and Next.js.
              My goal is to create seamless, responsive web experiences that solve real-world problems.
            </p>
            <p className="description">
              I&#39;m a student actively learning web development,
              constantly improving my skills in full-stack development and web design.
            </p>
            <button className="contact-button">
              <Link href="/contact" className="link">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
