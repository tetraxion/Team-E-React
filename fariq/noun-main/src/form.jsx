import React, { useState } from 'react';

const Form = () => {
    const [input, setInput] = useState('');
    const [error, setSalah] = useState('');
    const [missionCompleted, setMissionCompleted] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault()
  
      if (input === '') {
          setSalah('Input tidak boleh kosong')
          setMissionCompleted(false);
      } else {
        setSalah(false)
        setMissionCompleted(true);
      }
  }
  
    return (
      <div>
        <h2>Form Submit</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder='Enter something'
          />
          <button type='submit'>Submit</button>
        </form>
        {error && <p className='error'>{error}</p>}
        {missionCompleted && (
          <>
            <p className='input-result'>{input}</p>
            <p>Anda sudah click sebanyak 5 kali</p>
          </>
        )}
      </div>
    );
  };
  export default Form;