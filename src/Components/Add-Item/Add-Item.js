import React from 'react'
import './Add-Item.css'

export default class AddItem extends React.Component {

    state = {
        label: ''
    }

    onInputChange = (e) => {
        this.setState({
            label: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label)
    }

    render() {
        return (
            <form className="addItem"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control add-item-text"
                    placeholder="Text for new item"
                    onChange={this.onInputChange}></input>
                <button type="submit" className="btn btn-primary add-item-button"
                >
                    Submit
                    </button>
            </form>

        )
    }
}

//export default AddItem;

