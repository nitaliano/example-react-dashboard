import React from 'react'; // eslint-disable-line no-unused-vars
import ReportStore from '../../stores/ReportStore';
import UserStore from '../../stores/UsersStore';
import CreateConfigStore from '../../stores/CreateConfigStore';
import UpdateConfigStore from '../../stores/UpdateConfigStore';
import Report from '../Report';
import DashboardActions from '../../actions/DashboardActions';
import Module from '../Module';
import Container from '../Container';
import Row from '../Row';
import Users from '../Users';
import CreateConfig from '../CreateConfig';
import UpdateConfig from '../UpdateConfig';
import CreateUser from '../CreateUser';
import styles from './DashboardPage.less'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars

@withStyles(styles)
class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = this.getStateFromStore();
    this.prevScrollTop = 0;
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  getStateFromStore() {
    return {
      report: ReportStore.report,
      users: UserStore.users,
      create: CreateConfigStore.config,
      update: {
        configs: UpdateConfigStore.configs,
        selected: UpdateConfigStore.selected
      }
    };
  }

  componentDidMount() {
    ReportStore.addChangeListener(this.onStoreChange);
    UserStore.addChangeListener(this.onStoreChange);
    CreateConfigStore.addChangeListener(this.onStoreChange);
    UpdateConfigStore.addChangeListener(this.onStoreChange);
    DashboardActions.getReport();
    DashboardActions.getUsers();
    DashboardActions.getConfigs();
  }

  componentWillUnmount() {
    ReportStore.removeChangeListener(this.onStoreChange);
    UserStore.removeChangeListener(this.onStoreChange);
    CreateConfigStore.removeChangeListener(this.onStoreChange);
    UpdateConfigStore.removeChangeListener(this.onStoreChange);
  }

  componentWillUpdate() {
    this.prevScrollTop = document.body.scrollTop;
  }

  componentDidUpdate() {
    document.body.scrollTop = this.prevScrollTop;
  }

  onStoreChange() {
    this.setState(this.getStateFromStore());
  }

  render() {
    return (
      <div className="DashboardPage">
        <Container>
          <Row>
            <Module title="Report">
              <Report data={this.state.report} />
            </Module>
          </Row>

          <Row>
            <Module title="Create Site Configuration" cols="6" maxHeight="400">
              <CreateConfig config={this.state.create} />
            </Module>

            <Module title="Edit Site Configuration" cols="6" maxHeight="400">
              <UpdateConfig configs={this.state.update.configs} selected={this.state.update.selected}/>
            </Module>
          </Row>

          <Row>
            <Module title="Create User" cols="6" maxHeight="300">
              <CreateUser />
            </Module>

            <Module title="Users" cols="6" maxHeight="300">
              <Users users={this.state.users} />
            </Module>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DashboardPage;
