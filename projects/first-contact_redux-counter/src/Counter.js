import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(e){
    e.preventDefault();

    // TODO: fill it later
  }

  increment(e){
    e.preventDefault();
    
    // TODO: fill it later
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>&ndash;</button>
          <span> {this.props.count} </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
