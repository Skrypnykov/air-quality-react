import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./AirQuality.scss";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2ZsYTdkbzEwZGdqMnFwc2dyMHBnZTl0In0.XQ6qUunUpxoUThIMrGLbPQ';
class AirQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 31,
      lat: 48.55,
      zoom: 5,
      scrollZoom: false,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      scrollZoom: this.state.scrollZoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <section className={"air-q container"} id="quality">
        <h2 className="air-q-title">
          Индекс качества воздуха в режиме реального времени
        </h2>

        <div className="air-q-map" ref={(el) => (this.mapContainer = el)}>
          <div className="air-q-map-state">
            {" "}
            Долгота: {this.state.lng} | Широта: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>

        <p className="air-q-text">
          Для того чтобы узнать уровень загрязнения атмосферного воздуха
          (качество воздуха) в городе Киев, необходимо выбрать соответствующую
          станцию мониторинга на карте выше.
        </p>
      </section>
    );
  }
}

export default AirQuality;