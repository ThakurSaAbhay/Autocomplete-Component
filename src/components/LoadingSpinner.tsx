import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner: React.FC = () => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner-circle"></div>
    </div>
  </div>
);