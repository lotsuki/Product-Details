import React from "react";
import ProductInfo from "./ProductInfo.jsx";
import Quantity from "./Quantity.jsx";
import styles from "../style.css.js"

const ProductDetails = ({ product }) => {
  return (
    <div className="product" style={styles.ProductDetails}>
      <div style={styles.brand}>TRAILBLAZER</div>
      <div style={styles.name}>Trailblazer {product.name}</div>
      <ProductInfo product={ product } />
      <div style={styles.price}>{`$${product.price}.00`}</div>
      <div style={styles.color}>Color: {product.color}</div>
      <div className="details-image">
        <img src="" alt="" img-test="details" />
      </div>
      <Quantity />
    </div>
  )
};


export default ProductDetails;







