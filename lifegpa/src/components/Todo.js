import React, { Component } from 'react'
import './Todo.css';

// function Todo(props) {
//     let bananaNames = "item";
//     if (props.todo.completed) {
//         bananaNames += " purchased";
//     }

//     function updateCompletedHere() {
//         props.toggleComplete(props.todo.id)
//     }

//     return (
//         <div className = {bananaNames} onClick={updateCompletedHere} >
//             {props.todo.task}
//         </div>
//     );
// }

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          inputField: '',
    
          todo: this.props.todos
    
        };
    }

    // putTodo = quote => {
    //     axios
    //       .put("https://life-gpa-be.herokuapp.com/api/habits", this.state.inputField)
    //       .then(response => {
    //         this.setState({
    //           putSuccessTodo: response.data.successTodo,
    //           putError: ""
    //         });
    //       })
    //       .catch(err => {
    //         this.setState({
    //           putSuccessTodo: "",
    //           putError: err.response.data.Error
    //         });
    //       });
    //   };

    updateCompletedHere = () => {
        this.props.toggleComplete(this.props.todo.id)
    }

    render() {
        let bananaNames = "item";
        if (this.props.todo.completed) {
        bananaNames += " purchased";
        }
        return (
            <div className = {bananaNames} onClick={this.updateCompletedHere} >
                {this.props.todo.task}
                <input />
            </div>
        )
    }
}

export default Todo;