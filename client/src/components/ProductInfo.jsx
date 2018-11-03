import React from "react";
import styles from "../style.css.js";


const ProductInfo = ({ product }) => (
  <div className="product-info-wrapper" style={styles.ProductInfo}>
    <div className="star-review-wrapper">
      <div className="star-review"></div>
    </div>
    <div style={styles.rating}>{product.rating}</div>
    <div style={styles.reviewCount}>{product.reviewCount}</div>
    <div className="item-num-wrapper">
      <div style={styles.itemNum}>{product.itemNum}</div>
    </div>
  </div>
);


export default ProductInfo;