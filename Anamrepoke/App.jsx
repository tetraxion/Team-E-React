import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: 'Eko' };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const styles = {
      rt: {
        textAlign: 'center',
      },
      p: {
        fontSize: 24,
        marginBottom: 10,
      },
      button: {
        fontSize: 16,
        padding: '5px 10px',
        border: '1px solid #ccc',
        borderRadius: 4,
        cursor: 'pointer',
      },
    };

    return (
      <div className="rt" style={styles.rt}>
        <p style={styles.p}>Halo, {this.state.name}</p>
        <br>
        <p style={styles.p}>Hitung = {this.state.count}</p>
        <button style={styles.button} onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default App;
