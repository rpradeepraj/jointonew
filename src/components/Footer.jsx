import React from 'react';
import '../features/footer/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-left">
          <p>&copy; 2026 Pradeep Raj R. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}
