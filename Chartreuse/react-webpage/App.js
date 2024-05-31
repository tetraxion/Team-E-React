import { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlants: false,
      formSubmitted: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      showPlants: !this.state.showPlants
    });
  }

  handleFormSubmit() {
    this.setState({
      formSubmitted: true
    });
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
      <div>
        <Header />
        <div style={styles.container}>
          

          <div style={styles.contents}>
            {this.state.showPlants ? plants.map(plant => {
              return (
              <Content name={plant.name} text={plant.text}/>
              )
            }) : contentEmpty}
          </div>
          <button style={styles.button} onClick={() => {this.handleClick()}}>Click</button>

          {this.state.formSubmitted ? <p>Thanks</p> : <Form onFormSubmit={this.handleFormSubmit}/>}

        </div>
        <Footer />
      </div>
    );
  }
}

const styles = {
  contents: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // gap: "20px",
    textAlign: "center"
  },
  button: {
    width: "50px",
    marginBottom: "50px"
  }
};

export default App;
