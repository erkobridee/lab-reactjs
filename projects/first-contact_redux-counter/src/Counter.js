import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
      count : 42
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(e){
    e.preventDefault();

    this.setState({
      count : this.state.count-1
    });
  }

  increment(e){
    e.preventDefault();
    
    this.setState({
      count : this.state.count+1
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>&ndash;</button>
          <span> {this.state.count} </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
