import React, { Component } from 'react';
import './HomePage.css';

class SignUp extends Component {

    signIn = () => {
        this.props.changeSignState(true);
    }

    isUserExist = (users,email) => {
        let flag = false;
        for(let i=0;i<users.length;i++) {
            if(users[i].username === email) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    checkName = (name) => {
        let flag = false;
        for(let i=0;i<name.length;i++) {
            if(!(name.charAt(i) >= 'a' && name.charAt(i) <='z') && !(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z')) {
                flag = true;
                break;
            }
        }
        return !flag;
    }

    handleSignUp = (event) => {
        event.preventDefault();

        let user = event.target.email.value;
        let pwd = event.target.pwd.value;
        let repwd = event.target.repwd.value;
        let fname = event.target.fname.value;
        let lname = event.target.lname.value;
        let mno = event.target.mbno.value;

        if(!this.checkName(fname)) {
            alert('First name should not contain any numbers!');
            return;
        }

        if(!this.checkName(lname)) {
            alert('Last name should not contain any numbers!');
            return;
        }

        if(pwd.length < 10) {
            alert('Password should atleast contains 10 characters!');
            return;
        }

        if(repwd !== pwd) {
            alert('passwords doesn\'t match');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users'));

        if(users === null) {
            localStorage.setItem('users', JSON.stringify([ { "username" : user, "password" : pwd, "first name" : fname, "last name" : lname, "mobile no" : mno } ]));
        }
        else {
            if(this.isUserExist(users,user)) {
                alert('User already exits!');
                return;
            }
            else {
                users.push({ "username" : user, "password" : pwd, "first name" : fname, "last name" : lname, "mobile no" : mno });
                localStorage.setItem('users', JSON.stringify(users));
            }
        }

        alert('Sign up successful!');
        this.props.changeSignState(true);

    }

    render() {
        return (
            <div className="sign">
                <h2 className="form-heading">Sign Up</h2>
                <form name="SignUpForm" id="signup-form" onSubmit={this.handleSignUp} className="signform">
                    <label htmlFor="firstname" className="label-text">First Name:</label>
                    <input type="text" name="fname" id="firstname" placeholder="e.g., Abc" className="form-input" required/>
                    <label htmlFor="lastname" className="label-text">Last Name:</label>
                    <input type="text" name="lname" id="lastname" placeholder="e.g., Def" className="form-input" required/>
                    <label htmlFor="mno" className="label-text">Mobile No:</label>
                    <input type="text" name="mbno" id="number" placeholder="e.g., 9876543210" pattern="[7-9]{1}[0-9]{9}" className="form-input" required/>
                    <label htmlFor="username" className="label-text">Email:</label>
                    <input type="email" name="email" id="email" placeholder="e.g., test@email.com" className="form-input" required/>
                    <label htmlFor="password" className="label-text">Password:</label>
                    <input type="password" name="pwd" id="password" placeholder="e.g., **********" className="form-input" required/>
                    <label htmlFor="repassword" className="label-text">Re-enter Password:</label>
                    <input type="password" name="repwd" id="repassword" placeholder="e.g., **********" className="form-input" required/>
                    <button type="submit" className="form-btn">Sign Up</button>
                    <button type="button" className="sign-btn" onClick={this.signIn}>Login</button>
                </form>
            </div>
        );
    }
}

export default SignUp;