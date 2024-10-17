import "./hero.css";
import Lottie from "lottie-react";
import codingAnimation from "../../animation/coding-animation.json";
export default function Hero() {
  return (
    <section id="about" className="flex hero-section">
      <div className="left-section flex">
        <div className="avatar flex">
          <img src="./vite.svg" alt="photo of dev kamel samy" />
          <div className="icon-verified verified"></div>
        </div>
        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="description">
          I`m Kamel Samy, a software designer and entrepreneur based in New York
          City.I`m the fouonder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section ">
        <Lottie animationData={codingAnimation} loop />
      </div>
    </section>
  );
}
