import React from "react";
import Details from "./Details.jsx";
import styles from "../style.css.js";

const ProductDetails = ({ product }) => (
  <div style={styles.container}>
    <div style={styles.wrapper}>
      <div style={styles.mainImageWrapper}>
        <img style={styles.mainImage} src={product.mainImage} alt="" />
      </div>
      <Details product={product} />
    </div>
  </div>
);

export default ProductDetails;
