import { useState } from "react";

export default function Article({ title, date, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="articles" className="card flex">
      <h2 className="title">{title}</h2>
      <p className="date">{date}</p>
      <p className={`content ${isExpanded ? "expanded" : ""}`}>{content}</p>
      <button className="see-more" onClick={toggleContent}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}
