import React, { useEffect, useState } from "react";
import "./modal.scss";

const Modal = ({ isOpen, onClose }) => {
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimating(true);
    } else {
      const timeout = setTimeout(() => setAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className="modalOverlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`modalContent ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex="-1"
      >
        <h2>About Me</h2>
        <p>
          Hi! I'm Arjit Anand, and I am passionate for Frontend Web Development.
          I specialize in creating dynamic and responsive web applications
          using:
        </p>
        <ul>
          <li>HTML, CSS, and JavaScript</li>
          <li>React, Chakra UI, and Tailwind CSS</li>
          <li>State Management with Redux Toolkit and Zustand</li>
          <li>Animations with Framer Motion and GSAP</li>
          <li>Backend as a Service with Firebase and Appwrite</li>
        </ul>
        <p>
          I'm eager to learn more and take on new challenges in the world of web
          development!
        </p>
        <button className="closeButton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
