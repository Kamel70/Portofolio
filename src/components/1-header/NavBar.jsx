export default function NavBar({ ulClassName, children }) {
  return (
    <ul className={ulClassName}>
      {children}
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#articles">Articles</a>
      </li>
      <li>
        <a href="#reviews">Reviews</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
