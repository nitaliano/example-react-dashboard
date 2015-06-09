import React from 'react'; // eslint-disable-line no-unused-vars
import styles from './LoginForm.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import TextBox from '../TextBox';
import Form from '../Form';
import FormGroup from '../FormGroup';
import AuthActions from '../../actions/AuthActions';

const idPlaceHolder = 'Enter User Id';
const pwPlaceHolder = 'Enter Password';

@withStyles(styles)
class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    AuthActions.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <Form inline className="LoginForm">
        <FormGroup className="LoginForm-group">
          <label className="sr-only" htmlFor="LoginForm-id">Email address</label>
          <TextBox
            type="text"
            onChange={this.onEmailChange.bind(this)}
            className="form-control"
            id="LoginForm-id"
            placeholder={idPlaceHolder} />
        </FormGroup>

        <FormGroup className="LoginForm-group">
          <label className="sr-only" htmlFor="LoginForm-password">Password</label>
          <TextBox
            type="password"
            onChange={this.onPasswordChange.bind(this)}
            className="form-control"
            id="LoginForm-password"
            placeholder={pwPlaceHolder} />
        </FormGroup>

        <button
          type="submit"
          className="btn btn-default LoginForm-signin"
          onClick={this.onClick.bind(this)}>Sign in</button>
      </Form>
    );
  }
}

export default LoginForm;
