import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMerkSepatu: true,
      namaBrand: "",
      showError: false,
      showForm: true,
      brands: [
        { name: 'Nike', id: crypto.randomUUID() },
        { name: 'Adidas', id: crypto.randomUUID() },
        { name: 'Puma', id: crypto.randomUUID() },
        { name: 'Reebok', id: crypto.randomUUID() },
        { name: 'New Balance', id: crypto.randomUUID() },
      ],
      editBrandId: null
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
      if (this.state.editBrandId) {
        this.updateBrand(this.state.editBrandId);
      } else {
        this.addBrand();
      }
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
      <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }}>
        <h2>Formulir Merek Sepatu</h2>
        <textarea value={this.state.namaBrand} onChange={(event) => this.handleChange(event)} />
        {this.state.showError ? this.renderAlert() : null}
        <div style={styles.appButton} onClick={() => this.handleSubmit()}>
          {this.state.editBrandId ? 'Update' : 'Submit'}
        </div>
      </form>
    );
  }

  addBrand() {
    const newBrand = {
      name: this.state.namaBrand,
      id: crypto.randomUUID()
    };
    this.setState((prevState) => ({
      brands: [...prevState.brands, newBrand],
      namaBrand: "",
      showForm: true,
      showError: false
    }));
  }

  updateBrand(id) {
    const updatedBrands = this.state.brands.map(brand =>
      brand.id === id ? { ...brand, name: this.state.namaBrand } : brand
    );
    this.setState({
      brands: updatedBrands,
      namaBrand: "",
      showForm: true,
      editBrandId: null,
      showError: false
    });
  }

  deleteBrand(id) {
    const filteredBrands = this.state.brands.filter(brand => brand.id !== id);
    this.setState({ brands: filteredBrands });
  }

  handleEdit(brand) {
    this.setState({
      namaBrand: brand.name,
      showForm: true,
      editBrandId: brand.id
    });
  }

  render() {
    return (
      <div style={styles.appContainer}>
        <div style={styles.appSubtitute}>
          {this.state.namaBrand}
          {this.state.showForm ? this.renderForm() : <p>Form sudah di-submit!</p>}
          <div style={styles.list}>
            <h1>List Merek Sepatu:</h1>
            {this.state.showMerkSepatu ?
              this.state.brands.map((item) => (
                <div key={item.id}>
                  <p>Halo, saya adalah sepatu merek {item.name}</p>
                  <button onClick={() => this.handleEdit(item)}>Edit</button>
                  <button onClick={() => this.deleteBrand(item.id)}>Delete</button>
                </div>
              )) : null}
            <div style={styles.button} onClick={() => this.toggleMerkSepatu()}>Show/Hide</div>
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
  list: {
    border: '2px blue solid',
    backgroundColor: 'grey'
  },
  button: {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  }
};

export default App;
