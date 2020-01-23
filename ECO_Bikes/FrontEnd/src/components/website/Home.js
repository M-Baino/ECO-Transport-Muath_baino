import React, { Component } from "react";
import slider1 from "../../Images/1.jpg";
import slider2 from "../../Images/2.jpg";
import slider3 from "../../Images/3.jpg";

export default class Home extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
