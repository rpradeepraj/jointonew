import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock/portfolioData';
import '../features/develop-app/develop-app.css';

export default function DevelopApp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appType: '',
    desc: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSelectChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      appType: e.target.value
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
        appType: '',
        desc: ''
      });
    }, 1500);
  };

  return (
    <section id="develop-app" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Work With Me</span>
          <h2 className="section-title">Want to Develop an Application?</h2>
          <p className="section-intro">Have a project idea? Let's turn it into a high-performance web or mobile app.</p>
          <div className="title-underline"></div>
        </div>

        <div className="develop-grid">
          <div className="develop-offerings">
            <h3>Custom Engineering Services</h3>
            <p className="develop-intro-text">
              I collaborate with businesses, start-ups, and clients to design, architect, and deliver custom, production-ready software solutions. Here is what we can build together:
            </p>
            
            {portfolioData.servicesData.map((service, index) => (
              <div key={index} className="offering-item">
                <div className="offering-icon">
                  <i data-lucide={service.icon}></i>
                </div>
                <div className="offering-text">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="develop-cta-form glass-card">
            <div className="cta-header">
              <i data-lucide="messages-square" className="cta-icon"></i>
              <h3>Get a Free Project Consultation</h3>
              <p>Describe your app idea, and I'll get back to you with architectural ideas, timelines, and estimations.</p>
            </div>
            
            {!submitted ? (
              <form id="project-form" className="cta-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="app-type">Project Type *</label>
                  <select
                    id="app-type"
                    required
                    value={formData.appType}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>Select application type</option>
                    <option value="mobile-app">React Native Mobile App</option>
                    <option value="web-app">React.js Web Portal</option>
                    <option value="gis-map">GIS & Map Solution</option>
                    <option value="coldfusion">ColdFusion Backend Service</option>
                    <option value="other">Other Software Engineering</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Project Details *</label>
                  <textarea
                    id="desc"
                    rows="4"
                    required
                    placeholder="Describe what you want to build, target audience, key features, etc."
                    value={formData.desc}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  <span className="btn-text">{isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}</span>
                  {isSubmitting && <span className="spinner"></span>}
                </button>
              </form>
            ) : (
              <div id="project-success" className="form-alert success">
                <i data-lucide="check-circle-2"></i>
                <div>
                  <h4>Inquiry Received!</h4>
                  <p>Thank you for reaching out. Pradeep Raj R will review your project details and contact you shortly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
