import React from "react";
import { Link } from "react-router-dom";

const Main = ({ props }) => {
  return (
    <div className="main-container">
      <h1>{props.title}</h1>
      <img className="preview-image" src={props.image} alt={props.title} />
      {!props.ignoreWebRecommend && (
        <p>Recommended Browser: Chrome, Edge, FireFox</p>
      )}
      <div className="links-container">
        {props.links.map((link) => (
          <Link
            key={link.name}
            to={link.url}
            className={link.variant ? link.variant : "link-button"}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
