import { useState } from "react";
import Item from "./Item";

const List = ({ list, deleteItem, updateItem, toggleModal }) => {

    return (
        <div className="list">
            {list.map((item) => {
                return (
                    <Item 
                        item={item}
                        deleteItem={deleteItem} 
                        updateItem={updateItem}
                        toggleModal={toggleModal}
                    />
                )
            })}
        </div>
    )
}

export default List