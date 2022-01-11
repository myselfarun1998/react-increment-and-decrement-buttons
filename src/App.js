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
  }

  incrementCount = (event) => {
    console.log();
    this.setState({ counter: ++this.state.counter, color1: 'blue' });
  };

  decrementCount = () => {
    // if (this.state.counter <= 0) {
    //   this.setState({
    //     counter: 0,
    //   });
    // } else {
    //   this.setState({
    //     counter: this.state.counter - 1,
    //   });
    // }

    // if (this.state.counter > 0) {
    //   this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    // }

    this.setState((prevState) => ({
      counter: prevState.counter ? prevState.counter - 1 : 0,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      counter: prevState.counter ? prevState.counter - 1 : 0,
    }));
  };

  render() {
    const isLoggedIn = this.state.counter;

    return (
      <div>
        <h1 className={this.state.counter > 5 ? 'dec' : 'inc'}>
          {this.state.counter}
        </h1>

        <Button inc={this.incrementCount} dec={this.decrementCount} />
      </div>
    );
  }
}
