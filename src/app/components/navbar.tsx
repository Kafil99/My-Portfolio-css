import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./../styles/Navbar.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image
          src="/images/logo.png"
          alt="Logo"
          className="navbar-logo"
          width={48}
          height={48}
          priority
        />
        <span className="navbar-title">KAFEEL AHMED</span>
      </div>

      <div className="navbar-links">
        <Link href="/" className="navbar-link">
          Home
        </Link>
        <Link href="/about" className="navbar-link">
          About Me
        </Link>
        <Link href="/services" className="navbar-link">
          Projects
        </Link>
        <Link href="/contact" className="navbar-link">
          Contact
        </Link>
      </div>

      <button className="navbar-button">
        <Link href="/contact">Hire me</Link>
      </button>
    </nav>
  );
}
