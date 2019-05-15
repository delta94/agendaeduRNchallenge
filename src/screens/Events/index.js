/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import {
  Header, Left, Right, Icon,
} from 'native-base';
import { connect } from 'react-redux';
import {
  SafeAreaView, View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

// import { Container } from './styles';

class Events extends Component {
	static navigationOptions = {
	  title: 'Eventos',
	  headerBackTitle: null,
	  headerLeftContainerStyle: {
	    flex: 1,
	    paddingLeft: 20,
	    alignItems: 'center',
	  },
	  headerLeft: (
  <Ionicons
    name="ios-menu"
    size={25}
    onPress={() => {
				  console.tron.log('abrindo');
    }}
  />
	  ),
	};

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
  <SafeAreaView>
    <Text>Events Screen</Text>
    <TouchableOpacity
      onPress={() => {
					  console.tron.log(this.props);
					  this.props.navigation.navigate('EventDetail');
      }}
    >
      <Text>Card</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </SafeAreaView>
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
