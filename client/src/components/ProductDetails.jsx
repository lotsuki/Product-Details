import React from "react";
// import PropTypes from "prop-types";

const ProductDetails = ({ products }) => (
  <div className="product">
    {products.map(product => (
      <div>
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
          <img src="" alt="" />
        </div>
        <div className="quantity">Quantity</div>
        <div className="quantity-button" />
        <input type="submit" value="Add to cart" />
        <input type="submit" value="Add to wish list" />
      </div>
    ))}
  </div>
);

// ProductDetails.propTypes = {
//   products: PropTypes.array
// };

export default ProductDetails;
