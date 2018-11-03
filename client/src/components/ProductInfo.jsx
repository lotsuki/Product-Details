import React from "react";
import styles from "../style.css.js";
import Star from "./StarRatings.jsx";


const ProductInfo = ({ product }) => (
  <div className="product-info-wrapper" style={styles.ProductInfo}>
    <Star product={product}/>
    <div style={styles.rating}>{product.rating}</div>
    <div style={styles.reviewCount}>{product.reviewCount}</div>
    <div className="item-num-wrapper">
      <div style={styles.itemNum}>{product.itemNum}</div>
    </div>
  </div>
);


export default ProductInfo;