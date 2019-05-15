import './src/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import store from './src/store';
import NavigationService from './src/services/NavigationService';

const App = () => (
  <Provider store={store}>
    <Routes
      ref={(navigatorRef) => {
			  NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
