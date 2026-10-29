import React from "react";
import Slider from "react-slick";
import axios from "axios";
import styles from './HomeSlider.module.css';
import { getProductImage, handleProductImageError } from "../utils/productImage";
import { formatUGX } from "../utils/currency";
import { API_BASE_URL } from "../utils/api";

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 1,
    updateCount: 3,
    items: [],
    error: "",
  };

  componentDidMount() {
    axios.get(`${API_BASE_URL}/api/home/quickbites`)
      .then(({ data }) => this.setState({ items: Array.isArray(data) ? data : [] }))
      .catch(() => this.setState({ error: "Quick bites could not be loaded from the database." }));
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 1279, settings: { slidesToShow: 4, slidesToScroll: 4, initialSlide: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, initialSlide: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 1 } },
      ],
      afterChange: () => this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };

    return (
      <div className={styles.commonSliderDiv}>
        <div className={styles.commonSliderHeading}>
          <h2>QUICK BITES</h2>
        </div>
        {this.state.error ? <p role="alert">{this.state.error}</p> : <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {this.state.items.map((item) => (
            <div className={styles.itemDiv} key={item._id} style={{outline:"none"}}>
              <img
                src={getProductImage(item.image, item.title)}
                alt={item.title}
                className={styles.itemImg}
                onError={(event) => handleProductImageError(event, item.title)}
              />
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemPrice}>{formatUGX(item.price)}</p>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          ))}
        </Slider>}
        <progress
          value={this.state.slideIndex}
          min={0}
          max={6}
          className={styles.sliderProgress}
        ></progress>
      </div>
    );
  }
}
