import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="about-heading">
          ABOUT US
        </motion.h1>
        <motion.p variants={itemVariants}>
          SkillFlow is your one-stop platform to explore and participate in the
          latest college hackathons and events happening across various
          colleges.
        </motion.p>
        <motion.p variants={itemVariants}>
          Our mission is to bridge the gap between students and opportunities by
          providing a seamless experience to discover technical events and
          upskill themselves.
        </motion.p>
        <motion.p variants={itemVariants}>
          Join us and be a part of the SkillFlow community today!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
