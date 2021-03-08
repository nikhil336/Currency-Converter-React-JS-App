import  React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './HomePage.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signinFlag: true
        };
    }

    setSignState = (flag) => {
        this.setState({signinFlag:flag});
    }

    render() {
        return (
            <div className="main">
            <div className="header">
                <h1 className="heading">Currency Convertor</h1>
            </div>
            <div className="container">
                <div className="para">
                    <p>some text</p>
                </div>
                { this.state.signinFlag?
                    <SignIn changeSignState={this.setSignState}/>
                    :
                    <SignUp changeSignState={this.setSignState}/>
                }
            </div>    
        </div>
        );
    }
}

export default HomePage;