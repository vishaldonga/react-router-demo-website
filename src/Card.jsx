import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgsrc, title }) => {
  return (
    <>
      <div className="card">
        <img src={imgsrc} className="card-img-top" alt="Service" height="300" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="m-0 max-height-16">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="div-get-started">
            <NavLink to="#" className="btn btn-get-started">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
