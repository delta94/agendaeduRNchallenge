import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './screens/Auth';
import Events from './screens/Events';

const Routes = createAppContainer(
  createSwitchNavigator({
    Auth,
    Events,
  }),
);

export default Routes;
