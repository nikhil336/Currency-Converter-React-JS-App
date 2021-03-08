import React, { Component } from 'react';
import './HomePage.css';

class SignUp extends Component {

    signIn = () => {
        this.props.changeSignState(true);
    }

    render() {
        return (
            <div className="sign">
                    <h2 className="form-heading">Sign Up</h2>
                    <form name="SignUpForm" id="signup-form" className="form" method="post">
                        <label for="firstname" className="label-text">First Name:</label>
                        <input type="text" id="firstname" placeholder="e.g., Abc" className="form-input" required/>
                        <label for="lastname" className="label-text">Last Name:</label>
                        <input type="text" id="lastname" placeholder="e.g., Def" className="form-input" required/>
                        <label for="mno" className="label-text">Mobile No:</label>
                        <input type="number" id="number" placeholder="e.g., 9876543210" className="form-input" required/>
                        <label for="username" className="label-text">Email:</label>
                        <input type="text" id="email" placeholder="e.g., test@email.com" className="form-input" required/>
                        <label for="password" className="label-text">Password:</label>
                        <input type="password" id="password" placeholder="e.g., **********" className="form-input" required/>
                        <label for="repassword" className="label-text">Re-enter Password:</label>
                        <input type="password" id="repassword" placeholder="e.g., **********" className="form-input" required/>
                        <button type="submit" className="form-btn">Sign Up</button>
                        <button type="button" className="sign-btn" onClick={this.signIn}>Login</button>
                    </form>
                </div>
        );
    }
}

export default SignUp;