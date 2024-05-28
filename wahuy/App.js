import React from "react";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.text}>Count: {this.state.count}</p>
        <button
          style={styles.button}
          onClick={() => {
            this.handleClick();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    margin: "0 auto",
    marginTop: "50px",
    width: "50%",
    border: "2px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: "24px",
    color: "#333",
    margin: "10px 0",
  },
  button: {
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#0056b3",
};

export default App;