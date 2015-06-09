import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './App.less'; // eslint-disable-line no-unused-vars
import withContext from '../../decorators/withContext'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles'; // eslint-disable-line no-unused-vars
import AppActions from '../../actions/AppActions';
import AuthStore from '../../stores/AuthStore';
import ModalStore from '../../stores/ModalStore';
import Header from '../Header';
import Modal from '../Modal';
import LoginPage from '../LoginPage';
import DashboardPage from '../DashboardPage';
import NotFoundPage from '../NotFoundPage';

@withContext
@withStyles(styles)
class App extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      isAuthenticated: !!AuthStore.user,
      isModalHidden: ModalStore.hidden
    };

    this.onAuthChange = this.onAuthChange.bind(this);
    this.onModalChange = this.onModalChange.bind(this);
  }

  componentDidMount() {
    ModalStore.addChangeListener(this.onModalChange);
    AuthStore.addChangeListener(this.onAuthChange);
  }

  componentWillUnmount() {
    ModalStore.removeChangeListener(this.onModalChange);
    AuthStore.removeChangeListener(this.onAuthChange);
  }

  onModalChange() {
    this.setState({ isModalHidden: ModalStore.hidden });
  }

  onAuthChange() {
    if (AuthStore.failedAuth && location.pathname !== '/') {
      AppActions.navigateTo('/');
      return;
    }

    var isAuthenticated = !!AuthStore.user;
    this.setState({ isAuthenticated: isAuthenticated });

    if (isAuthenticated) {
      AppActions.navigateTo('/dashboard');
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path || this.state.isModalHidden !== nextProps.isModalHidden;
  }

  get modalComponent() {
    var modalProps = {
      title: ModalStore.title,
      dialog: ModalStore.dialog
    };

    if (this.state.isModalHidden) {
      modalProps.hidden = true;
    }

    return (<Modal {...modalProps} />);
  }

  render() {
    var header, component;

    switch (this.props.path) {
      case '/':
        header = <Header />;
        component = <LoginPage />;
        break;
      case '/dashboard':
        header = <Header hideLogin />;
        component = <DashboardPage />;
        break;
    }

    return component ? (
      <div className="react-container">
        {header}
        {component}
        {this.modalComponent}
      </div>
    ) : <NotFoundPage />;
  }
}

export default App;
