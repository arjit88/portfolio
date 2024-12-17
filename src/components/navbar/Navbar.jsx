import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <div className="tooltip">
            <a
              href="https://github.com/arjit88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github"
                src="/github.png"
                alt="GitHub profile of Arjit Anand"
              />
              <span className="tooltip-text">GitHub</span>
            </a>
          </div>
          <div className="tooltip">
            <a
              href="https://www.linkedin.com/in/arjit-anand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn profile of Arjit Anand" />
              <span className="tooltip-text">LinkedIn</span>
            </a>
          </div>
          <div className="tooltip">
            <a
              href="https://www.facebook.com/profile.php?id=100007930337339"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook profile of Arjit Anand" />
              <span className="tooltip-text">Facebook</span>
            </a>
          </div>
          <div className="tooltip">
            <a
              href="https://www.instagram.com/arjitanand88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram profile of Arjit Anand"
              />
              <span className="tooltip-text">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
