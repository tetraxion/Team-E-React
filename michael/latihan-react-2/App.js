import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div style={{margin: "0 auto", width: "500px", border: "solid 1px black"}}>
        <h1>Nama-Nama Hewan</h1>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <p>{this.props.namaHewan}</p>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div style={{margin: "0 auto", width: "500px", border: "solid 1px black"}}>
        <h1>Footer</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showOutput: false};
    this.hewanList = ['Rusa', 'Kucing', 'Anjing', 'Jerapah', 'Babi', 'Harimau'];
  }

  handleClick() {
    this.setState({showOutput: !this.state.showOutput}) 
  }

  render() {
    return(
      <div style={{textAlign: "center"}}>
        <Header />
        <div style={{margin: "0 auto", width: "500px", border: "solid 1px black"}}>
          <button onClick={() => this.handleClick()}>Tampilkan Hewan</button>
          {this.state.showOutput ? this.hewanList.map((hewanItem) => {
            return(<Content 
              namaHewan={hewanItem}
            />)
          }): ""}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;