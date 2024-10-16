import { useState } from "react";
import { projects } from "../../data.js";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [active, setActive] = useState(1);
  const [arr, setArr] = useState(projects);
  function handleActiveButton(buttonNum, category) {
    setActive(buttonNum);
    let newArr = projects;
    buttonNum === 1
      ? setArr(newArr)
      : setArr(newArr.filter((project) => project.category === category));
  }
  return (
    <main className="flex ">
      <section className="left-section  flex">
        <button
          className={active === 1 ? "active" : undefined}
          onClick={() => handleActiveButton(1, undefined)}
        >
          All Projects
        </button>
        <button
          className={active === 2 ? "active" : undefined}
          onClick={() => handleActiveButton(2, "css")}
        >
          HTML & CSS
        </button>
        <button
          className={active === 3 ? "active" : undefined}
          onClick={() => handleActiveButton(3, "react")}
        >
          React & MUI
        </button>
        <button
          className={active === 4 ? "active" : undefined}
          onClick={() => handleActiveButton(4, "node")}
        >
          Node & Express
        </button>
      </section>
      <motion.section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ damping: 8, type: "spring", stiffness: 30 }}
                key={item.title}
                className="card"
              >
                <img src={item.image} alt="" />
                <div className="description">
                  <h2 className="title">{item.title}</h2>
                  <p className="sub-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Qui minima earum ab culpa. Sed error repudiandae fugiat
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
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
