import { useEffect, useState } from "react";
import "./header.css";
import NavBar from "./NavBar";

export default function Header() {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  function showModal() {
    setShow(true);
  }
  function hideModal() {
    setShow(false);
  }
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);
  function handleWebTheme() {
    localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("currentMode"));
  }
  return (
    <header className="flex">
      <button className="menu icon-th-menu-outline" onClick={showModal} />
      <div />
      <nav>
        <NavBar ulClassName="flex" />
      </nav>
      <button
        onClick={handleWebTheme}
        className={theme === "dark" ? "icon-moon-fill" : "icon-sun"}
      />

      {show && (
        <div className="fixed">
          <NavBar ulClassName="modal">
            <li>
              <button className="icon-cross" onClick={hideModal} />
            </li>
          </NavBar>
        </div>
      )}
    </header>
  );
}
