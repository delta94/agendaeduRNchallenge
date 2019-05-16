/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as EventActions } from '../../store/ducks/events';
import { Creators as AuthActions } from '../../store/ducks/auth';

import {
  Container, Content, TextStyled, ButtonStyled,
} from './styles';

import EventCard from '../../components/EventCard';
import DateContainer from '../../components/DateContainer';

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

	fetchEvents = async () => {
	  const {
	    eventFetchRequest,
	    auth: {
	      data: { token },
	    },
	  } = this.props;
	  const pkct = { token, params: { limit: 5, page: 1 } };
	  await eventFetchRequest(pkct);
	};

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
	  console.tron.log(this.props);
	  const card1 = {
	    title: 'EVENTOS',
	    description: 'Aula especial de natação',
	    image:
				'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg',
	  };

	  const card2 = {
	    title: 'EVENTOS',
	    description: 'Aula especial de natação da escola da santa cruz de jesus menino',
	  };

	  return (
  <Container>
    <Content>
      <DateContainer date="Quarta, 25 de janeiro">
        <EventCard data={card1} />
        <EventCard data={card2} />
      </DateContainer>
      <DateContainer date="Terça, 24 de janeiro">
        <EventCard data={card1} />
        <EventCard data={card1} />
      </DateContainer>
      <ButtonStyled
        onPress={() => {
						  console.tron.log(this.props);
						  this.props.navigation.navigate('EventDetail');
        }}
      >
        <TextStyled>Card</TextStyled>
      </ButtonStyled>
      <ButtonStyled onPress={this.logout}>
        <TextStyled>Logout</TextStyled>
      </ButtonStyled>
    </Content>
  </Container>
	  );
	}
}

Events.propTypes = {
  auth: PropTypes.shape({
    data: PropTypes.shape({}),
  }).isRequired,
  tokenGetSuccess: PropTypes.func.isRequired,
  eventFetchRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators({ ...EventActions, ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
