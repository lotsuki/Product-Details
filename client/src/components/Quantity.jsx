import React from 'react';

class Quantity extends from React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="quantity-wrapper">
        <div className="quantity">Quantity</div>
        <div className="button-wrapper">
          <button type="button" onClick={() => { this.decrement }}>-</button>
          <input type="text" name="quantity" minlength="1" value={this.state.counter}/>
          <button type="button" onClick={() => { this.increment }}>+</button>
        </div>
      </div>
    )
  }
};

export default Quantity;

