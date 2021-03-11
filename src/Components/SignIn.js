import React, { Component } from 'react';
import './HomePage.css';

class SignIn extends Component {

    signUp = () => {
        this.props.changeSignState(false);
    }

    validateUser = (email, pwd) => {
        let flag = false;
        let users = JSON.parse(localStorage.getItem('users'));
        for(let i=0;i<users.length;i++) {
            if(users[i].username === email && users[i].password === pwd) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    resetPassword = () => {
        this.props.changeForgetState(true);
    }

    handleLogin = (event) => {

        event.preventDefault();
        let email = event.target.email.value;
        let pwd = event.target.pwd.value;

        if(this.validateUser(email, pwd)) {
            this.props.changeLoginState(true);
        }
        else {
            alert('Invalid email or password!');
        }
    }

    render() {
        return (
            <div className="sign">
                <h2 className="form-heading">Login</h2>
                <form name="LoginForm" id="login-form" className="signform" onSubmit={this.handleLogin}>
                    <label htmlFor="username" className="label-text">Email:</label>
                    <input type="email" name="email" id="email" placeholder="e.g., test@email.com" className="form-input" required/>
                    <label htmlFor="password" className="label-text">Password:</label>
                    <input type="password" name="pwd" id="password" placeholder="e.g., **********" className="form-input" required/>
                    <button type="submit" className="form-btn">Login</button>
                    <div>
                        <button type="button" className="div-btn" onClick={this.resetPassword}>forget Password?</button>
                        <button type="button" className="div-btn" onClick={this.signUp}>Sign Up</button>
                    </div>    
                </form>
            </div>
        );
    }
}

export default SignIn;