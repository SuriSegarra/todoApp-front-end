import React, { Component } from 'react'
import TodoApp from './components/TodoApp.js';
import TodoAppLogin from './components/TodoAppLogin.js';
import './App.css';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
  
} from 'react-router-dom';
// import Login from './Login.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
        Hello
        <Link to='/todos'>To Do List:</Link>

        <Switch>
          <Route path='/todos' render={() => 
             isLoggedIn()
              ? <TodoApp />
              : <Redirect to='/login' />
        }/>
        <Route path='/login' component={TodoAppLogin} />
        </Switch>
      </div>
      </Router>
    );
  }
}



