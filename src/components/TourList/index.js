import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour.js";
import { tourData } from "../tourData.js";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTours={this.removeTour} />
        ))}
      </section>
    );
  }
}
