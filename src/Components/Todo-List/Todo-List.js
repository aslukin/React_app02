import React from 'react'
import TodoListItem from './../Todo-List-Item'
import './Todo-List.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    label={item.label}
                    important={item.important}
                    id={item.id} />
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