import React from "react";

const ProductDetails = ({ product }) => (
  <div className="product">
    <div className="brand">Trailblazer</div>
    <div className="name">{product.name}</div>
    <div className="rating">
      {product.rating}
      <span className="item-num">{product.itemNum}</span>
    </div>
    <div>{product.reviewCount}</div>
    <div>{`$${product.price}.00`}</div>
    <div>{product.color}</div>
    <div className="details-image">
      <img src="" alt="" img-test="details" />
    </div>
    <div className="quantity">Quantity</div>
    <div className="quantity-button" />
    <input type="submit" value="Add to cart" />
    <input type="submit" value="Add to wish list" />
  </div>
);

export default ProductDetails;
