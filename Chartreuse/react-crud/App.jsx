import { useState } from 'react'
import ListForm from './components/ListForm'
import List from './components/List'
import './App.css'

function App() {
  const [ list, setList ] = useState([])

  const addItem = (itemName) => {
    if (itemName === '') {
      return ''
    }

    const newItem = {
      id: list.length + 1,
      name: itemName,
      edit: false
    }

    const pushItem = list.concat(newItem)
    setList(pushItem)
  }

  const deleteItem = (itemId) => {
    const deleteItem = list.filter((item) => {
      return item.id !== itemId
    })

    setList(deleteItem)
  }

  const updateItem = (itemId, itemName) => {
    if (itemName === '') {
      return ''
    }

    const updateItem = list.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          name: itemName,
          edit: false
        }
      }
      return item
    })

    setList(updateItem)
  }

  const toggleModal = (itemId, isEdit) => {
    const showItem = list.map((item) => {
      if (item.id === itemId) {
        item.edit = isEdit
      }
      return item
    })

    setList(showItem)
  }

  return (
    <div className="app">
      <ListForm addItem={addItem} />

      <h1>List of Capital Cities</h1>
      <List 
        list={list} 
        deleteItem={deleteItem}
        updateItem={updateItem}
        // showModal={showModal}
        // closeModal={closeModal}
        toggleModal={toggleModal}
      />
    </div>
  )
}

export default App
