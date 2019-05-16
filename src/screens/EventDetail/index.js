import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

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
  componentDidMount() {}

  render() {
    console.tron.log('in detail');
    console.tron.log(this.props);
    const {
      navigation,
      events: {
        data: { eventsObj },
      },
    } = this.props;
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
              <DateDay>25</DateDay>
              <DateText>JAN</DateText>
            </DateIcon>
            <InfoContainer>
              <Title>{eventsObj[id].title}</Title>
              <TimeContainer>
                <Ionicons name="md-time" size={20} />
                <TimeText>16:00</TimeText>
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
