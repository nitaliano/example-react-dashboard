import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Form from '../Form';
import FormGroup from '../FormGroup';
import TextBox from '../TextBox';
import Checkbox from '../Checkbox';
import DashboardActions from '../../actions/DashboardActions';

class CreateUser extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      isAdmin: false
    };
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onIsAdminChange(e) {
    this.setState({ isAdmin: e.target.checked });
  }

  onCreateUserButton(e) {
    e.preventDefault();
    DashboardActions.createUser(this.state);
  }

  render() {
    return (
      <div className="CreateUser">
        <Form className="CreateUser-form">
          <FormGroup className="CreateUser-group">
            <label htmlFor="CreateUser-id">Email address</label>
            <TextBox
              type="text"
              onChange={this.onEmailChange.bind(this)}
              className="form-control"
              id="CreateUser-id"
              placeholder="Enter email" />
          </FormGroup>

          <FormGroup className="CreateUser-group">
            <label htmlFor="CreateUser-password">Password</label>
            <TextBox
              type="password"
              onChange={this.onPasswordChange.bind(this)}
              className="form-control"
              id="CreateUser-password"
              placeholder="Enter password" />
          </FormGroup>

          <FormGroup className="CreateUser-group">
            <label htmlFor="CreateUser-name">Name</label>
            <TextBox
              type="text"
              onChange={this.onNameChange.bind(this)}
              className="form-control"
              id="CreateUser-name"
              placeholder="Enter name" />
          </FormGroup>

          <Checkbox onChange={this.onIsAdminChange.bind(this)} label="Admin" />
          <button type="submit" className="btn btn-default" onClick={this.onCreateUserButton.bind(this)}>Create</button>
        </Form>
      </div>
    );
  }
}

export default CreateUser;
