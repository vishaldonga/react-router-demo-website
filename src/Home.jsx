import React from "react";
import logo from "../src/assets/logo.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={logo}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
