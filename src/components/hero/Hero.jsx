import React, { useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Modal from "./Modal"; // Existing modal for "About Me"
import ResumeModal from "./ResumeModal"; // New modal for Resume options

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-450%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isResumeModalOpen, setResumeModalOpen] = useState(false); // State for resume modal

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleResumeModal = () => {
    setResumeModalOpen(!isResumeModalOpen);
  };

  return (
    <div className="hero">
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={toggleResumeModal}
      />{" "}
      {/* Resume Modal */}
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ARJIT ANAND</motion.h2>
          <motion.h1 variants={textVariants}>Frontend</motion.h1>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <Link to="Portfolio" smooth={true} duration={500}>
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
              <motion.button variants={textVariants}>
                Contact Arjit Anand
              </motion.button>
            </Link>
            <motion.button
              variants={textVariants}
              onClick={toggleModal}
              className="aboutButton"
            >
              About Me
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={toggleResumeModal} // Open resume modal
              className="resumeButton"
            >
              Resume
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down to see more"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero image of Arjit Anand" />
      </div>
    </div>
  );
};

export default Hero;
