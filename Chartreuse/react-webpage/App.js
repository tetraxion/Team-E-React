import { Component } from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showPlants: false};
  }

  handleClick() {
    this.setState({
      showPlants: !this.state.showPlants
    })
  }

  render() {
    const plants = [
      {
        name: "barberry",
        text: "This is a type of plant. We love this one."
      },
      {
        name: "chili",
        text: "This is another type of plant. Isn't it nice?"
      },
      {
        name: "pepper",
        text: "We have so many plants. Yay plants."
      },
      {
        name: "saffron",
        text: "I'm running out of things to say about plants."
      }
    ];

    const contentEmpty = (
      <p>Click to show</p>
    );

    return (
      <div style={styles.container}>
        
        <Header />

        <div style={styles.contents}>
          {this.state.showPlants ? plants.map(plant => {
            return (
            <Content name={plant.name} text={plant.text}/>
            )
          }) : contentEmpty}
        </div>
          <button style={styles.button} onClick={() => {this.handleClick()}}>Click</button>

          <Footer />

      </div>
    );
  }
}

const styles = {
  contents: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  container: {
    textAlign: "center"
  }
};

export default App
