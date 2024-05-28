import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handleClick() {
    this.setState({count: this.state.count + 1}) // state change
  }

  render() {
    return(
      <div style={{textAlign: "center"}}>
        <p style={{color: "red"}}>Jumlah Klik: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Klik</button>
      </div>
    )
  }
}

export default App;