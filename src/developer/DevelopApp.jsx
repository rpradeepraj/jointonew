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
  const [whatsappUrl, setWhatsappUrl] = useState('');

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

    // Map appType key to readable labels
    const appTypeLabels = {
      'mobile-app': 'React Native Mobile App',
      'web-app': 'React.js Web Portal',
      'gis-map': 'GIS & Map Solution',
      'coldfusion': 'ColdFusion Backend Service',
      'other': 'Other Software Engineering'
    };

    const readableAppType = appTypeLabels[formData.appType] || formData.appType || 'Custom Application';

    // Construct the dynamic WhatsApp message details
    const message = `Hello Pradeep! I'd like to initiate a freelance application development project.

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 App Type: ${readableAppType}
📝 Description: ${formData.desc}`;

    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/918428402482?text=${encodedMessage}`;
    setWhatsappUrl(link);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Auto redirect to WhatsApp in a new tab
      window.open(link, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      appType: '',
      desc: ''
    });
    setWhatsappUrl('');
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
              <p>Describe your app idea, and we will initialize a dynamic WhatsApp project chat containing all your configurations.</p>
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
                  <span className="btn-text">{isSubmitting ? 'Submitting...' : 'Initialize Project Checkout'}</span>
                  {isSubmitting && <span className="spinner"></span>}
                </button>
              </form>
            ) : (
              <div id="project-success" className="form-alert success" style={{ textAlign: 'left' }}>
                <i data-lucide="check-circle-2" style={{ color: 'var(--color-success)' }}></i>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Project Inquiry Initialized!</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    Redirecting to WhatsApp to send your specifications. If the window didn't open or was blocked, please click the button below to connect with Pradeep Raj R.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-small"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      Open WhatsApp Chat
                    </a>
                    
                    <button 
                      onClick={handleReset} 
                      className="btn btn-secondary btn-small"
                    >
                      Fill New Form
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
