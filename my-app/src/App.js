import React, { Component } from 'react'
import TodoApp from './components/TodoApp.js';
import TodoAppLogin from './components/TodoAppLogin.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  
} from 'react-router-dom';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        
       
      <Router>
        <Route path='/' render={() => 
        isLoggedIn()
          ? <TodoApp />
          : <Redirect to='login' />
        }/>
        <Route path='/login' component={TodoAppLogin} />
      </Router>
      </div>
    );
  }
}



