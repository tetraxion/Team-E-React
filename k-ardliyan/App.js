import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    surprise = () => {
        // Menghasilkan angka antara -100 hingga 100
        const randomNum = Math.floor(Math.random() * 201) - 100;
        this.setState({ count: randomNum });
    };

    buttonHover = (e, color) => {
        e.currentTarget.style.backgroundColor = color;
    };

    render() {
        return (
            <div style={styles.body}>
                <div style={styles.app}>
                    <div style={styles.counterContainer}>
                        <h1 style={styles.h1}>Counter App</h1>
                        <a
                            href='https://www.github.com/k-ardliyan/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={styles.subtitle}
                        >
                            @k-ardliyan
                        </a>
                        <p style={styles.count}>{this.state.count}</p>
                        <div style={styles.buttonContainer}>
                            <button
                                style={styles.button}
                                onMouseOver={(e) =>
                                    this.buttonHover(e, '#3700b3')
                                }
                                onMouseOut={(e) =>
                                    this.buttonHover(e, '#6200ea')
                                }
                                onClick={this.decrement}
                            >
                                ➖ Decrement
                            </button>
                            <button
                                style={styles.button}
                                onMouseOver={(e) =>
                                    this.buttonHover(e, '#3700b3')
                                }
                                onMouseOut={(e) =>
                                    this.buttonHover(e, '#6200ea')
                                }
                                onClick={this.surprise}
                            >
                                🎉 Surprise
                            </button>
                            <button
                                style={styles.button}
                                onMouseOver={(e) =>
                                    this.buttonHover(e, '#3700b3')
                                }
                                onMouseOut={(e) =>
                                    this.buttonHover(e, '#6200ea')
                                }
                                onClick={this.increment}
                            >
                                ➕ Increment
                            </button>
                        </div>
                        <button
                            style={styles.resetButton}
                            onMouseOver={(e) => this.buttonHover(e, '#790000')}
                            onMouseOut={(e) => this.buttonHover(e, '#b00020')}
                            onClick={this.reset}
                        >
                            🔁 Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    body: {
        margin: '0',
        fontFamily: "'Arial', sans-serif",
        backgroundColor: '#121212',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    app: { textAlign: 'center' },
    counterContainer: {
        backgroundColor: '#1e1e1e',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    subtitle: {
        display: 'block',
        color: '#bbbbbb',
        textDecoration: 'none',
        fontSize: '0.9rem',
    },
    h1: { marginBottom: '.5rem' },
    count: { fontSize: '3rem', marginTop: '20px', marginBottom: '20px' },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#6200ea',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
    resetButton: { backgroundColor: '#b00020', width: '100%' },
};

export default App;
