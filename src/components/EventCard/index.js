import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const EventCard = ({ data, onPress }) => {
  const {
    title, description, image, id, startAt,
  } = data;

  return (
    <TouchableWithoutFeedback key={id} onPress={onPress}>
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
              <Ionicons name="md-time" size={20} />
              <TimerText numberOfLines={1}>16:00</TimerText>
            </TimeContainer>
            <Date>Quarta, 25 de janeiro às 20:00h</Date>
          </EventInfo>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const timeRemaining = (date) => {
  const today = new Date();
  const eventDate = new Date(date);
};

const timeToText = (date) => {
  const eventDate = new Date(date);
};

export default EventCard;
