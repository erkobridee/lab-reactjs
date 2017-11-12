/*
  React Docs - adding lifecycle methods to a class
  https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
*/

import React, { Component } from 'react';

class CountSeconds extends Component {
  constructor(props){
    super(props);

    this.state = {
      count : 0,
      intervalID : null,
      intervalTimeout : 1000 // 1s
    };

    // pass the component context into the function/method
    this.resetCount = this.resetCount.bind(this);
  }

  componentDidMount(){
    let intervalID = setInterval(() => {
      this.setState({ count : this.state.count + 1 });
    }, this.state.intervalTimeout);
    this.setState({ intervalID : intervalID });
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalID);
  }

  resetCount(e){
    e.preventDefault();

    this.setState({
      count : 0
    });
  }

  render(){
    return (
      <div>
        Counting seconds: {this.state.count} (s)
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

export default CountSeconds;