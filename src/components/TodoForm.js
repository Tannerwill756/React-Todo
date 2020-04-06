import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item = ''
        }
    }

    submitItem= event => {
        event.preventDefault();
        this.setState({ item = '' });
        
    }

    render(){
        return(
            <form onSubmit={this.submitItem}>
                <input type="text" name="item"/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;