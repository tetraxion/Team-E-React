import React from 'react';

class App extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {count: 0}
  }

  handleClickUp() {
    this.setState({count: this.state.count + 1})
  }

  handleClickDown() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return(
      <div className='rt'>
        <p>Counter</p>
      <p>{this.state.count}</p> {/* <======== menampilkan component ====== */}
      <div className='row'>
      <button className='plus' onClick={() => {this.handleClickDown()}}> - </button>
        <button className='minus' onClick={() => {this.handleClickUp()}}> + </button>
      </div>
    </div>
    )
  }
}

export default App;
