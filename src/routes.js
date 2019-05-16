import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Auth from './screens/Auth';

import Events from './screens/Events';
import EventDetail from './screens/EventDetail';
import Drawer from './screens/Drawer';

const Routes = (token = '') => createAppContainer(
  createSwitchNavigator(
    {
      Auth,
      Main: createDrawerNavigator(
        {
          EventStack: createStackNavigator({
            Events: {
              screen: Events,
            },
            EventDetail: {
              screen: EventDetail,
              navigationOptions: () => ({
                title: 'Detalhes do evento',
                headerBackTitle: null,
              }),
            },
          }),
        },
        {
          contentComponent: Drawer,
        },
      ),
    },
    {
      initialRouteName: token ? 'Main' : 'Auth',
    },
  ),
);

export default Routes;
