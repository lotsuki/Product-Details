import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/posts")
      .then(res => {
        const data = res.data;
        this.setState({
          test: data
        });
      })
      .catch(err => {
        console.log("Error at GET request", err);
      });
  }

  render() {
    const { test } = this.state;
    return (
      <div className="product">
        <ul>
          {test.map(product => (
            <li key={product.id}>
              <div>{product.name}</div>
              <div>{product.rating}</div>
              <div>{product.reviewCount}</div>
              <div>{product.itemNum}</div>
              <div>{`$${product.price}.00`}</div>
              <div>{product.color}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// {<div className="greeting">Hi...{this.state.test}</div>
//       <button onClick={() => { this.changeState() }}>Press Me</button>}
