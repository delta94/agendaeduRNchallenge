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
  Container, Content, Loading, EventList, NoEventsFound, NoEventsText,
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

	  this.fetchEvents();
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

	renderLoading = () => {
	  const {
	    events: { loading },
	  } = this.props;

	  if (loading) {
	    return <Loading size="small" />;
	  }
	  return (
  <NoEventsFound>
    <NoEventsText>Nenhum evento encontrado. </NoEventsText>
  </NoEventsFound>
	  );
	};

	renderEventList = () => {
	  const {
	    data: { eventsData },
	  } = this.props.events;
	  return (
  <EventList
    data={eventsData}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) => this.renderEventCard(item)}
  />
	  );
	};

	renderEventCard = item => (
  <DateContainer date="Quarta, 25 de janeiro">
    <EventCard
      data={item}
      onPress={() => {
				  this.onEventCardPress(item);
      }}
    />
  </DateContainer>
	);

	onEventCardPress = (item) => {
	  this.props.navigation.navigate('EventDetail', { itemId: item.id });
	};

	render() {
	  const {
	    data: { eventsData },
	  } = this.props.events;

	  return (
  <Container>
    <Content>
      {eventsData && eventsData.length > 0 ? this.renderEventList() : this.renderLoading()}
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

const mapStateToProps = (state) => {
  console.tron.log(state);
  return { auth: state.auth, events: state.events };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...EventActions, ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
