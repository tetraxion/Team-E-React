import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  updateCount() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => {this.updateCount()}}>+</button>
      </div>
    );
  }
}

export default App;
