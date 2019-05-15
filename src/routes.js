import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Auth from './screens/Auth';
import Events from './screens/Events';

const Routes = (token = '') => createAppContainer(
  createSwitchNavigator(
    {
      Auth,
      Main: createStackNavigator({
        Events,
      }),
    },
    {
      initialRouteName: token ? 'Main' : 'Auth',
    },
  ),
);

export default Routes;
