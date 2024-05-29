import React from 'react';
import Item01 from './Item01';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { output: true }
    }

    handleClick = () => {
        this.setState({ output: !this.state.output });
    };

    render() {
        let region = [
            { name: 'Mondstadt', id: 1 },
            { name: 'Liyue', id: 2 },
            { name: 'Inazuma', id: 3 },
            { name: 'Sumeru', id: 4 },
            { name: 'Fontaine', id: 5 },
        ]

        return (
            <div>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {this.state.output ?
                        region.map((item) => {
                            return (
                                <p style={styles.inP}>
                                    <Item01 name={item.name} />
                                </p>
                            )
                        }) : ""}
                    <button onClick={this.handleClick}>Ubah State</button>
                </div>
                <Footer />
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    inP: { padding: '10', color: 'red', margin: '5px' },
}

export default App