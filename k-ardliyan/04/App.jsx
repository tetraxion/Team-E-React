import React, { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='card'>
        <Counter />
      </div>
      <div className='card'>
        <FormSubmit />
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 5) setMissionCompleted(true);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount === -5) setMissionCompleted(true);
      return newCount;
    });
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      {missionCompleted ? (
        <p>Kamu menyelesaikan misi 🎉</p>
      ) : (
        <>
          <button onClick={handleDecrement}>➖</button>
          <button onClick={handleIncrement}>➕</button>
        </>
      )}
    </div>
  );
};

const FormSubmit = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [missionCompleted, setMissionCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError('Input tidak boleh kosong');
      setMissionCompleted(false);
    } else {
      setError('');
      setMissionCompleted(true);
    }
  };

  return (
    <div>
      <h2>Form Submit</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter something'
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p className='error'>{error}</p>}
      {missionCompleted && (
        <>
          <p className='input-result'>{input}</p>
          <p>Kamu menyelesaikan misi 🎉</p>
        </>
      )}
    </div>
  );
};

export default App;
