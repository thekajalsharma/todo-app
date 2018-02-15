import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todoList.map(function (listValue) {
                    return <li>{listValue['name']}</li>;
                })}
            </ul>
        );
    }

}
export default Todo;