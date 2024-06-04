import React, { useState } from 'react';
 
const Counter = () => {
    const [count, setCount] = useState(0);
    const [limaKali, setLimaKali] = useState(false);
  
    const handleIncrement = () => {
      setCount((mainHitung) => {
        const newCount = mainHitung + 1;
        if (newCount === 5) setLimaKali(true);
        return newCount;
      });
    };
  
    const handleDecrement = () => {
      setCount((mainHitung) => {
        const newCount = mainHitung - 1;
        if (newCount === -5) setLimaKali(true);
        return newCount;
      });
    };
  
    return (
      <div>
        <h2>Counter App</h2>
        <p>{count}</p>
        {limaKali ? (
          <p>Anda sudah click sebanyak 5 kali</p>
        ) : (
          <>
            <button onClick={handleIncrement}>Tambah</button>
            <button onClick={handleDecrement}>Kurang</button>
          </>
        )}
      </div>
    );
  };
  export default Counter;