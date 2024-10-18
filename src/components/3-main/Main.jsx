import { useState } from "react";
import { projects } from "../../data.js";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";

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
    <main id="projects" className="flex">
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
      <div className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                image={item.image}
                title={item.title}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}
