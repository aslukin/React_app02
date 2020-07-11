import React from 'react';
import './App.css';
import AppHeader from './Components/App-Header';
import AppFilter from './Components/App-Filter';
import TodoList from './Components/Todo-List';
import AddItem from './Components/Add-Item';

function App() {
  return (
    <div >
      <AppHeader />
      <AppFilter />
      <TodoList />
      <AddItem />

    </div>
  );
}

export default App;
