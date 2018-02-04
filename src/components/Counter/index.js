import React, { PureComponent } from 'react';
import './Counter.css';

const MAX = 10;

class Counter extends PureComponent {
  render() {
    const { count } = this.props;
    const isMoreThanMax = count > MAX;
    return (
      <div className='Counter' style={{ color: isMoreThanMax ? 'red' : 'white' }}>
        { isMoreThanMax &&
          <span className="Counter-warning" role="img" aria-label="warning">
            ⚠️
          </span>
        }
        <h1>{ count }</h1>
      </div>
    );
  }
}

export default Counter;
