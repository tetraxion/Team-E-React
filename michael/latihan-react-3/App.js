import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hewanList: [], inputValue: "", showError: false};
  }

  handleSubmit(event) {
    if (this.state.inputValue === "") {
      this.setState({showError: true})
    } else {
      let hewanList = this.state.hewanList;
      hewanList.push(this.state.inputValue);
      this.setState({hewanList: [...hewanList], showError: false, inputValue: ""})
    }

    console.log(this.state.hewanList);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return(
      <div class="container">
        <form class="simple-form">
          <label for="input-field">Nama Hewan:</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.inputValue} id="input-field" name="input-field" placeholder="Masukan nama hewan" />
          {this.state.showError ? <p class="error-message">Nama Hewan Tidak Boleh Kosong!</p> : ""}
          <a onClick={(event) => this.handleSubmit(event)}>Submit</a>
          {this.state.hewanList.map((hewanItem) => {
            return (
              <p>{hewanItem}</p>
            )
          })}
        </form>
      </div>
    )
  }
}

export default App;