import React from "react";
import "./sectionOne.css";


function SectionOne(props) {
  return (
    <div id="container">
      <img src={props.imageOne} alt="images of furniture" />
      <div id="textAreaOne">
        <h1>{props.HEADERS[props.valueI]}</h1><br></br>
        <section>{props.TEXTS[props.valueI]}</section><br></br>
        <div >
          <a href="#">SHOP NOW{" "}
          <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="#000"
              fill-rule="nonzero"
            />
          </svg></a>
        </div>
      </div>
      <div id="arrows">
          <div id="arrowOne" onClick={props.sliderBack}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          </div>
          <div id="arrowTwo" onClick={props.slider}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          </div>
        </div>
    </div>
  );
}

export default SectionOne;
