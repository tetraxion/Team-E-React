import { useState } from "react";
import Header from "./header";

function App() {
  const [count, setCount] = useState(0);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [formInput, setFormInput] = useState("");
  const [isFormAlertVisible, setIsFormAlertVisible] = useState(false);

  const handleCount = () => {
    if (count === 5) {
      alert("Counter selesai");
      setIsButtonEnabled(false);
    } else {
      setCount(count + 1);
    }
  };

  const handleChange = (event) => {
    setFormInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formInput === "") {
      setIsFormAlertVisible(true);
    } else {
      setIsFormAlertVisible(false);
      setFormInput("");
      alert(formInput);
    }
  };

  const renderFormAlert = () => (
    <div style={styles.alert}>
      <h4>Form tidak boleh kosong!!</h4>
    </div>
  );

  const renderAppForm = () => (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>Formulir Pesanan</h2>
      <div>
      <textarea
        style={styles.textarea}
        value={formInput}
        onChange={handleChange}
        />
      </div>
      {isFormAlertVisible && renderFormAlert()}
      <input style={styles.submitButton} type="submit" value="Kirim" />
    </form>
  );

  return (
    <div style={styles.appContainer}>
      <div style={styles.appSubstitute}>
        <Header />
        <h2>Ini adalah Counter ke: {count}</h2>
        {isButtonEnabled && (
          <button style={styles.counterButton} onClick={handleCount}>
            +
          </button>
        )}
        {renderAppForm()}
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  appSubstitute: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  counterButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
  },
  form: {
    marginTop: "20px",
  },
  textarea: {
    width: "auto",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submitButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  alert: {
    marginTop: "10px",
    color: "red",
    fontWeight: "bold",
  },
};

export default App;