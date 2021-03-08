import React, { Component } from 'react';
import './HomePage.css';

class SignIn extends Component {

    signUp = () => {
        this.props.changeSignState(false);
    }

    render() {
        return (
            <div className="sign">
                <h2 className="form-heading">Login</h2>
                <form name="LoginForm" id="login-form" className="form" action="">
                    <label for="username" className="label-text">Email:</label>
                    <input type="text" id="email" placeholder="e.g., test@email.com" className="form-input" required/>
                    <label for="password" className="label-text">Password:</label>
                    <input type="password" id="password" placeholder="e.g., **********" className="form-input" required/>
                    <button type="submit" className="form-btn">Login</button>
                    <div>
                        <button type="button" className="forget-password">forget Password?</button>
                        <button type="button" className="sign-btn" onClick={this.signUp}>Sign Up</button>
                    </div>    
                </form>
            </div>
        );
    }
}

export default SignIn;