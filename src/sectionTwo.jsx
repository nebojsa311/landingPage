import React from "react";
import "./sectionTwo.css";
import darkImg from "./images/image-about-dark.jpg";
import lightImg from "./images/image-about-light.jpg";

function SectionTwo(props) {
  return (
    <div id="containerTwo">
      <div>
        <img src={darkImg} alt="furniture image" />
      </div>
      <div id="textAreaTwo">
        <h1>About our furniture</h1>
        <section>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.{" "}
        </section>
      </div>
      <div>
        <img src={lightImg} alt="furniture image" />
      </div>
    </div>
  );
}

export default SectionTwo;
