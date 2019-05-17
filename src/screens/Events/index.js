/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';
import { AsyncStorage, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as EventActions } from '../../store/ducks/events';
import { Creators as AuthActions } from '../../store/ducks/auth';

import {
  Container,
  Content,
  Loading,
  EventList,
  NoEventsFound,
  NoEventsText,
  FooterLoading,
  EndOfList,
} from './styles';

import * as utils from '../../services/utils';

import EventCard from '../../components/EventCard';
import DateContainer from '../../components/DateContainer';

class Events extends Component {
	static navigationOptions = ({ navigation }) => ({
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
				  navigation.openDrawer();
    }}
  />
	  ),
	});

	constructor(props) {
	  super(props);
	  this.state = { nextPage: 1 };
	}

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
	  const { nextPage } = this.state;

	  const pkct = { token, params: { limit: 5, page: nextPage } };
	  await eventFetchRequest(pkct);
	  this.setState({ nextPage: nextPage + 1 });
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

	renderListFooter = () => {
	  if (this.props.events.loading) {
	    return <FooterLoading size="small" />;
	  }
	  return <EndOfList />;
	};

	renderEventList = () => {
	  const {
	    data: { eventsArray },
	  } = this.props.events;
	  return (
  <EventList
    data={eventsArray}
    extraData={eventsArray}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) => this.renderEventCard(item)}
    onEndReached={this.fetchEvents}
    onEndReachedThreshold={0.2}
    ListFooterComponent={this.renderListFooter}
  />
	  );
	};

	renderEventCard = (item) => {
	  const date = new Date(item.sendAt);

	  return (
  <Content key={item.id}>
    <DateContainer date={utils.getDataTitle(date)}>
      <EventCard
        data={item}
        date={date}
        onPress={() => {
						  this.onEventCardPress(item);
        }}
      />
    </DateContainer>
  </Content>
	  );
	};

	onEventCardPress = (item) => {
	  this.props.navigation.navigate('EventDetail', { itemId: item.id });
	};

	render() {
	  const {
	    data: { eventsArray },
	  } = this.props.events;

	  return (
  <Container>
    {eventsArray && eventsArray.length > 0 ? this.renderEventList() : this.renderLoading()}
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
