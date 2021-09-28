import { Component } from 'react';

// types
type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};

// types go after component
export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  // function
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
