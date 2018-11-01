import React from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/posts")
      .then(res => {
        const data = res.data;
        this.setState({
          products: data
        });
      })
      .catch(err => {
        console.log("Error at GET request", err);
      });
  }

  render() {
    const { products } = this.state;
    return <ProductDetails products={products} />;
  }
}

export default App;

// TODO: fix eslint to include underscore vars
