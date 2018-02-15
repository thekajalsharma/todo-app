import React from 'react';
import Todo from './Todo'
class AddTodoForm extends React.Component {

    createTodo(e) {
        e.preventDefault();
        // console.log("Gonna add todo");
        const todo = {
            name: this.todo.value
        }
        this.props.addTodo(todo);
        this.form.reset();
    }

    render() {
        return (
            <div>
                <form ref={(input) => this.form = input} onSubmit={(event) => this.createTodo(event)} >
                    <input ref={(input) => this.todo = input} type="text" placeholder="Add Todo" />
                    <button type="submit">+Add</button>
                </form>
                <Todo todoList={this.props.todoList} />
            </div>
        );
    }

}

export default AddTodoForm;