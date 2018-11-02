import React from "react";


const ProductInfo = ({ product }) => (
  <div className="product-info-wrapper">
    <div className="star-review-wrapper">
      <div className="star-review"></div>
    </div>
    <div className="rating">{product.rating}</div>
    <div className="review-count">{product.reviewCount}</div>
    <div className="item-num-wrapper">
      <div className="item-num">{product.itemNum}</div>
    </div>
  </div>
);


export default ProductInfo;