import React from "react";
import Slider from "react-slick";
import axios from "axios";
import styles from "./HomeSlider.module.css";
import { getProductImage, handleProductImageError } from "../utils/productImage";
import { formatUGX } from "../utils/currency";
import { API_BASE_URL } from "../utils/api";
import catalog from "../SliderData.json";


export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 1,
    updateCount: 1,
    items: catalog.favorites,
  };

  componentDidMount() {
    axios.get(`${API_BASE_URL}/api/home/favorites`)
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) this.setState({ items: data });
      })
      .catch(() => this.setState({ items: catalog.favorites }));
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 2.5,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
      ],
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };

    return (
      <div className={styles.mainSliderDiv}>
        <div className={styles.commonSliderHeading}>
          <p>COME N' GET IT</p>
          <h2>TRY ONE OF THESE FAVORITES</h2>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {this.state.items.map((item) => {
            const catalogItem = catalog.favorites.find(({ title }) => title === item.title);
            const price = item.price || item.amount || catalogItem?.price;

            return (
              <div key={item._id || item.title} style={{ outline: "none" }}>
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
          max={7}
          style={{ marginTop: "0rem" }}
          className={styles.sliderProgress}
        ></progress>
      </div>
    );
  }
}
