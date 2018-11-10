import React from "react";
import ProductInfo from "./ProductInfo.jsx";
import Quantity from "./Quantity.jsx";
import Buttons from "./Buttons.jsx";
import styles from "../style.css.js";

const Details = ({ product }) => (
  <div className="product" style={styles.Details}>
    <div style={styles.brand}>Trailblazer</div>
    <div style={styles.name}>Trailblazer {product.name}</div>
    <ProductInfo product={product} />
    <div style={styles.price}>{`$${product.price}.00`}</div>
    <div style={styles.color}>Color: {product.color}</div>
    <div className="details-image">
      <img style={styles.image} src={product.image} alt="" img-test="details" />
    </div>
    <Quantity />
    <Buttons />
    <div style={styles.returnPolicy}>Trailblazer return policy</div>
  </div>
);

export default Details;
