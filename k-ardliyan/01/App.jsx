import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isLoading: true });

        setTimeout(() => {
            const todo = [
                {
                    id: 1,
                    name: 'Membuat Header',
                },
                {
                    id: 2,
                    name: 'Membuat Main',
                },
                {
                    id: 3,
                    name: 'Membuat Footer',
                },
                {
                    id: 4,
                    name: 'Membuat Array Map',
                },
            ];

            this.setState({ todos: todo, isLoading: false });
        }, 2000); // Simulasi loading
    }

    render() {
        const { todos, isLoading } = this.state;

        return (
            <div style={styles.app}>
                <Header title='Todo App' />
                <main>
                    {isLoading ? (
                        <p style={styles.loading}>Loading...</p>
                    ) : (
                        todos.map((todo) => (
                            <div key={todo.id} style={styles.todo}>
                                {todo.name}
                            </div>
                        ))
                    )}
                </main>
                <button onClick={this.handleClick}>Show Todos</button>
                <Footer author={'k-ardliyan'} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <p>by {this.props.author}</p>
            </div>
        );
    }
}

const styles = {
    app: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        marginTop: '50px',
    },
    todo: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        cursor: 'pointer',
    },
    loading: {
        fontSize: '20px',
        color: 'blue',
    },
};

export default App;
