import React, { PureComponent } from 'react';
import './Counter.css';

class Counter extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <div className='Counter'>
        <h1>{ count }</h1>
      </div>
    );
  }
}

export default Counter;
