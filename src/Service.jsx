import React from "react";
import Card from "./Card";
import { Data } from "./Data";

const Service = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <div className="service-container">
              {Data.map(({ id, title, url }) => {
                return <Card key={id} imgsrc={url} title={title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
