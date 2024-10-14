import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
function App() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      <button
        style={{ opacity: isShown ? 1 : 0, transition: "0.8s" }}
        className="icon-chevron-up top"
        onClick={() => window.scrollTo({ top: 0 })}
      ></button>
    </div>
  );
}

export default App;
