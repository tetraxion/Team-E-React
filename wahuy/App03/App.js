import React from "react";
import Item from "./item01";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: true,
      fruitName: "",
      error: "",
      fruits: [
        { name: "Apple", id: 1, item: 10 },
        { name: "Mango", id: 2, item: 10 },
        { name: "Papaya", id: 3, item: 10 },
        { name: "Star Fruit", id: 4, item: 10 },
        { name: "Banana", id: 5, item: 10 },
      ],
    };
  }

  handleClick = () => {
    this.setState({ output: !this.state.output });
  };

  handleInputChange = (event) => {
    this.setState({ fruitName: event.target.value, error: "" });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fruitName, fruits } = this.state;
    if (!fruitName) {
      this.setState({ error: "Isi nama Buah dulu" });
      return;
    }
    const fruitIndex = fruits.findIndex(
      (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase()
    );
    if (fruitIndex === -1) {
      this.setState({ error: "Buah yang anda cari tidak ada" });
      return;
    }
    if (fruits[fruitIndex].item === 0) {
      this.setState({ error: `${fruits[fruitIndex].name} sudah habis` });
      return;
    }
    const updatedFruits = [...fruits];
    updatedFruits[fruitIndex].item -= 1;
    this.setState({ fruits: updatedFruits, fruitName: "" }, () => {
      alert(`sukses membeli buah ${fruits[fruitIndex].name}`);
    });
  };

  render() {
    const { fruits, output, fruitName, error } = this.state;

    return (
      <div style={styles.app}>
        <Header />
        <div style={styles.content}>
          <form style={styles.form} onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={fruitName}
              onChange={this.handleInputChange}
              placeholder="masukkan nama buah"
              style={styles.input}
            />
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.itemContainer}>
            {output ? (
              fruits.map((fruit) => (
                <p key={fruit.id} style={styles.item}>
                  <Item name={fruit.name} item={fruit.item} />
                </p>
              ))
            ) : (
              <p style={styles.noItems}>No items to display</p>
            )}
          </div>
          <button style={styles.toggleButton} onClick={this.handleClick}>
            {output ? "Hide Items" : "Show Items"}
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
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  submitButtonHover: {
    backgroundColor: "#21a1f1",
  },
  error: {
    color: "red",
    fontStyle: "italic",
    marginTop: "10px",
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
