export default function ReviewCard({ name, stars, date }) {
  const renderStars = (stars) => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starElements.push(<span key={i}>⭐</span>);
      } else {
        starElements.push(<span key={i}>☆</span>);
      }
    }
    return starElements;
  };

  return (
    <div className="review flex">
      <div className="avatar flex">
        <div className="icon-user-circle"></div>
        <h3>{name}</h3>
      </div>
      <div className="stars">{renderStars(stars)}</div>
      <p className="date">{date}</p>
      <p className="opinion">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        doloribus modi ipsum repudiandae quia sequi non eaque maxime dolore
        eveniet, quisquam, sapiente tempor
      </p>
    </div>
  );
}
