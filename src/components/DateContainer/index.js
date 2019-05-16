import React from 'react';

import { Container, Date, EventContainer } from './styles';

const DateContainer = (props) => {
  const { date, children } = props;
  return (
    <Container>
      <Date>{date}</Date>
      <EventContainer>{children}</EventContainer>
    </Container>
  );
};

export default DateContainer;
