import { useState } from 'react'
import './App.css'
function App() {
  // create simple counter increment and decrement
  const [count, setCount] = useState(0)
  return (
    <div className='app'>
      <h1 className='count'>Counter: {count}</h1>
      <button className='increment' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='decrement' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
