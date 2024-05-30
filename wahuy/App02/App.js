import React from "react";
import Item from "./item01";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: true };
  }

  handleClick = () => {
    this.setState({ output: !this.state.output });
  };

  render() {
    let abc = [
      { name: "Apple", id: 1 },
      { name: "Mango", id: 2 },
      { name: "Papaya", id: 3 },
      { name: "Star Fruit", id: 4 },
      { name: "Banana", id: 5 },
    ];

    return (
      <div style={styles.app}>
        <Header />
        <div style={styles.content}>
          <div style={styles.itemContainer}>
            {this.state.output ? (
              abc.map((item) => (
                <p key={item.id} style={styles.item}>
                  <Item name={item.name} />
                </p>
              ))
            ) : (
              <p style={styles.noItems}>No items to display</p>
            )}
          </div>
          <button style={styles.toggleButton} onClick={this.handleClick}>
            {this.state.output ? "Hide Items" : "Show Items"}
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  app: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  content: {
    padding: "20px",
    flexGrow: 1,
  },
  itemContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0",
  },
  item: {
    padding: "10px",
    color: "#333",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, boxShadow 0.3s",
  },
  noItems: {
    color: "gray",
    fontStyle: "italic",
  },
  toggleButton: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  toggleButtonHover: {
    backgroundColor: "#21a1f1",
  },
};

export default App;