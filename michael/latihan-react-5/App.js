import React, {useState} from 'react';
import './App.css';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter+1);
  }

  const decreaseCounter = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Ini Counter App</h1>
      <h3>Count: {counter}</h3>
      <button onClick={() => increaseCounter()}>+</button>
      <button onClick={() => decreaseCounter()}>-</button>
    </>
  )
}

const HewanItem = ({ hewan, handleHewanUpdate, handleHewanDelete }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [showError, setShowError] = useState(false);
  const [inputValue, setInputValue] = useState(''); 

  const handleChange = (event) => {
    setIsChanged(true);
    setInputValue(event.target.value);
  }

  const toggleUpdate = () => {
    // Jika tombol update ditekan dan teks pernah diubah
    if (isChanged && isUpdating) {
      if (inputValue === '') {  // jika input kosong
        setShowError(true);
        return;
      } else {
        setShowError(false);
      }
      
      handleHewanUpdate(hewan.id, inputValue);
    } 

    setIsUpdating(!isUpdating);
  }

  let hewanElement;

  if (isUpdating) {
    hewanElement = (
      <div className='simple-form'>  
        <input type="text" 
          onChange={(event) => handleChange(event)} 
          placeholder="Masukan nama hewan" 
          value={isChanged ? inputValue : hewan.namaHewan} 
        />
      </div>
    )
  } else {
    hewanElement = (
      <p className="hewan-item">{hewan.namaHewan}</p>
    )
  }

  return (
    <div>
      {hewanElement}
      {showError ? <p class="error-message">Nama Hewan Tidak Boleh Kosong!</p> : ""}
      <button 
        onClick={() => toggleUpdate()}
        >Update</button>
      <button 
        onClick={() => {handleHewanDelete(hewan.id)}}
        >Delete</button>
    </div>
  )
  
}

const App = () => {
  const [hewanList, setHewanList] = useState([
      { id: crypto.randomUUID(), namaHewan: 'Kuda'},
      { id: crypto.randomUUID(), namaHewan: 'Gajah'},
    ]);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") {  // input tidak boleh kosong
      setShowError(true);
    } else {
      let hewanItem = {
        id: crypto.randomUUID(),
        namaHewan: inputValue
      }

      hewanList.push(hewanItem);

      setHewanList([...hewanList]);
      setShowError(false);
      setInputValue('');
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleHewanUpdate = (hewanId, namaHewan) => {
    let newHewanList = hewanList.map((hewanItem) => {
      if (hewanId === hewanItem.id) {
        hewanItem.namaHewan = namaHewan;
      }

      return hewanItem;
    })

    setHewanList(newHewanList);
  }

  const handleHewanDelete = (hewanId) => {
    let newHewanList = hewanList.filter((hewanItem) => {
      return hewanItem.id !== hewanId;
    })

    setHewanList(newHewanList);
  }

  return(
    <>
    <div className='container counter-app'>
      <CounterApp  />
    </div>
    <div className="container">
      <form onSubmit={(event) => handleSubmit(event)} className="simple-form">
        <label for="input-field">Nama Hewan:</label>
        <input type="text" onChange={(event) => handleChange(event)} value={inputValue} id="input-field" name="input-field" placeholder="Masukan nama hewan" />
        {showError ? <p class="error-message">Nama Hewan Tidak Boleh Kosong!</p> : ""}
        <button className="submit">Submit</button>
      </form>
    </div>
    {hewanList.length > 0 ? (
      <div className="container hewan-list">
        {hewanList.map((hewanItem) => {
            return (
              <HewanItem 
                key={hewanItem.id} 
                hewan={hewanItem} 
                handleHewanUpdate={handleHewanUpdate}
                handleHewanDelete={handleHewanDelete} />
            )
          })}
      </div>
    ) : (
      <></>
    )}
    </>
  )
  
}

export default App;