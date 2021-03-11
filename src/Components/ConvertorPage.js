import React, { Component } from 'react';
import './ConvertorPage.css';

class ConvertorPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src : 1,
            target : 0.014,
            srclist : "INR",
            resultlist : "USD",
            srctext : "1 Indian Rupee equals",
            tartext : "0.014 United States Dollar"
        };
        this.rates = {
            "USD" : [1.1894, "United States Dollar"], 
            "JPY" : [129.50, "Japanese Yen"], 
            "BGN" : [1.9558, "Bulgarian Lev"], 
            "CZK" : [26.288, "Czech Koruna"],
            "DKK" : [7.4366, "Danish Krone"],
            "GBP" : [0.85704, "Pound sterling"],
            "HUF" : [366.83, "Hungarian Forint"],
            "PLN" : [4.5843, "Poland złoty"],
            "RON" : [4.8870, "Romanian Leu"],
            "SEK" : [10.1360, "Swedish Krona"],
            "CHF" : [1.1071, "Swiss Franc"],
            "ISK" : [151.75, "Icelandic Króna"],
            "NOK" : [10.0838, "Norwegian Krone"],
            "HRK" : [7.5913, "Croatian Kuna"],
            "RUB" : [87.9711, "Russian Ruble"],
            "TRY" : [9.1023, "Turkish lira"],
            "AUD" : [1.5440, "Australian Dollar"],
            "BRL" : [6.9553, "Brazilian Real"],
            "CAD" : [1.4990, "Canadian Dollar"],
            "CNY" : [7.7478, "Chinese Yuan"],
            "HKD" : [9.2325, "Hong Kong Dollar"],
            "IDR" : [17140.98, "Indonesian Rupiah"],
            "ILS" : [3.9602, "Israeli New Shekel"],
            "INR" : [86.8270, "Indian Rupee"],
            "KRW" : [1353.91, "South Korean won"],
            "MXN" : [25.3635, "Mexican Peso"],
            "MYR" : [4.8974, "Malaysian Ringgit"],
            "NZD" : [1.6607, "New Zealand Dollar"],
            "PHP" : [57.724, "Philippine peso"],
            "SGD" : [1.6011, "Singapore Dollar"],
            "THB" : [36.597, "Thai Baht"],
            "ZAR" : [18.3128, "South African Rand"],
            "EUR" : [1, "Euro"]
        };
    }

    logOut = () => {
        this.props.changeSignState(true);
    }

    calculate = (event) => {
        let srcValue = (event.target.value).toUpperCase();
        let ans = (this.state.src * this.rates[this.state.resultlist][0])/this.rates[srcValue][0];
        this.setState( {target : ans, srclist : srcValue, srctext : ("1 "+this.rates[srcValue][1]+" equals"), tartext : (""+(ans/this.state.src)+" "+this.rates[this.state.resultlist][1])} );
    }

    changeTargetValue = (event) => {
        let ans = (event.target.value * this.rates[this.state.resultlist][0])/this.rates[this.state.srclist][0];
        this.setState({ src : event.target.value, target : ans });
    }

    changeResultValue = (event) => {
        let ans = (event.target.value * this.rates[this.state.srclist][0])/this.rates[this.state.resultlist][0];
        this.setState({ target : event.target.value, src : ans });
    }

    setResult = (event) => {
        let targetValue = (event.target.value).toUpperCase();
        let ans = (this.state.src * this.rates[targetValue][0])/this.rates[this.state.srclist][0];
        this.setState({ resultlist : targetValue, target : ans , srctext : ("1 "+this.rates[this.state.srclist][1]+" equals"), tartext : (""+(ans/this.state.src)+" "+this.rates[targetValue][1]) });
    }

    render() {
        return (
            <div className="convertor">
                <div className="navbar">
                    <button type="button" className="div-btn" onClick={this.logOut}>Log out</button>
                </div>
                <div className="convertor-box">
                    <div className="disc">
                        <p className="curr-text">{this.state.srctext}</p>
                        <p className="curr-text" id="resulttxt">{this.state.tartext}</p>
                    </div>    
                    <div className="currency">
                        <div className="selection">
                            <input id="src" type="number" className="form-input" value={this.state.src} name="targetvalue" onChange={this.changeTargetValue}/>
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
                                <option value="euro">Euro (EUR)</option>
                            </select>
                        </div>
                        <div className="selection">
                            <input id="result" type="number" className="form-input" value={this.state.target} name="resultvalue" onChange={this.changeResultValue}/>
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
                                <option value="euro">Euro (EUR)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConvertorPage;