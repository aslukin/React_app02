import React from 'react'
import './Add-Item.css'

export default class AddItem extends React.Component {

    render() {
        return (
            <div className="addItem">
                <input type="test" className="form-control add-item-text" placeholder="Text for new item"></input>
                <button type="submit" className="btn btn-primary add-item-button"
                    onClick={()=>{ this.props.onItemAdd(`test`)}}>
                    Submit
                    </button>
            </div>

        )
    }
}

//export default AddItem;

