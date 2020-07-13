import React from 'react';
import './App.css';
import AppHeader from './Components/App-Header';
import AppFilter from './Components/App-Filter';
import TodoList from './Components/Todo-List';
import AddItem from './Components/Add-Item';

export default class App extends React.Component {

  counter = 100;
  state = {
    todoData: [
      this.createNewItem('Item 1'),
      this.createNewItem('Item 2'),
      this.createNewItem('Item 3'),
      this.createNewItem('Item 4')
    ]
  }

  createNewItem(newLabel) {
    return {

      label: newLabel,
      important: false,
      done: false,
      id: this.counter++

    }
  }

  onItemAdd = (newText) => {
    const newItem = this.createNewItem(newText)

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem]
      return {
        todoData: newTodoData
      }
    })
  }

  onItemDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1)
      const newTodoData = [...before, ...after]

      return {
        todoData: newTodoData
      }
    })
  }

  onToggleDone = (id) => {
    const newTodoData = [...this.state.todoData]
    const idx = newTodoData.findIndex((el) => el.id === id);
    if (idx >= 0) {
      newTodoData[idx].done = !newTodoData[idx].done
    }
    this.setState(({ todoData }) => {
      return {
        todoData: newTodoData
      }
    })
  }

  onToggleImportant = (id) => {
    const newTodoData = [...this.state.todoData]
    const idx = newTodoData.findIndex((el) => el.id === id);
    if (idx >= 0) {
      newTodoData[idx].important = !newTodoData[idx].important
    }
    this.setState(({ todoData }) => {
      return {
        todoData: newTodoData
      }
    })
  }

  render() {

    const doneCount = this.state.todoData.filter((el) => el.done).length
    const openCount = this.state.todoData.length - doneCount
    const openImportantCount = this.state.todoData.filter((el) => !el.done && el.important).length

    return (
      <div className="todo-app">
        <AppHeader openCount={openCount}
          doneCount={doneCount}
          openImportantCount={openImportantCount} />

        <AppFilter />
        <TodoList todos={this.state.todoData}
          onItemDelete={this.onItemDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}

