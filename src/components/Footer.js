import { Link } from "react-router-dom";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="rights">
        All rights reserved © <Link to="/">React Ecommerce</Link> 2021
      </div>
    </footer>
  );
};
