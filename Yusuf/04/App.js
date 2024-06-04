import React, { useState } from 'react';
import './App.css';

const TokopediaApp = () => {
  return (
    <div className='tp-container'>
      <div className='tp-card'>
        <CountTracker />
      </div>
      <div className='tp-card'>
        <UserForm />
      </div>
    </div>
  );
};

const CountTracker = () => {
  const [counter, setCounter] = useState(0);
  const [taskFinished, setTaskFinished] = useState(false);

  const increase = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      if (newCounter === 5) setTaskFinished(true);
      return newCounter;
    });
  };

  const decrease = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter - 1;
      if (newCounter === -5) setTaskFinished(true);
      return newCounter;
    });
  };

  return (
    <div>
      <h2>Hitung Jumlah</h2>
      <p className='tp-count'>{counter}</p>
      {taskFinished ? (
        <p className='tp-success'>Selamat, misi selesai! 🎉</p>
      ) : (
        <>
          <button onClick={decrease} className='tp-button'>Kurangi</button>
          <button onClick={increase} className='tp-button'>Tambahkan</button>
        </>
      )}
    </div>
  );
};

const UserForm = () => {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState('');
  const [taskFinished, setTaskFinished] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setAlert('Kolom tidak boleh kosong');
      setTaskFinished(false);
    } else {
      setAlert('');
      setTaskFinished(true);
    }
  };

  return (
    <div>
      <h2>Formulir Pengguna</h2>
      <form onSubmit={handleFormSubmit} className='tp-form'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Masukkan teks'
          className='tp-input'
        />
        <button type='submit' className='tp-button'>Kirim</button>
      </form>
      {alert && <p className='tp-alert'>{alert}</p>}
      {taskFinished && (
        <>
          <p className='tp-result'>{text}</p>
          <p className='tp-success'>Selamat, misi selesai! 🎉</p>
        </>
      )}
    </div>
  );
};

export default TokopediaApp;
