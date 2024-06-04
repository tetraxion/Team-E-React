import React, { useState } from "react";

const UpdateModal = ({ item, toggleModal, updateItem }) => {
    const [name, setName] = useState(item.name)
    const [id] = useState(item.id)
    const [err, setError] = useState(false)

    const showModal = () => {
        if (item.edit === true) {
            return {display: 'block'}
        } else {
            return {display: 'none'}
        }
    }

    const handleUpdateName = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name === '') {
            setError(true)
        } else {
            setError(false)
        }

        updateItem(id, name)
    }

    return (
        <div className="modal" style={showModal()}>
            <div className="modal-content">
                <button 
                    className="close" 
                    onClick={() => {toggleModal(item.id, false)}}
                >&times;</button>
                <form onSubmit={(event) => {
                    handleSubmit(event)
                }}>
                    <section>
                        <div className="input-wrapper">
                            <input 
                                type="text" 
                                value={name}
                                onChange={(event) => {handleUpdateName(event)}}
                            />
                            {err && <p className="error">Can't empty!!!</p>}
                        </div>
                        <button type="submit">Change</button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default UpdateModal