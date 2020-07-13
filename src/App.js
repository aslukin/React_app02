import React from 'react';
import { FILTER_STATUS_ALL, FILTER_STATUS_ACTIVE, FILTER_STATUS_DONE } from './consts'

import './App.css';
import AppHeader from './Components/App-Header';
import AppFilter from './Components/App-Filter';
import TodoList from './Components/Todo-List';
import AddItem from './Components/Add-Item';


export default class App extends React.Component {

  counter = 100;
  state = {
    todoData: [
      this.createNewItem('item 1'),
      this.createNewItem('Item 2')
    ],
    filterString: '',
    filterStatus: FILTER_STATUS_ALL
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

    if (newText.length > 0) {
      const newItem = this.createNewItem(newText)

      this.setState(({ todoData }) => {
        const newTodoData = [...todoData, newItem]
        return {
          todoData: newTodoData
        }
      })
    }
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

  onFilterStringChange = (newFilterString) => {
    this.setState(() => {
      return {
        filterString: newFilterString
      }
    })
  }

  onFilterAll = () => {
    this.setState(() => {
      return {
        filterStatus: FILTER_STATUS_ALL
      }
    })

  }

  onFilterActive = () => {
    this.setState(() => {
      return {
        filterStatus: FILTER_STATUS_ACTIVE
      }
    })

  }

  onFilterDone = () => {
    this.setState(() => {
      return {
        filterStatus: FILTER_STATUS_DONE
      }
    })
  }

  search(items, filterString, filterStatus) {

    return items.filter((el) => {
      return (el.label.indexOf(filterString) >= 0) &&
        ((filterStatus === FILTER_STATUS_ALL) ||
          ((filterStatus === FILTER_STATUS_ACTIVE) && (!el.done)) ||
          ((filterStatus === FILTER_STATUS_DONE) && (el.done)))
    })
  }


  render() {

    const doneCount = this.state.todoData.filter((el) => el.done).length
    const openCount = this.state.todoData.length - doneCount
    const openImportantCount = this.state.todoData.filter((el) => !el.done && el.important).length

    const visibleItems = this.search(this.state.todoData, this.state.filterString, this.state.filterStatus)

    return (
      <div className="todo-app">
        <AppHeader openCount={openCount}
          doneCount={doneCount}
          openImportantCount={openImportantCount} />

        <AppFilter
          filterString={this.state.filterString}
          filterStatus={this.state.filterStatus}

          onFilterStringChange={this.onFilterStringChange}
          onFilterAll={this.onFilterAll}
          onFilterActive={this.onFilterActive}
          onFilterDone={this.onFilterDone}
        />

        <TodoList todos={visibleItems}
          onItemDelete={this.onItemDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}

