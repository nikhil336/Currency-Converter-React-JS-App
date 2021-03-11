import React, { Component } from 'react';
import './HomePage.css';
import './ConvertorPage.css';

class ConvertorPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src : 1,
            target : 0.014,
            srclist : "INR",
            resultlist : "USD"
        };
        this.rates = {
            "USD" : 1.1894, 
            "JPY" : 129.50, 
            "BGN" : 1.9558, 
            "CZK" : 26.288,
            "DKK" : 7.4366,
            "GBP" : 0.85704,
            "HUF" : 366.83,
            "PLN" : 4.5843,
            "RON" : 4.8870,
            "SEK" : 10.1360,
            "CHF" : 1.1071,
            "ISK" : 151.75,
            "NOK" : 10.0838,
            "HRK" : 7.5913,
            "RUB" : 87.9711,
            "TRY" : 9.1023,
            "AUD" : 1.5440,
            "BRL" : 6.9553,
            "CAD" : 1.4990,
            "CNY" : 7.7478,
            "HKD" : 9.2325,
            "IDR" : 17140.98,
            "ILS" : 3.9602,
            "INR" : 86.8270,
            "KRW" : 1353.91,
            "MXN" : 25.3635,
            "MYR" : 4.8974,
            "NZD" : 1.6607,
            "PHP" : 57.724,
            "SGD" : 1.6011,
            "THB" : 36.597,
            "ZAR" : 18.3128,
            "EURO" : 1
        };
    }

    logOut = () => {
        this.props.changeSignState(true);
    }

    calculate = (event) => {
        let srcValue = (event.target.value).toUpperCase();
        let ans = (this.state.src * this.rates[this.state.resultlist])/this.rates[srcValue];
        this.setState( {target : ans, srclist : srcValue} );
    }

    changeTargetValue = (event) => {
        let ans = (event.target.value * this.rates[this.state.resultlist])/this.rates[this.state.srclist];
        this.setState({ src : event.target.value, target : ans });
    }

    changeResultValue = (event) => {
        this.setState({ result : event.target.value });
    }

    setResult = (event) => {
        let targetValue = (event.target.value).toUpperCase();
        let ans = (this.state.src * this.rates[targetValue])/this.rates[this.state.srclist];
        this.setState({ resultlist : targetValue, target : ans });
    }

    render() {
        return (
            <div className="convertor">
                <div className="navbar">
                    <button type="button" className="logout-btn" onClick={this.logOut}>Log out</button>
                </div>
                <div className="convertor-box">
                    <div className="disc">
                        <p className="curr-text">1 Indian Rupee equals</p>
                        <p className="curr-text">0.014 United States Dollar</p>
                    </div>    
                    <div className="currency">
                        <div className="selection">
                            <input id="target" type="number" className="num-btn" value={this.state.src} name="targetvalue" onChange={this.changeTargetValue}/>
                            <select name="target" id="target-value" className="slt" onChange={this.calculate}>
                                <option value="inr">Indian Rupee (INR)</option>
                                <option value="usd">United States Dollar (USD)</option>
                                <option value="jpy">Japanese Yen (JPY)</option>
                                <option value="bgn">Bulgarian Lev (BGN)</option>
                                <option value="czk">Czech Koruna (CZK)</option>
                                <option value="dkk">Danish Krone (DKK)</option>
                                <option value="gbp">Pound sterling (GBP)</option>
                                <option value="huf">Hungarian Forint (HUF)</option>
                                <option value="pln">Poland złoty (PLN)</option>
                                <option value="ron">Romanian Leu (RON)</option>
                                <option value="sek">Swedish Krona (SEK)</option>
                                <option value="chf">Swiss Franc (CHF)</option>
                                <option value="isk">Icelandic Króna (ISK)</option>
                                <option value="nok">Norwegian Krone (NOK)</option>
                                <option value="hrk">Croatian Kuna (HRK)</option>
                                <option value="rub">Russian Ruble (RUB)</option>
                                <option value="try">Turkish lira (TRY)</option>
                                <option value="aud">Australian Dollar (AUD)</option>
                                <option value="brl">Brazilian (BRL)</option>
                                <option value="cad">Canadian Dollar (CAD)</option>
                                <option value="cny">Chinese Yuan (CNY)</option>
                                <option value="hkd">Hong Kong Dollar (HKD)</option>
                                <option value="idr">Indonesian Rupiah (IDR)</option>
                                <option value="ils">Israeli New Shekel (ILS)</option>
                                <option value="krw">South Korean won (KRW)</option>
                                <option value="mxn">Mexican Peso (MXN)</option>
                                <option value="myr">Malaysian Ringgit (MYR)</option>
                                <option value="nzd">New Zealand Dollar (NZD)</option>
                                <option value="php">Philippine peso (PHP)</option>
                                <option value="sgd">Singapore Dollar (SGD)</option>
                                <option value="thb">Thai Baht (THB)</option>
                                <option value="zar">South African Rand (ZAR)</option>
                                <option value="euro">Euro (EURO)</option>
                            </select>
                        </div>
                        <div className="selection">
                            <input id="result" type="number" className="num-btn" value={this.state.target} name="resultvalue" onChange={this.changeResultValue} readOnly/>
                            <select name="result" id="result-value" className="slt" onChange={this.setResult}>
                                <option value="usd">United States Dollar (USD)</option>
                                <option value="jpy">Japanese Yen (JPY)</option>
                                <option value="bgn">Bulgarian Lev (BGN)</option>
                                <option value="czk">Czech Koruna (CZK)</option>
                                <option value="dkk">Danish Krone (DKK)</option>
                                <option value="gbp">Pound sterling (GBP)</option>
                                <option value="huf">Hungarian Forint (HUF)</option>
                                <option value="pln">Poland złoty (PLN)</option>
                                <option value="ron">Romanian Leu (RON)</option>
                                <option value="sek">Swedish Krona (SEK)</option>
                                <option value="chf">Swiss Franc (CHF)</option>
                                <option value="isk">Icelandic Króna (ISK)</option>
                                <option value="nok">Norwegian Krone (NOK)</option>
                                <option value="hrk">Croatian Kuna (HRK)</option>
                                <option value="rub">Russian Ruble (RUB)</option>
                                <option value="try">Turkish lira (TRY)</option>
                                <option value="aud">Australian Dollar (AUD)</option>
                                <option value="brl">Brazilian (BRL)</option>
                                <option value="cad">Canadian Dollar (CAD)</option>
                                <option value="cny">Chinese Yuan (CNY)</option>
                                <option value="hkd">Hong Kong Dollar (HKD)</option>
                                <option value="idr">Indonesian Rupiah (IDR)</option>
                                <option value="ils">Israeli New Shekel (ILS)</option>
                                <option value="inr">Indian Rupee (INR)</option>
                                <option value="krw">South Korean won (KRW)</option>
                                <option value="mxn">Mexican Peso (MXN)</option>
                                <option value="myr">Malaysian Ringgit (MYR)</option>
                                <option value="nzd">New Zealand Dollar (NZD)</option>
                                <option value="php">Philippine peso (PHP)</option>
                                <option value="sgd">Singapore Dollar (SGD)</option>
                                <option value="thb">Thai Baht (THB)</option>
                                <option value="zar">South African Rand (ZAR)</option>
                                <option value="euro">Euro (EURO)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConvertorPage;