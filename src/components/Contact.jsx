import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/contact/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { email, phone, location, linkedin, linkedinDisplay, resumeUrl } = portfolioData.personalInfo;

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Say Hello</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info-panel glass-card">
            <h3>Contact Information</h3>
            <p className="contact-desc-text">Feel free to contact me directly for job opportunities, consultations, or project development.</p>
            
            <div className="contact-links">
              <a href={`mailto:${email}`} className="contact-item">
                <div className="contact-icon"><i data-lucide="mail"></i></div>
                <div>
                  <span className="contact-label">Email Me</span>
                  <span className="contact-val">{email}</span>
                </div>
              </a>

              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-item">
                <div className="contact-icon"><i data-lucide="phone"></i></div>
                <div>
                  <span className="contact-label">Call / WhatsApp</span>
                  <span className="contact-val">{phone}</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon"><i data-lucide="map-pin"></i></div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-val">{location}</span>
                </div>
              </div>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon"><i data-lucide="linkedin"></i></div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-val">{linkedinDisplay}</span>
                </div>
              </a>
            </div>

            <div className="contact-cv-download">
              <a href={resumeUrl} download={resumeUrl} className="btn btn-secondary btn-full">
                <i data-lucide="file-text"></i> Download Full Resume (PDF)
              </a>
            </div>
          </div>

          <div className="contact-form-panel glass-card">
            <h3>Send Me a Message</h3>
            {!submitted ? (
              <form id="contact-form" className="cta-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your.name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {isSubmitting && <span className="spinner"></span>}
                </button>
              </form>
            ) : (
              <div id="contact-success" className="form-alert success">
                <i data-lucide="send"></i>
                <div>
                  <h4>Message Sent!</h4>
                  <p>Your message was sent successfully. Pradeep will get back to you as soon as possible.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
