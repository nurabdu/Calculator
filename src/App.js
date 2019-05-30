import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    firstVal: '',
    secondVal: '',
    dot: false,
    mathOp: false,
    mathOpSign: '',
    result: '0',
    myName: 'd33',
  }
  clickHandle = (val) => {
    this.state.mathOp ?
    this.setState({
      dot: false,
      secondVal: this.state.secondVal + val
    })
      :
      this.setState({
        firstVal: this.state.firstVal + val
      })
    
  }

  calcSign = (val) => {
    this.setState({
      mathOp: true,
    })

    this.setState({
      mathOpSign: val
    })
  }

  calculate = () => {
      let { firstVal, secondVal, mathOpSign, result } = this.state;
      let op = this.state.mathOpSign;
      let first = parseFloat(firstVal);
      let second = parseFloat(secondVal);
      if(op === '+') {
        this.setState({
          result: first + second
        })
      }
      if(op === '-') {
        this.setState({
          result: first - second
        })
      }
      if(op === '*') {
        this.setState({
          result: first * second
        })
      }
      if(op === '/') {
        this.setState({
          result: first / second
        })
      }
      if(op === '%') {
        this.setState({
          result: first * second / 100
        })
      }
  }
  clear = () => {
    let { firstVal, secondVal, mathOpSign, result } = this.state;
    this.setState({
      firstVal: '',
      secondVal: '',
      mathOp: false,
      mathOpSign:'',
      result: '0'
    })
  }
  dot = () => {
    let { firstVal, secondVal, mathOpSign, result } = this.state;
    if(this.state.dot == false) {
    this.state.mathOp ? 
      this.setState ({
        secondVal: secondVal + '.',
        dot: true
      }) :
      this.setState ({
        firstVal: firstVal + '.',
        dot: true
      })

  }
}
  backspace = () => {
    let { firstVal, secondVal, mathOpSign, result } = this.state;

    this.state.mathOp ? 
    this.setState ({
      secondVal: secondVal.slice(0, -1)
  
    }) :
    this.setState ({
      firstVal: firstVal.slice(0, -1)

    })
  }
  render() {
    let calcButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    let mathButtons = ['+', '-', '*', '/'];
    let { firstVal, secondVal, mathOpSign, result, human } = this.state;
   return (
      <div className="app">
        <div className="firststr">
          <div id='first'>
            {firstVal}
          </div>
          <div id='mathOpSign'>
            {mathOpSign}
          </div>
          <div id='second'>
            {secondVal}
          </div>
        </div>
        <div id='result'>
          {result}
        </div>
      <div className="app-body">
        <div>
          {calcButtons.map((item) =>
            <button key={item} onClick={ () => this.clickHandle(item)}>
              {item}
            </button>
          )}
          <button onClick={ () => this.dot()}>
              .
            </button>
        </div>
        <div>
          {mathButtons.map((item) =>
            <button className="signs" key={item} onClick={ () => this.calcSign(item)}>
              {item}
            </button>
          )}
        </div>
  
        <div>
            <button className="res" onClick={ () => this.calcSign('%')}>
              %
            </button>
            <button className="res" onClick={ () => this.calculate()}>
              =
            </button>
            <button className="res" onClick={ () => this.clear()}>
              C
            </button>
            <button className="res" onClick={ () => this.backspace()}>
              X
            </button>
  
        </div>
       
      </div>
      </div>
    );
  }
  }
export default App;