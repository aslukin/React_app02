import React from 'react'
import './Todo-List-Item.css'

const TodoListItem = ({ label, important = false, id }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <div className="todo-list-item">
            <div className="todo-list-item-label" style={style}>
                {label}
            </div>
            <div>
                <button type="button" className="btn btn-outline-warning todo-list-item-button">
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-danger todo-list-item-button">
                    {/* <i className="fa fa-archive"></i> */}
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
export default TodoListItem