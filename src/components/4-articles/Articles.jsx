import "./articles.css";
import Article from "./Article";
export default function Articles() {
  let articles = [
    {
      title: "What is HTML?",
      date: "May 21, 2024",
      content: `Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
  
  Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.`,
    },
    {
      title: "What is CSS?",
      date: "Jun 5, 2024",
      content: `CSS is a style sheet language that’s focused almost entirely on improving the presentation of HTML elements. While CSS is a static programming language, it can be used to make your website appear visually pleasing and modern. If you want your website to have a sleek and stylish design, CSS is the programming language to use. With a basic understanding of CSS, you can make changes to the overall look and feel of your website, which is useful when you want to match the appearance of your website with the aesthetics of your brand.`,
    },

    {
      title: "What is React js?",
      date: "jan 1, 2024",
      content: `React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.
    
    In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.`,
    },
  ];
  return (
    <section className="articles flex">
      {articles.map((item) => {
        return (
          <Article title={item.title} date={item.date} content={item.content} />
        );
      })}
    </section>
  );
}
