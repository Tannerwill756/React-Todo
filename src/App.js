import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
import './App.css';

const myList = [
  {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      myList
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      myList: [...this.state.myList, newItem]
    })
  }

  toggleTask = itemId => {
    console.log(itemId);

    this.setState({
      myList: this.state.myList.map(item => {
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearTask = event => {
    event.preventDefault();
    this.setState({
      myList: this.state.myList.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="appCard">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList myList={this.state.myList} toggleTask={this.toggleTask} clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;
