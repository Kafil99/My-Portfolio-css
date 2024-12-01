import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import React from "react";
import "./../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="container">
        <h1 className="title">Contact</h1>

        <div className="content-grid">
          {/* Contact Details */}
          <div className="contact-details">
            <div className="detail-item">
              <PhoneIcon className="icon" />
              <p>+92 3222094816</p>
            </div>

            <div className="detail-item">
              <MailIcon className="icon" />
              <p>kafilahmed417@gmail.com</p>
            </div>

            <div className="detail-item">
              <MapPinIcon className="icon" />
              <p>Karachi, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />

            <div className="form-grid">
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input-field"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              className="input-field"
            ></textarea>

            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
