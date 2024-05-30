import React, { Component } from 'react';

class App extends Component {
    state = {
        todos: ['Belajar Form', 'Handle Error'], // Inisialisasi state dengan dua todo
        newTodo: '', // State untuk input baru
        error: '', // State untuk pesan error
    };

    // Fungsi untuk meng-handle perubahan input
    handleInputChange = (e) => {
        this.setState({ newTodo: e.target.value });
    };

    // Fungsi untuk menambahkan todo baru
    handleAddTodo = (e) => {
        e.preventDefault();
        const { newTodo, todos } = this.state;

        if (!newTodo.trim()) {
            // Validasi jika input kosong .trim()
            this.setState({ error: 'Todo tidak boleh kosong 😢' });
        } else if (todos.length >= 3) {
            // Validasi jika todo lebih dari 3
            this.setState({
                error: 'Tiga todo saja, \njangan banyak-banyak 😅',
            });
        } else {
            this.setState((state) => ({
                todos: [...state.todos, state.newTodo], // Tambahkan todo baru ke daftar
                newTodo: '', // Reset input
                error: '', // Reset error
            }));
        }
    };

    // Fungsi untuk menghapus todo berdasarkan index
    handleDeleteTodo = (index) => {
        this.setState((state) => {
            const todos = state.todos.slice(); // Salin array todos
            todos.splice(index, 1); // Hapus todo pada index yang diberikan
            return { todos, error: '' }; // Perbarui state
        });
    };

    render() {
        return (
            <div style={styles.body}>
                <div style={styles.app}>
                    <h1 style={styles.title}>Todo List</h1>
                    <p style={styles.subtitle}>by k-ardliyan</p>
                    {this.state.error && (
                        <div style={styles.error}>{this.state.error}</div> // Tampilkan pesan error jika ada
                    )}
                    <form
                        onSubmit={this.handleAddTodo}
                        style={styles.inputContainer}
                    >
                        <input
                            type='text'
                            value={this.state.newTodo}
                            onChange={this.handleInputChange}
                            placeholder='Add a new todo'
                            style={styles.input}
                        />
                        <button type='submit' style={styles.button}>
                            Add
                        </button>
                    </form>
                    <ul style={styles.todoList}>
                        {this.state.todos.map((todo, index) => (
                            <li key={index} style={styles.todoItem}>
                                {todo}
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => this.handleDeleteTodo(index)} // Panggil handleDeleteTodo saat tombol di klik
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const styles = {
    body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#121212',
        color: '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    app: {
        backgroundColor: '#1e1e1e',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '300px',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '0px',
    },
    subtitle: {
        fontSize: '16px',
        marginTop: '5px',
        marginBottom: '20px',
        color: '#888888',
    },
    inputContainer: {
        display: 'flex',
        marginBottom: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginRight: '10px',
        backgroundColor: '#2c2c2c',
        color: '#ffffff',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#6200ea',
        color: '#ffffff',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#3700b3',
    },
    todoList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #333',
    },
    lastTodoItem: {
        borderBottom: 'none',
    },
    deleteButton: {
        backgroundColor: '#e91e63',
        border: 'none',
        borderRadius: '5px',
        color: '#ffffff',
        cursor: 'pointer',
        padding: '5px',
    },
    deleteButtonHover: {
        backgroundColor: '#c2185b',
    },
    error: {
        color: '#ff0000',
        marginBottom: '10px',
    },
};

export default App;
