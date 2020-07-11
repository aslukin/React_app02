import React from 'react';
import './App.css';
import AppHeader from './Components/App-Header';
import AppFilter from './Components/App-Filter';
import TodoList from './Components/Todo-List';
import AddItem from './Components/Add-Item';

function App() {
  
  const todoData = [
    {label: 'Item 1 new', important: false, id: 1},
    {label: 'Item 2', important: true, id: 2},
    {label: 'Item 3', important: false, id: 3}
  ]
  
  
  
  return (
    <div className="todo-app">
      <AppHeader />
      <AppFilter />
      <TodoList todos={todoData}/>
      <AddItem />

    </div>
  );
}

export default App;
