import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex left-side">
        <li>
          <span> </span>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
      </ul>
      <p className="right-side">&copy; Spencer Sharp.All rights reserved.</p>
    </footer>
  );
}
