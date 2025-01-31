import React from "react";
// import "./App.css";

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you are looking for does not exist.</p>
        <button className="error-button" onClick={() => window.location.href = "/"}>Go Back Home</button>
      </div>
    </div>
  );
};
