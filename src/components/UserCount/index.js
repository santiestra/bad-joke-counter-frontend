import React, { PureComponent } from 'react';

import './UserCount.css';

class UserCount extends PureComponent {
  render() {
    const { countByUser } = this.props;
    const keysSorted = Object.keys(countByUser)
      .sort((a, b) => countByUser[b] - countByUser[a]);

    return (
      <ul className="UserCount">
        {keysSorted.map((user, index) => (
          <li key={user} className="UserCount-row">
            <div className="UserCount-col">
              {index === 0 && '🏆'}
              {index === 1 && '🥈'}
              {index === 2 && '🥉'}
              {user}
            </div>
            <div className="UserCount-col">{countByUser[user]}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserCount;
