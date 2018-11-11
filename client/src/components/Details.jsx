import React from "react";
import ProductInfo from "./ProductInfo.jsx";
import Quantity from "./Quantity.jsx";
import Buttons from "./Buttons.jsx";
import Images from "./Images.jsx";
import Labels from "./Labels.jsx";
import styles from "../style.css.js";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.product.images[0].color
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(img) {
    const images = this.props.product.images;
    for (let i = 0; i < images.length; i++) {
      if (images[i].image === img.src) {
        this.setState({
          color: images[i].color
        });
      }
    }
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product" style={styles.Details}>
        <div style={styles.brand}>Trailblazer</div>
        <div style={styles.name}>Trailblazer {product.name}</div>
        <ProductInfo product={product} />
        <div style={styles.price}>{`$${product.price}.00`}</div>
        <div style={styles.color}>Color: {this.state.color}</div>
        <Images
          product={product}
          handleChange={img => {
            this.changeColor(img);
          }}
        />
        <Quantity />
        <Labels />
        <Buttons />
        <div style={styles.returnPolicy}>Trailblazer return policy</div>
      </div>
    );
  }
}

export default Details;
