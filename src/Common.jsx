import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({ name, imgsrc, visit, btnName }) => {
  return (
    <>
      <section className="flex">
        <div className="flex flex-col w-50 p-1">
          <h1>
            {name} <strong>Vishal</strong>
          </h1>
          <h2 className="weight-normal">
            The fat cat sat on the mat bat away with paws nyaa nyaa, and chew
            iPad power cord i could pee on this if
          </h2>
          <div className="mt-3">
            <NavLink to={visit} className="btn-get-started">
              {btnName}
            </NavLink>
          </div>
        </div>
        <div className="w-50 p-1">
          <img src={imgsrc} className="w-100" alt="Common" />
        </div>
      </section>
      {/* 
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav bg">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name} <strong>Vishal</strong>
                  </h1>
                  <h2 className="my-3">
                    The fat cat sat on the mat bat away with paws nyaa nyaa, and
                    chew iPad power cord i could pee on this if
                  </h2>
                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid image-home animated"
                    alt="Common"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Common;
