import React from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";
import styles from "../style.css.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      isLoading: false
    };
  }

  componentDidMount() {
    const url = window.location.href.split("/");
    const id = url[url.length - 1];

    axios
      .get(`http://localhost:3001/data/${id}`)
      .then(res => {
        const data = res.data;
        this.setState({
          product: data,
          isLoading: true
        });
      })
      .catch(err => {
        console.log("Error at GET request", err);
      });
  }

  render() {
    const { product, isLoading } = this.state;
    let view;
    if (isLoading) {
      view = <ProductDetails product={product} style={styles.ProductDetails} />;
    }
    return <div>{view}</div>;
  }
}

export default App;
