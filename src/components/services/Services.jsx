import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [highlight, setHighlight] = useState(false);

  const services = [
    {
      title: "Branding",
      description:
        "Developing distinctive brand identities that resonate with your target audience and effectively communicate your vision.",
    },
    {
      title: "Marketing",
      description:
        "Formulating strategic marketing plans to enhance your visibility and engage with potential customers efficiently.",
    },
    {
      title: "Design",
      description:
        "Creating visually appealing designs that improve user experience and elevate brand perception.",
    },
    {
      title: "Development",
      description:
        "Delivering responsive and user-friendly web solutions that align with your business objectives and provide seamless interactions.",
    },
  ];

  const handleHighlight = () => {
    setHighlight(true);
    setTimeout(() => {
      setHighlight(false);
    }, 1000); // Highlight for 1 second
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#FFA500" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#FFA500" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button onClick={handleHighlight}>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((item, index) => (
          <motion.div
            className={`box ${highlight ? "highlight" : ""}`} // Conditional class for highlighting
            whileHover={{
              background: "lightgray",
              color: "#000",
            }}
            key={index}
            style={{ background: "transparent", color: "#333" }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to="Contact" smooth={true} duration={500}>
              <button>Go</button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
