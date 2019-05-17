import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import * as utils from '../../services/utils';
import {
  Container,
  BackgroundImage,
  Slider,
  Header,
  DateIcon,
  DateDay,
  DateText,
  InfoContainer,
  Title,
  TimeContainer,
  TimeText,
  Description,
} from './styles';

class EventDetail extends Component {
  componentWillMount() {
    const {
      navigation,
      events: {
        data: { eventsObj },
      },
    } = this.props;
    const id = navigation.getParam('itemId', 'NO-ID');

    this.setState({ date: new Date(eventsObj[id].startAt) });
  }

  render() {
    const {
      navigation,
      events: {
        data: { eventsObj },
      },
    } = this.props;
    const { date } = this.state;
    const id = navigation.getParam('itemId', 'NO-ID');
    return (
      <Container>
        <BackgroundImage
          source={{
					  uri:
							'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c489553324483.5930258da9303.jpg',
          }}
        />
        <Slider>
          <Header>
            <DateIcon>
              <DateDay>{utils.getDay(date)}</DateDay>
              <DateText>{utils.getMonthAbreviation(date)}</DateText>
            </DateIcon>
            <InfoContainer>
              <Title>{eventsObj[id].title}</Title>
              <TimeContainer>
                <Ionicons name="md-time" size={20} />
                <TimeText>{utils.getHour(date)}:00</TimeText>
              </TimeContainer>
            </InfoContainer>
          </Header>
          <Description>{eventsObj[id].description}</Description>
        </Slider>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventDetail);
