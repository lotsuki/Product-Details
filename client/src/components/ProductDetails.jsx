import React from "react";
import ProductInfro from "./ProductInfo.jsx";
import Quantity from "./Quantity.jsx";

const ProductDetails = ({ product }) => (
  <div className="product">
    <div className="brand">Trailblazer</div>
    <div className="name">{product.name}</div>
    <ProductInfo product={ product } />
    <div>{`$${product.price}.00`}</div>
    <div>Color: {product.color}</div>
    <div className="details-image">
      <img src="" alt="" img-test="details" />
    </div>
    <Quantity />
  </div>
);


export default ProductDetails;







