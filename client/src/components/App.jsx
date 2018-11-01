import React from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
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
          product: data
        });
      })
      .catch(err => {
        console.log("Error at GET request", err);
      });
  }

  render() {
    const { product } = this.state;
    return <ProductDetails product={product} />;
  }
}

export default App;

// TODO: fix eslint to include underscore vars
