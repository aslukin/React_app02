import React from 'react'
import './Add-Item.css'

const AddItem = () => {
    return(
        <div className="addItem">
            <input type="test" className="form-control add-item-text" placeholder = "Text for new item"></input>
            <button type="submit" className="btn btn-primary add-item-button">Submit</button>
        </div>

    )
}

export default AddItem;

