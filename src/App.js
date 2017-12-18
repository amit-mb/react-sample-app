import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){ // Every class like App needs a contstructor function and super() call firstly. To set the initial state of the component, Just state it as follow. this.state = { property : value}. Note: State is always an object
  super();

  this.state = {
    count : 0
  }
}

  increment = () =>{
    //this.state.count = this.state.count + 1 ; You could do this but  we use the api provided by React so that state change is properly reflected everywhere
    this.setState({count : this.state.count + 1})
  }

  //lets add a decrement method as well
  decrement = () => {
    this.setState({ count : this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} className="btn-increment">+</button>
        <button onClick = {this.decrement} className="btn-decrement">-</button>
      </div>
    );// Wonder why we used {this.increment} ? Bcoz it is staill a function/method under the same App component
  }
} // Notice App component ends here

export default App;
