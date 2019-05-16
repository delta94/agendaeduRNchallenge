import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  Content,
  EventImage,
  EventInfo,
  Title,
  Description,
  TimeContainer,
  TimerText,
  Date,
} from './styles';

const EventCard = ({ data }) => {
  const {
    title, description, image, location, id,
  } = data;

  return (
    <TouchableWithoutFeedback>
      <Container>
        <Content>
          {image ? (
            <EventImage
              source={{
							  uri: image,
              }}
            />
          ) : null}
          <EventInfo>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TimeContainer>
              <TimerText>16:00</TimerText>
            </TimeContainer>
            <Date>Quarta, 25 de janeiro às 20:00h</Date>
          </EventInfo>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default EventCard;
