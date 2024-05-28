import React from 'react';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = { count: 0, name: 'Halo' } // state === property
  }

  plusClick() {
    this.setState({ count: this.state.count + 1 }) // state change
  }

  minusClick() {
    this.setState({ count: this.state.count - 1 }) // state change
  }

  render() {
    return (
      <div className='rt'>
        <p>Halo {this.state.count}</p> {/* <======== menampilkan component ====== */}
        <button onClick={() => { this.plusClick() }}> + </button>
        <button onClick={() => { this.minusClick() }}> - </button>
      </div>
    )
  }


}



export default App;