import React, { useState } from "react";

const ListForm = ({ addItem }) => {
    const [name, setName] = useState('')
    const [err, setError] = useState(false)

    const handleChangeName = (event) => {

        setName(event.target.value)
    } 

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name === '') {
            setError(true)
        } else {
            setError(false)
        }

        addItem(name)
        setName('')
    }

    return (
        <div>
            <form onSubmit={(event) => {
                handleSubmit(event)
            }} >
                <section>
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            value={name}
                            name="name"
                            className="input"
                            onChange={(event) => {
                                handleChangeName(event)
                            }}
                        />
                        {err && <p className="error">Can't empty!!!</p>}
                    </div>
                    <button type="submit" className="add">Add City</button>
                </section>
            </form>
        </div>
    )
}

export default ListForm