import React from 'react'
import './Todo-List-Item.css'

const TodoListItem = ({label, important = false, id}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <span className = "todo-list-item" style = {style}>            

            {label}
            
        </span>

    )
}
export default TodoListItem