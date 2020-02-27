import React, { Component } from 'react'

import request from 'superagent';
export default class TodoApp extends Component {
    state = {todos: [] }
    componentDidMount = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const todos = await request.get()
    }
    render() {
        return (
            <div>
              
            </div>
        )
    }
}
