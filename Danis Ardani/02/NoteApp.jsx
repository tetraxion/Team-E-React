import React, { Component } from "react";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box",
  },
  header: {
    backgroundColor: "black",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
  },
  noteApp: {
    textAlign: "center",
    flex: 1,
  },
  noteContainer: {
    margin: "20px",
    padding: "20px",
  },
  noteContainerH2: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "blue",
    color: "white",
    width: "20%",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  noteInput: {
    width: "50%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  noteList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  noteItem: {
    width: "80%",
    margin: "5px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
  },
  noteText: {
    flex: 1,
    textAlign: "left",
    marginLeft: "10px",
    wordWrap: "break-word",
    width: "inherit",
    fontSize: "16px",
  },
  noteChecked: {
    textDecoration: "line-through",
  },
  errorMessage: {
    color: "red",
    marginTop: "10px",
  },
  deleteButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "red",
    color: "white",
  },
  deleteButtonHover: {
    backgroundColor: "#b30000",
  },
};

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <h1>Note App</h1>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer style={styles.footer}>
        <p>© 2024 Footer</p>
      </footer>
    );
  }
}

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };

  render() {
    const noteStyle = this.state.checked
      ? { ...styles.noteText, ...styles.noteChecked }
      : styles.noteText;

    return (
      <div style={styles.noteItem}>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />
        <div style={noteStyle}>{this.props.note}</div>
        <button
          style={styles.deleteButton}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.deleteButtonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.deleteButton.backgroundColor)
          }
          onClick={() => this.props.onDelete(this.props.index)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: "",
      errorMessage: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ currentNote: e.target.value });
  };

  addNote = () => {
    if (this.state.currentNote.trim() !== "") {
      this.setState((prevState) => ({
        notes: [...prevState.notes, prevState.currentNote],
        currentNote: "",
        errorMessage: "",
      }));
    } else {
      this.setState({ errorMessage: "Note cannot be empty" });
    }
  };

  clearNotes = () => {
    this.setState({ notes: [] });
  };

  deleteNote = (index) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.noteApp}>
          <div style={styles.noteContainer}>
            <h2 style={styles.noteContainerH2}>Notes</h2>
            <input
              type="text"
              value={this.state.currentNote}
              onChange={this.handleInputChange}
              style={styles.noteInput}
              placeholder="Enter your note here..."
            />
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              onClick={this.addNote}
            >
              Add Note
            </button>
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              onClick={this.clearNotes}
            >
              Clear Notes
            </button>
            {this.state.errorMessage && (
              <p style={styles.errorMessage}>{this.state.errorMessage}</p>
            )}
            <div style={styles.noteList}>
              {this.state.notes.map((note, index) => (
                <NoteItem
                  key={index}
                  index={index}
                  note={note}
                  onDelete={this.deleteNote}
                />
                ))}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        );
      }
    }
    