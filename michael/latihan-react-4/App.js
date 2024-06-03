import React from 'react';
import './App.css';

class Hewan extends React.Component {
  constructor(props) {
    super(props);
    // isChanged = cek jika input pernah diubah atau tidak
    this.state = {isUpdating: false, isChanged: false, showError: false, inputValue: ''};
  }

  handleChange(event) {
    this.setState({isChanged: true, inputValue: event.target.value});
  }

  toggleUpdate() {
    if (this.state.isChanged && this.state.isUpdating) {
      if (this.state.inputValue === '') {
        console.log('Show error')
        this.setState({showError: true});
        return;
      } else {
        this.setState({showError: false});
      }
      
      this.props.handleHewanUpdate(this.props.hewan.id, this.state.inputValue);
    } 

    this.setState({isUpdating: !this.state.isUpdating});
  }

  render() {
    let hewanElement;

    if (this.state.isUpdating) {
      hewanElement = (
        <div className='simple-form'>  
          <input type="text" 
            onChange={(event) => this.handleChange(event)} 
            placeholder="Masukan nama hewan" 
            value={this.state.isChanged ? this.state.inputValue : this.props.hewan.namaHewan} 
          />
        </div>
      )
    } else {
      hewanElement = (
        <p>{this.props.hewan.namaHewan}</p>
      )
    }

    return (
      <>
        {hewanElement}
        {this.state.showError ? <p class="error-message">Nama Hewan Tidak Boleh Kosong!</p> : ""}
        <button 
          onClick={() => this.toggleUpdate()}
          >Update</button>
        <button 
          onClick={() => {this.props.handleHewanDelete(this.props.hewan.id)}}
          >Delete</button>
      </>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hewanList: [
        { id: crypto.randomUUID(), namaHewan: 'Kuda'},
        { id: crypto.randomUUID(), namaHewan: 'Gajah'},
      ], 
      inputValue: "", 
      showError: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputValue === "") {
      this.setState({showError: true})
    } else {
      let hewanItem = {
        id: crypto.randomUUID(),
        namaHewan: this.state.inputValue
      }

      let hewanList = this.state.hewanList;

      hewanList.push(hewanItem);

      console.log(hewanList);

      this.setState({
        hewanList: [...hewanList], 
        showError: false, 
        inputValue: ""
      });
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleHewanUpdate = (hewanId, namaHewan) => {
    let newHewanList = this.state.hewanList.map((hewanItem) => {
      if (hewanId === hewanItem.id) {
        hewanItem.namaHewan = namaHewan;
      }

      return hewanItem;
    })

    this.setState({hewanList: newHewanList});

    console.log(this.state.hewanList);
  }

  handleHewanDelete = (hewanId) => {
    let newHewanList = this.state.hewanList.filter((hewanItem) => {
      return hewanItem.id !== hewanId;
    })

    this.setState({hewanList: newHewanList});
  }

  render() {
    return(
      <>
      <div className="container">
        <form onSubmit={(event) => this.handleSubmit(event)} className="simple-form">
          <label for="input-field">Nama Hewan:</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.inputValue} id="input-field" name="input-field" placeholder="Masukan nama hewan" />
          {this.state.showError ? <p class="error-message">Nama Hewan Tidak Boleh Kosong!</p> : ""}
          <button className="submit">Submit</button>
        </form>
      </div>
      <div className="container">
        {this.state.hewanList.map((hewanItem) => {
            return (
              <Hewan key={hewanItem.id} 
                hewan={hewanItem} 
                handleHewanUpdate={this.handleHewanUpdate}
                handleHewanDelete={this.handleHewanDelete} />
            )
          })}
        </div>
      </>
    )
  }
}

export default App;