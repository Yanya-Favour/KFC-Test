import React from "react";
import Slider from "react-slick";
import styles from "./HomeSlider.module.css";
import axios from "axios";
import { getProductImage, handleProductImageError } from "../utils/productImage";
import { formatUGX } from "../utils/currency";
import { API_BASE_URL } from "../utils/api";
import catalog from "../SliderData.json";

export default class Featured extends React.Component {
  state = {
    slideIndex: 1,
    updateCount: 1,
    items: catalog.featured,
  };

  componentDidMount() {
    axios.get(`${API_BASE_URL}/api/home/featured`)
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) this.setState({ items: data });
      })
      .catch(() => this.setState({ items: catalog.featured }));
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <div className={styles.commonSliderDiv}>
        <div
          className={styles.commonSliderHeading}
          style={{ textAlign: "center" }}
        >
          <h2>FEATURED ITEMS</h2>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {this.state.items.map((item) => {
            const catalogItem = catalog.featured.find(({ title }) => title === item.title);
            const price = item.price || item.amount || catalogItem?.price;

            return (
              <div
                className={styles.itemDiv}
                style={{ outline: "none" }}
                key={item._id || item.title}
              >
              <img
                src={getProductImage(item.image, item.title)}
                alt={item.title}
                className={styles.itemImg}
                onError={(event) => handleProductImageError(event, item.title)}
              />
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemPrice}>{formatUGX(price)}</p>
              <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            );
          })}
        </Slider>
        <progress
          value={this.state.slideIndex}
          min={0}
          max={1}
          className={styles.sliderProgress}
        ></progress>
      </div>
    );
  }
}
