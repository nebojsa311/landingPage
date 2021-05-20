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
    };
    this.slider = this.slider.bind(this);
    this.sliderBack = this.sliderBack.bind(this);
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
  render() {
    return (
      <div className="App">
        <Navbar />
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
