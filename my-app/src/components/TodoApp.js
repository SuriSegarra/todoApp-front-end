import React, { Component } from 'react'
import AddTodo from './AddTodo.js';
import request from 'superagent';


export default class TodoApp extends Component {
    state = {todos: [] }
    componentDidMount = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const todosData = await request.get(`https://morning-cliffs-34029.herokuapp.com/api/todos`)
        .set('Authorization', user.token);

    
        this.setState({ todos: todosData.body })
    }
    handleClick = async () => {
        const newTodo = {
            //this is a fake todo por eso esta bien usar math.random
            id: Math.random(),
            task: this.state.todoInput,
            complete: false,
        };
        const user = JSON.parse(localStorage.getItem('user'));

        const newTodos = [...this.state.todos, newTodo];

        this.setState({ todos: newTodos });
        const data = await request.post(`https://morning-cliffs-34029.herokuapp.com/api/todos`, {
            task: this.state.todoInput
        })

        .set('Authotization', user.token);
    }

    handleInput = (e) => { this.setState({ todoInput: e.target.value })};
    render() {

        if(localStorage.getItem('user')) {
    
            return (

                <div>
                    To Do List:
        
                  <AddTodo 
                  todoInput={ this.state.todoInput }
                  handleClick={ this.handleClick }
                  handleInput={ this.handleInput }
                  />
                  {
                      this.style.todos.map((todo) => <p style={{
                          textDecoration: todo.complete ? 'line-through' : 'none'
                      }}
                      onClick={async () => {
                          
                          const newTodos = this.state.todos.slice();
                         
                          const matchingTodo = newTodos.find((thisTodo) => todo.id === thisTodo.id);

                          matchingTodo.complete = !todo.complete
                          const user = JSON.parse(localStorage.getItem('user'));

                          this.setState({ todos:newTodos});

                          const data = await request.put(`https://morning-cliffs-34029.herokuapp.com/api/todos${todo.id}`, matchingTodo)
                          .set('Authorization', user.token);

                      }}
                      
                      key={todo.id}>
                          {todo.task}
                      </p>
                      )
                      
                  }
                </div>
            )
        }
    }
}
