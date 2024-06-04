import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return <h1 className='header'>Header Logo</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: true,
      fformN: '',
      fformAl: false,
      fform: true,
      makanan: [
        {
          name: 'Gado-Gado',
          id: self.crypto.randomUUID(),
          change: false,
        },
        {
          name: 'Siomay',
          id: self.crypto.randomUUID(),
          change: false,
        },
        {
          name: 'Bakso',
          id: self.crypto.randomUUID(),
          change: false,
        },
        {
          name: 'Soto Ayam',
          id: self.crypto.randomUUID(),
          change: false,
        },
        {
          name: 'Sate',
          id: self.crypto.randomUUID(),
          change: false,
        },
      ],
    };
  }

  handleClick() {
    this.setState({ output: !this.state.output });
  }

  handleChange(event) {
    this.setState({ fformN: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit() {
    if (this.state.fformN !== '') {
      this.setState({ fform: false });

      const newTodo = {
        name: this.state.fformN,
        id: self.crypto.randomUUID(),
        change: false,
      };

      this.setState({ makanan: this.state.makanan.concat(newTodo) });
    } else {
      this.setState({ fformAl: true });
    }
  }

  handleAllert() {
    return <div style={{ color: 'red' }}>Form tidak boleh kosong</div>;
  }

  handleDelete(items) {
    let abc = this.state.makanan.filter((item) => {
      return item.id !== items.id;
    });
    this.setState({ makanan: abc });
  }

  handleUpdate(items) {
    if (items.change === false) {
      let abc = this.state.makanan.map((item) => {
        if (item.id === items.id) {
          return { ...item, change: true };
        } else {
          return item;
        }
      });
      this.setState({ makanan: abc });
    } else {
      let abc = this.state.makanan.map((item) => {
        if (item.id === items.id) {
          return { ...item, name: this.state.fformN, change: false };
        } else {
          return item;
        }
      });
      this.setState({ makanan: abc });
    }
  }

  updateForm(item) {
    return (
      <form>
        <h2>Formulir Pesanan</h2>
        <textarea
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
        {this.state.fformAl ? this.handleAllert() : ''} {}
        <div
          className='appButton'
          onClick={() => {
            this.handleUpdate(item);
          }}
        >
          Submit
        </div>{' '}
        {}
      </form>
    );
  }

  appForm() {
    return (
      <form>
        <h2>Formulir Pesanan</h2>
        <textarea
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
        {this.state.fformAl ? this.handleAllert() : ''}

        <div
          className='appButton'
          onClick={() => {
            this.handleSubmit();
          }}
        >
          Submit
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className='appContainer'>
        <div className='appSubtitute'>
          <Header />
          {this.state.fform ? this.appForm() : <p>Submited form!</p>}{' '}
          <h1>List Makanan:</h1>
          {this.state.output
            ? this.state.makanan.map((item) => (
                <div key={item.name}>
                  <p>Halo saya adalah {item.name}</p>
                  <button
                    onClick={() => {
                      this.handleDelete(item);
                    }}
                  >
                    {' '}
                    Delete!{' '}
                  </button>
                  <button
                    onClick={() => {
                      this.handleUpdate(item);
                    }}
                  >
                    {' '}
                    Update{' '}
                  </button>

                  {item.change ? this.updateForm(item) : ''}
                </div>
              ))
            : ''}
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            Submit / clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
