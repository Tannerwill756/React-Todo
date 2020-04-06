import React from 'react';
import TodoForm from './components/TodoForm';

const myToDo = [
  {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor () {
    super();
    this.state = {
      myToDo
    }
  }
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
