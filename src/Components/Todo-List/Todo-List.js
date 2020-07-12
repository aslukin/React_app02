import React from 'react'
import TodoListItem from './../Todo-List-Item'
import './Todo-List.css';

const TodoList = ({ todos , onItemDelete, onToggleDone, onToggleImportant }) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    label={item.label}
                    done={item.done}
                    important={item.important}
                    id={item.id} 
                    onItemDelete = {() => onItemDelete(item.id)}
                    onToggleDone = {() => onToggleDone(item.id)}
                    onToggleImportant = {() => onToggleImportant(item.id)}
                    />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;