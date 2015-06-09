import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class Users {
  static propTypes = {
    users: PropTypes.array
  };

  get users() {
    if (!this.props.users) {
      return '';
    }

    if (!this.props.users.length) {
      return (<li className="list-group-item" key="0">No Users</li>);
    }

    let users = [];
    this.props.users.map((user, key) => {
      users.push(<li className="list-group-item" key={key}>{user.email}</li>);
    });

    return users;
  }

  render() {
    return (
      <ul className="list-group Users">
        {this.users}
      </ul>
    );
  }
}

export default Users;
