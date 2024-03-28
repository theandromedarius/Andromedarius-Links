import React from "react";
import { Link } from "react-router-dom";

const Main = ({ props }) => {
  return (
    <div className="main-container">
      <h1>{props.title}</h1>
      <img className="preview-image" src={props.image} alt={props.title} />
      
<div class="links-container">
          {props.links.map((link) => (
            <div class="button-border" key={link.name}>
              <button className={link.variant} onclick="location.href='{link.url}';">{link.name}</button>
            </div>
          ))}
       </div>

    </div>
  );
};

export default Main;
