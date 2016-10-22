import { connect } from 'react-redux';

import { updateUserNameAction } from './actionCreators';
import { Home } from './components';

// map redux state to react
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore,
  }
}

// map redux actions to react
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: username =>
      dispatch(updateUserNameAction(username)),
  }
}

// create react component connection
const ReduxHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ReduxHome;
