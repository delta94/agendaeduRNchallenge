import React from 'react';
import { SafeAreaView, DrawerItems } from 'react-navigation';

import { ScrollView } from 'react-native';
import { Container, Content } from './styles';

const Drawer = props => (
  <Container forceInset={{ top: 'always', horizontal: 'never' }}>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

export default Drawer;
