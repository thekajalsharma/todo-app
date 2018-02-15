import React from 'react';

class Todo extends React.Component {

    render() {
        // let op = `<ul>`
        // op += this.props.todoList.map((i) => {
        //     return `<li>${i.name}</li>`
        // }).join(' ')
        // op += `</ul>`
        // return (<div>{op}</div>);
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