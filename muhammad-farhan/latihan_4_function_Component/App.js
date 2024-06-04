import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const tambah = () => {
    setCount(count + 1);
    closeCount(count + 1);
  };

  const kurang = () => {
    setCount(count - 1);
    closeCount(count - 1);
  };

  const closeCount = (newCount) => {
    if (newCount === 5) {
      alert("Angka sudah mencapai 5");
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === '') {
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  };

  const handleSubmit = () => {
    if (inputValue === '') {
      setIsInputEmpty(true);
    } else {
      alert(`Isi form: ${inputValue}`);
      setInputValue('');
      setIsInputEmpty(false);
    }
  };

  const styles = {
    app: {
      textAlign: 'center',
    },
    header: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
      justifyContent: 'center'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#61dafb',
      color: '#282c34',
    },
    formGroup: {
      marginTop: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    submitButton: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#61dafb',
      color: '#282c34',
    },
    pesanError: {
      color: 'red',
      fontSize: '14px',
    },
    counting: {
      border: '2px solid red',
      marginBottom: '20px',
      padding: '10px'
    },
    formInput: {
      border: '2px solid red',
      padding: '10px'
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.counting}>
          <h1>Ini Aplikasi Count</h1>
          <h2>Counter: {count}</h2>
          {isVisible && (
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={tambah}>Tambah</button>
              <button style={styles.button} onClick={kurang}>Kurang</button>
            </div>
          )}
        </div>
        
        <div style={styles.formInput}>
          <h1>Ini Aplikasi Untuk Menampilkan</h1>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="text"
              placeholder="Masukkan Isi"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button style={styles.submitButton} onClick={handleSubmit}>Kirim</button>
            {isInputEmpty && <div style={styles.pesanError}>Wajib diisi</div>}
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
