import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './LoginPage.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

const jumbotronHeader = 'Welcome to the Torbit Admin Dashboard';
const jumbotronMessageTop = 'Some features include user management, site configuration, and reports';
const jumbotronMessageBottom = 'Login to see more!!';

@withStyles(styles)
class LoginPage {
  render() {
    return (
      <div className="LoginPage">
        <div className="jumbotron LoginPage-jumbotron">
          <h1>{jumbotronHeader}</h1>
          <p>{jumbotronMessageTop}</p>
          <p>{jumbotronMessageBottom}</p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
