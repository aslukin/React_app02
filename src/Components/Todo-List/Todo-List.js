import React from 'react'
import TodoListItem from './../Todo-List-Item'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id}>
                <TodoListItem
                    label={item.label}
                    important={item.important}
                    id={item.id} />
            </li>
        )
    })
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;