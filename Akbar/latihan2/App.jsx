import React from "react";
import Item01 from "./Item01";
import Head from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: true };
  }

  handleClick() {
    this.setState({ output: !this.state.output });
  }

  render() {
    let buah = [
      { name: "Durian", id: 1 },
      { name: "Pisang", id: 2 },
      { name: "Apel", id: 3 },
      { name: "Semangka", id: 4 },
      { name: "Nanas", id: 5 },
    ];

    return (
      <div>
        <Head />
        <div style={styles.content}>
          <div style={styles.container}>
            {this.state.output
              ? buah.map((item) => {
                  return (
                    <p style={styles.p}>
                      <Item01 name={item.name} />
                    </p>
                  );
                })
              : ""}
          </div>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            Tampilkan
          </button>
        </div>

        <Head />
      </div>
    );
  }
}

let styles = {
  content: { display: "flex", justifyContent: "center" },
  container: { display: "flex", border: "1px solid blue" },
  p: { padding: 5 },
};

export default App;
