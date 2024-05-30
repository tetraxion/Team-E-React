import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <header>
                <h1>Counter</h1>
            </header>
            <main>
                <h2>Count: {count}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Your Name</p>
            </footer>
        </div>
    );
}

const style  = {
    header: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: '#fff',
    },
    main: {
        textAlign: 'center',
        padding: '20px',
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#333',
        color: '#fff',
    }
}

export default App;