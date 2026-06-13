import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'; // Global CSS containing design tokens, bases, resets, and feature-CSS imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
