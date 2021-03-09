import  React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPage from './ResetPage';
import ConvertorPage from './ConvertorPage';
import './HomePage.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signinFlag : true,
            loginFlag : false,
            forgetFlag : false
        };
    }

    setSignState = (flag) => {
        this.setState({signinFlag : flag, forgetFlag : false, loginFlag: false});
    }

    setForgetState = (flag) => {
        this.setState({forgetFlag : flag, loginFlag: false});
    }

    setLoginState = (flag) => {
        this.setState({loginFlag : flag});
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <h1 className="heading">Currency Convertor</h1>
                </div>
                { !this.state.loginFlag?
                    !this.state.forgetFlag?
                        <div className="container">
                            <div className="para">
                                <p>some text</p>
                            </div>
                            { this.state.signinFlag?
                                <SignIn changeSignState={this.setSignState} changeLoginState={this.setLoginState} changeForgetState={this.setForgetState}/>
                                :
                                <SignUp changeSignState={this.setSignState}/>
                            }
                        </div>
                        :
                        <ResetPage changeSignState={this.setSignState}/>
                    :
                    <ConvertorPage changeSignState={this.setSignState}/>
                }
            </div>
        );
    }
}

export default HomePage;