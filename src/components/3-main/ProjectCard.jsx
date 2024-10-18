import { motion } from "framer-motion";

export default function ProjectCard({ image, title }) {
  return (
    <motion.div
      //   layout
      //   animate={{ opacity: 1 }}
      //   initial={{ opacity: 0 }}
      //   exit={{ opacity: 0 }}
      layout
      initial={{ transform: "scale(0.4)" }}
      animate={{ transform: "scale(1)" }}
      transition={{ type: "spring", damping: 10, stiffness: 60 }}
      className="card"
    >
      <img src={image} alt={title} />
      <div className="description">
        <h2 className="title">{title}</h2>
        <p className="sub-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima
          earum ab culpa. Sed error repudiandae fugiat
        </p>
        <div className="links flex">
          <div className="left-links flex">
            <span className="icon-link"></span>
            <span className="icon-github"></span>
          </div>

          <div className="right-links flex">
            <p>more</p>
            <span className="icon-arrow-right2"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
