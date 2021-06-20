import React from "react";
import logo from "../src/assets/logo.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About"
        imgsrc={logo}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
