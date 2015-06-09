import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './Header.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import LoginForm from '../LoginForm';
import Row from '../Row';
import Container from '../Container';

@withStyles(styles)
class Header {
  static propTypes = {
    hideLogin: PropTypes.bool
  };

  get loginForm() {
    if (this.props.hideLogin) {
      return '';
    }

    return (
      <div className="Header-login-form">
        <LoginForm />
      </div>
    );
  }

  render() {
    return (
      <header className="Header">
        <Container>
          <Row>
            <div className="Header-logo">
              <img src={require('./torbit-small-logo-grey.png')} />
            </div>

            {this.loginForm}
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
