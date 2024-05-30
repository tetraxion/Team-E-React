import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMerkSepatu: true,
      namaBrand: "",
      showError: false,
      showForm: true
    };
  }

  toggleMerkSepatu() {
    this.setState({ showMerkSepatu: !this.state.showMerkSepatu });
  }

  handleChange(event) {
    this.setState({ namaBrand: event.target.value });
  }

  handleSubmit() {
    if (this.state.namaBrand !== '') {
      this.setState({ showForm: false });
    } else {
      this.setState({ showError: true });
    }
  }

  renderAlert() {
    return (
      <div style={{ color: 'red' }}>
        Nama merek tidak boleh kosong
      </div>
    );
  }

  renderForm() {
    return (
      <form>
        <h2>Formulir Merek Sepatu</h2>
        <textarea onChange={(event) => this.handleChange(event)} />
        {this.state.showError ? this.renderAlert() : null}
        <div style={styles.appButton} onClick={() => this.handleSubmit()}>Submit</div>
      </form>
    );
  }

  render() {
    const MerkSepatu = [
      { name: 'Nike', id: 1 },
      { name: 'Adidas', id: 2 },
      { name: 'Puma', id: 3 },
      { name: 'Reebok', id: 4 },
      { name: 'New Balance', id: 5 },
    ];

    return (
      <div style={styles.appContainer}>
        <div style={styles.appSubtitute}>
          {this.state.namaBrand}
          {this.state.showForm ? this.renderForm() : <p>Form sudah di-submit!</p>}
          <div style={styles.list}>
            <h1>List Merek Sepatu:</h1>
            {this.state.showMerkSepatu ?
              MerkSepatu.map((item) => (
                <p key={item.id}>Halo, saya adalah sepatu merek {item.name}</p>
              )) : null}
            <div style={styles.button} onClick={() => this.toggleMerkSepatu()}>Submit / Clear</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  appContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    border: '2px blue solid'
  },
  appSubtitute: {
    marginTop: '20px',
  },
  appButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    
    
    
  },
  list:{
    
      border: '2px blue solid',
      backgroundColor:'grey'
    
  },
  button:{
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  }
};

export default App;
