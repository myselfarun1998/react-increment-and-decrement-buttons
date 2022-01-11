import React from 'react';
import './style.css';

import Button from './Button.js';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      color1: 'blue',
    };
    // this.decrementCount = this.decrement.bind(this);
  }

  incrementCount = (event) => {
    console.log();
    this.setState({ counter: ++this.state.counter, color1: 'blue' });
  };

  // decrement() {
  //   this.setState(prevState => {value: prevState.value > 0? --prevState.value : 0});
  // }

  // this.setState({ counter: counter > 0? --this.state.counter:0 });
  decrementCount = () => {
    if (this.state.counter <= 0) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  render() {
    const isLoggedIn = this.state.counter;

    return (
      <div>
        <h1 className={this.state.counter > 5 ? 'dec' : 'inc'}>
          {this.state.counter}
        </h1>
        {/* <h1>{this.state.counter}</h1> */}

        <div>
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.decrementCount}>-</button>
        </div>
      </div>
    );
  }
}

{
  /* <Button inc={this.incrementCount} dec={this.decrementCount} /> */
}
// session task
//name: city age:
//display the above info in parent on a button click from child

//task : display the count in green till 5 after 5 shud be displayed in red
//should not allow negative val to be displayed
