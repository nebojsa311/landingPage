import React from "react";
import "./App.css";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./sectionTwo.jsx";
import Navbar from "./Navbar.jsx";
import heroOne from "./images/desktop-image-hero-1.jpg";
import heroTwo from "./images/desktop-image-hero-2.jpg";
import heroThree from "./images/desktop-image-hero-3.jpg";
import { TEXTS, HEADERS } from "./content.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: heroOne,
      i: 0,
      text: TEXTS,
      headers: HEADERS,
      closed: true,
    };
    this.slider = this.slider.bind(this);
    this.sliderBack = this.sliderBack.bind(this);
    this.hamburgerFunc = this.hamburgerFunc.bind(this);
  }

  slider() {
    let images = [heroOne, heroTwo, heroThree];
    if (this.state.i + 1 <= 2) {
      this.setState({ image: images[this.state.i + 1], i: this.state.i + 1 });
    }
  }

  sliderBack() {
    let images = [heroOne, heroTwo, heroThree];
    if (this.state.i - 1 >= 0) {
      this.setState({ image: images[this.state.i - 1], i: this.state.i - 1 });
    }
  }

  hamburgerFunc() {
    if(this.state.closed) {
      let navOptions = document.getElementById("list");
      let navWrapper = document.getElementById("navbarWrapper");
      let hamButton = document.getElementById("hamburger");
      let closeButton = document.getElementById("close");
      hamButton.style.display = "none";
      closeButton.style.display = "block";
      navOptions.style.display = "flex";
      navWrapper.style.backgroundColor = "white";
      this.setState({ closed: false })
    } else if(this.state.closed === false) {
      let navOptions = document.getElementById("list");
      let navWrapper = document.getElementById("navbarWrapper");
      let hamButton = document.getElementById("hamburger");
      let closeButton = document.getElementById("close");
      hamButton.style.display = "block";
      closeButton.style.display = "none";
      navOptions.style.display = "none";
      navWrapper.style.backgroundColor = "transparent";
      this.setState({ closed: true })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar toogler={this.hamburgerFunc} />
        <SectionOne
          imageOne={this.state.image}
          HEADERS={HEADERS}
          valueI={this.state.i}
          TEXTS={TEXTS}
          slider={this.slider}
          sliderBack={this.sliderBack}
        />
        <SectionTwo />
      </div>
    );
  }
}

export default App;
