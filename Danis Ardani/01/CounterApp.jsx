import React, { Component } from "react";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
  },
  header: {
    backgroundColor: "black",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    bottom: 0,
    zIndex: 100,
  },
  counterApp: {
    textAlign: "center",
    flex: 1,
  },
  counterContainer: {
    margin: "20px",
    padding: "20px",
  },
  counterContainerH2: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "blue",
    color: "white",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  fruitContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fruitItem: {
    margin: "5px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
  },
};

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <h1>Counter App</h1>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer style={styles.footer}>
        <p>© 2024 Footer</p>
      </footer>
    );
  }
}

class FruitItem extends React.Component {
  render() {
    return <span>{this.props.name}</span>;
  }
}

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      output: false,
      fruits: [
        { name: "Apple", id: 1 },
        { name: "Mango", id: 2 },
        { name: "Papaya", id: 3 },
        { name: "Star Fruit", id: 4 },
        { name: "Banana", id: 5 },
      ],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ output: !prevState.output }));
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.counterApp}>
          <div style={styles.counterContainer}>
            <h2 style={styles.counterContainerH2}>
              Current Count: {this.state.count}
            </h2>
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              onClick={this.incrementCount}
            >
              Increment
            </button>
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              onClick={this.decrementCount}
            >
              Decrement
            </button>
          </div>
        </div>
        <div style={styles.counterApp}>
          <div style={styles.counterContainer}>
            <h2 style={styles.counterContainerH2}>
              Fruit Count: {this.state.fruits.length}
            </h2>
            {this.state.output ? (
              <div style={styles.fruitContainer}>
                {this.state.fruits.map((fruit) => (
                  <div key={fruit.id} style={styles.fruitItem}>
                    <FruitItem name={fruit.name} />
                  </div>
                ))}
              </div>
            ) : (
              <p style={styles.noItems}>No Fruits</p>
            )}
          </div>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.button.backgroundColor)
            }
            onClick={this.handleClick}
          >
            {this.state.output ? "Hide Items" : "Show Items"}
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
