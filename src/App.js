import React from "react";
import "./App.css";
import heroOne from "./images/desktop-image-hero-1.jpg";
import heroTwo from "./images/desktop-image-hero-2.jpg";
import heroThree from "./images/desktop-image-hero-3.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: heroOne,
      i: 0,
    };
    this.slider = this.slider.bind(this);
    this.sliderBack = this.sliderBack.bind(this);
  }

  slider() {
    let images = [heroOne, heroTwo, heroThree];
    if(this.state.i + 1 <= 2){
    this.setState({ image: images[this.state.i + 1], i: this.state.i + 1 });
    }
  }

  sliderBack() {
    let images = [heroOne, heroTwo, heroThree];
    if(this.state.i - 1 >= 0){
    this.setState({ image: images[this.state.i - 1], i: this.state.i - 1 });
  }
  }
  render() {
    return (
      <div className="App">
        <div id="sectionOne">
          <div id="firstSquare">
            <img
              id="sliderImage"
              src={this.state.image}
              alt="furniture images"
            ></img>
          </div>
          <div id="secondSquare">
            <section>
              <h1>Discover innovative ways to decorate</h1> <br></br>
              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>{" "}
              <br></br>
              <a href="#">
                SHOP NOW<span>&#x2192;</span>
              </a>
            </section>
            <div id="arrows">
              <div id="arrowOne" onClick={this.slider}>
                {" "}
                &gt;{" "}
              </div>
              <div id="arrowTwo" onClick={this.sliderBack}> &lt; </div>
            </div>
          </div>
        </div>
        <div id="sectionTwo">
          <div id="thirdSquare"></div>
          <div id="fourthSquare">
            <section>
              <h1>About our furniture</h1>
              <p>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </section>
          </div>
          <div id="fifthSquare"></div>
        </div>
      </div>
    );
  }
}

export default App;
