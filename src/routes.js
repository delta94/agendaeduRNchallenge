import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Auth from './screens/Auth';
import Events from './screens/Events';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth,
    Main: createStackNavigator({
      Events,
    }),
  }),
);

export default Routes;
