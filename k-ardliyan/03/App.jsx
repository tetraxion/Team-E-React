import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Apel', 'Susu'],
      newItem: '',
      editingIndex: -1,
      editedItemText: '',
      showModal: false,
      itemToDelete: null,
    };

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  addItem() {
    if (this.state.newItem.trim() !== '') {
      this.setState({
        items: [...this.state.items, this.state.newItem],
        newItem: '',
      });
    }
  }

  updateItem(index, updatedItem) {
    const updatedItems = [...this.state.items];
    updatedItems[index] = updatedItem;
    this.setState({
      items: updatedItems,
      editingIndex: -1,
    });
  }

  deleteItem() {
    const updatedItems = this.state.items.filter(
      (_, i) => i !== this.state.itemToDelete
    );
    this.setState({
      items: updatedItems,
      showModal: false,
      itemToDelete: null,
    });
  }

  startEditing(index) {
    this.setState({
      editingIndex: index,
      editedItemText: this.state.items[index],
    });
  }

  confirmDelete(index) {
    this.setState({
      itemToDelete: index,
      showModal: true,
    });
  }

  handleKeyPress = (event, index = null) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (index !== null) {
        this.updateItem(index, this.state.editedItemText);
      } else {
        this.addItem();
      }
    }
  };

  render() {
    const { items, newItem, editingIndex, editedItemText, showModal } =
      this.state;

    return (
      <div className='shopping-list-container'>
        <h2>Daftar Belanja</h2>

        <div className='input-container'>
          <textarea
            value={newItem}
            onChange={(e) => this.setState({ newItem: e.target.value })}
            placeholder='Tambahkan item baru'
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.addItem}>Tambah</button>
        </div>

        <ul className='list-container'>
          {items.map((item, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <div>
                  <textarea
                    value={editedItemText}
                    onChange={(e) =>
                      this.setState({
                        editedItemText: e.target.value,
                      })
                    }
                    className='text-edit'
                    placeholder='Edit item'
                    onKeyPress={(e) => this.handleKeyPress(e, index)}
                  />
                  <div className='text-edit-button'>
                    <button
                      onClick={() => this.updateItem(index, editedItemText)}
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() =>
                        this.setState({
                          editingIndex: -1,
                        })
                      }
                    >
                      Batal
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {item}
                  <div className='button-container'>
                    <button onClick={() => this.startEditing(index)}>
                      Edit
                    </button>
                    <button onClick={() => this.confirmDelete(index)}>
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {showModal && (
          <div className='modal-overlay'>
            <div className='modal'>
              <p>Apakah Anda yakin ingin menghapus item ini?</p>
              <div className='modal-button-right'>
                <button onClick={this.deleteItem}>Ya</button>
                <button onClick={() => this.setState({ showModal: false })}>
                  Tidak
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tidak Direkomendasikan */}
        <style jsx>{`
          body {
            background-color: #21222c;
            color: #f8f8f2;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }

          .button-container {
            display: flex;
            align-items: center;
            justify-content: right;
            gap: 10px;
          }

          .modal-button-right {
            display: flex;
            align-items: center;
            justify-content: right;
            gap: 10px;
          }

          .text-edit {
            margin-right: 0.5rem;
          }

          .text-edit-button {
            display: flex;
            align-items: center;
            justify-content: right;
            gap: 10px;
          }

          .shopping-list-container {
            background-color: #282a36; /* Slightly lighter card background */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            box-sizing: border-box;
            max-width: 500px;
          }

          .shopping-list-container h2 {
            margin-bottom: 15px;
            text-align: center;
          }

          .input-container {
            display: flex;
            gap: 10px;
          }

          .input-container textarea {
            flex-grow: 1;
            padding: 8px;
            border: none;
            background-color: #282a36;
            color: #f8f8f2;
            border-radius: 4px;
          }

          .list-container {
            display: flex;
            flex-direction: column;
            padding-left: 0px;
          }

          .list-container li {
            list-style: none;
            margin-bottom: 10px;
            background-color: #44475a;
            padding: 10px;
            border-radius: 4px;
            word-break: break-all;
          }

          .list-container li > div {
            display: flex;
            align-items: center;
            flex-grow: 1;
          }

          .list-container li p {
            margin: 0;
            margin-right: 10px;
          }

          .shopping-list-container button {
            background-color: #bd93f9;
            color: #f8f8f2;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 4px;
          }

          .shopping-list-container button:hover {
            background-color: #ff79c6;
          }

          /* Modal Confirmation */
          .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #282a36;
            padding: 20px;
            border-radius: 8px;
            z-index: 10;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
