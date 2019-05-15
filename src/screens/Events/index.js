/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

// import { Container } from './styles';

class Events extends Component {
  componentDidMount() {
    const {
      auth: {
        data: { token },
      },
    } = this.props;
    if (!token) {
      this.sendTokenToStore();
    }
  }

	sendTokenToStore = async () => {
	  const { tokenGetSuccess } = this.props;
	  try {
	    const token = await AsyncStorage.getItem('@agendaedu:token');

	    tokenGetSuccess(JSON.parse(token));
	  } catch (err) {
	    console.tron.log(err);
	  }
	};

	logout = async () => {
	  await AsyncStorage.clear();
	};

	render() {
	  return (
  <View>
    <Text>Events Screen</Text>
    <TouchableOpacity onPress={this.logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
	  );
	}
}

Events.propTypes = {
  auth: PropTypes.shape({
    data: PropTypes.shape({}),
  }).isRequired,
  tokenGetSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
