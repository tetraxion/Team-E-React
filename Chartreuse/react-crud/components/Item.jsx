import React from "react";
import UpdateModal from "./UpdateModal";

const Item = ({ item, deleteItem, updateItem, toggleModal }) => {
    return (
        <div className="item">
            <p>{item.name}</p>
            <div>
                <button className="delete" onClick={() => {deleteItem(item.id)}}>delete</button>
                <button 
                    className="update" 
                    onClick={() => {toggleModal(item.id, true)}}
                >update</button>
                <UpdateModal 
                    item={item} 
                    toggleModal={toggleModal}
                    updateItem={updateItem}
                />
            </div>
        </div>
    )
}

export default Item