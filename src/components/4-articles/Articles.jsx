import "./articles.css";
import Article from "./Article";
import { articles } from "../../data";
export default function Articles() {
  return (
    <section id="articles" className="articles flex">
      {articles.map((item) => {
        return (
          <Article
            key={item.title}
            title={item.title}
            date={item.date}
            content={item.content}
          />
        );
      })}
    </section>
  );
}
