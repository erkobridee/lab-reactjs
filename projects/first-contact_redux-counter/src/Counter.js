import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(e){
    e.preventDefault();

    this.props.dispatch({ type: 'COUNTER:DECREMENT' });
  }

  increment(e){
    e.preventDefault();
    
    this.props.dispatch({ type: 'COUNTER:INCREMENT' });
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

const mapStateToProps = (state) => ({
  count : state.count
});

export default connect(mapStateToProps)(Counter);
