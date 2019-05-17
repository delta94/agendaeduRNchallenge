import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as utils from '../../services/utils';

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

const EventCard = ({ data, onPress, date }) => {
  const {
    title, description, image, id,
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
              <TimerText numberOfLines={1}>{utils.getHour(date)}:00h</TimerText>
            </TimeContainer>
            <Date>{utils.getDataTitle(date)}</Date>
          </EventInfo>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default EventCard;
