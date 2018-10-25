import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: "my name is Lindsey"
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    this.setState({
      test: "just kidding"
    })
  }

  render() {
    return (
      <div>
      <div>Hi...{this.state.test}</div>
      <button onClick={() => { this.changeState() }}>Press Me</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('details'));