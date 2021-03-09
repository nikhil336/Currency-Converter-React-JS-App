import React, { Component } from 'react';
import './HomePage.css';

class ResetPage extends Component {

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

    matchAnswer = (users,ques,ans) => {
        let flag = false;
        for(let i=0;i<users.length;i++) {
            if(users[i].ques === ques && users[i].answer === ans) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    updatePassword = (users, email, pwd) => {
        for(let i=0;i<users.length;i++) {
            if(users[i].username === email) {
                users[i].password = pwd;
                break;
            }
        }
        return users;
    }

    resetPassword = (event) => {

        let email = event.target.email.value;
        let ques = event.target.ques.value;
        let ans = event.target.ans.value;
        let npwd = event.target.npwd.value;
        let rpwd = event.target.rpwd.value;
        let users = JSON.parse(localStorage.getItem('users'));

        if(!this.isUserExist(users, email)) {
            alert('User doesn\'t exists enter a valid email!');
            return;
        }

        if(!this.matchAnswer(users, ques, ans)) {
            alert('Answer does\'t match please try again');
            return;
        }

        if(npwd.length < 10) {
            alert('Password should atleast contains 10 characters!');
            return;
        }

        if(npwd !== rpwd) {
            alert('Passwords doesn\'t match!');
            return;
        }

        users = this.updatePassword(users, email, npwd);
        localStorage.setItem('users',JSON.stringify(users));

    }

    render() {
        return(
            <div className="sign">
                <h2 className="form-heading">Reset Password</h2>
                <form name="resetform" id="login-form" className="signform" onSubmit={this.resetPassword}>
                    <label htmlFor="username" className="label-text">Email:</label>
                    <input type="email" name="email" id="email" placeholder="e.g., test@email.com" className="form-input" required/>
                    <label htmlFor="security" className="label-text">Security Question:</label>
                    <select name="ques" id="ques">
                        <option value="pet">What is the name of your pet?</option>
                        <option value="teacher">What is the name of your favourite teacher?</option>
                        <option value="sport">Which sport do you like?</option>
                    </select>
                    <label htmlFor="answer" className="label-text">Answer:</label>
                    <input type="text" id="answer" name="ans" placeholder="e.g., abc" className="form-input" required/>
                    <label htmlFor="newpassword" className="label-text">New password:</label>
                    <input type="password" name="npwd" id="password" placeholder="e.g., **********" className="form-input" required/>
                    <label htmlFor="repassword" className="label-text">Re-enter password:</label>
                    <input type="password" name="rpwd" id="password" placeholder="e.g., **********" className="form-input" required/>
                    <button type="submit" className="form-btn">Submit</button>
                    <button type="button" className="login-btn" onClick={this.signIn}>Login</button>  
                </form>
            </div>
        );
    }
}

export default ResetPage;