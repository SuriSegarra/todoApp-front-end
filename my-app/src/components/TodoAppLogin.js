import React, { Component } from 'react'
import request from 'superagent';

export default class TodoAppLogin extends Component {
    state = {
        usernameSingIn: '',
        usernameSignUp: '',
        passwordSingIn: '',
        passwordSignUp: '',
    }

    handleSingIn = async () => {
        const signIn = await request.post(`http://localhost:${process.env.REACT_APP_BACK_END_PORT}/api/auth/signin`, {
            email: this.state.usernameSingIn,
            password: this.state.passwordSingIn,
        } )
        localStorage.setItem('user', JSON.stringify(signIn.body));
    }

    handleSignUp = async () => {
        const signUp = await request.post(`http://localhost:${process.env.REACT_APP_BACK_END_PORT}/api/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        })
        localStorage.setItem('user', JSON.stringify(signUp.body));
    }

    render() {
        return (
            <div>
                <input value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value })} /> 
                <input value={this.state.passwordSignUp} onChange={(e) => this.setState({passwordSignUp: e.target.value})} />

                <button onClick={ this.handleSignUp }> Sign Up </button>

                <hr></hr>

                <input value={ this.state.usernameSingIn} onChange={(e) => this.setState ({usernameSingIn: e.target.value})} />
                <input value={ this.state.passwordSingIn} onChange={(e) => this.setState({passwordSingIn: e.target.value})} />

                <button onClick={this.handleSingIn}> Sign In</button>

            </div>
        )
    }
}
