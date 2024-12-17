import React from "react";
import "./resumeModal.scss"; // Import your styles

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeUrl = "/resume.pdf";

  return (
    <div className="modals">
      <div className="modalContents">
        <h2>Resume Options</h2>
        <a href={resumeUrl} download>
          <button>Download Resume</button>
        </a>
        <button onClick={() => window.open(resumeUrl, "_blank")}>
          View Resume
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResumeModal;
