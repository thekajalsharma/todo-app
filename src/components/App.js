import React from 'react';
import AddTodoForm from './AddTodoForm';

class App extends React.Component {
    constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            // todoList:[{name:"Apple"}]
            todoList: []
        };

    }

    addTodo(todo) {
        console.log(todo);
        const todoList = [...this.state.todoList];
        // console.log('^^^^^^^^^^^^^^^^^^^^^^^')
        // console.log(todoList);
        // console.log('^^^^^^^^^^^^^^^^^^^^^^^')
        // const timestamp = Date.now();
        todoList.push(todo);
        console.log(todoList);
        todoList.map((i) => console.log(JSON.stringify(i)))
        this.setState({ todoList: todoList });
    }

    render() {
        return (
            <AddTodoForm addTodo={this.addTodo} todoList={this.state.todoList} />
        );
    }
}

export default App;