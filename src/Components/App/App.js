import { categoryIds } from "../../utils.js";
import { Navigation } from "../Navigation/Navigation.js";
import { Articles } from "../Articles/Articles.js";
import React from "react";
import "./App.css";

export const App = () => {
  const [category, setCategory] = React.useState("index");
  const [articles, setArticles] = React.useState({
    items: [],
    categories: [],
    sources: [],
  });

  const onNavClick = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href);
  };

  React.useEffect(() => {
    fetch(
      "https://frontend.karpovcourses.net/api/v2/ru/news/" +
        categoryIds[category] || ""
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles(response);
      });
  }, [category]);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <Navigation
            placement="header"
            className="header__navigation"
            onNavClick={onNavClick}
            currentCategory={category}
          />
        </div>
      </header>

      <main>
        <Articles articles={articles} />
      </main>

      <footer className="footer">
        <div className="container">
          <Navigation
            placement="footer"
            onNavClick={onNavClick}
            currentCategory={category}
            className="footer__navigation"
          />
          <div className="footer__bottom">
            <p className="footer__text footer__text--gray">© 2023</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
