/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
import './src/config/ReactotronConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { AsyncStorage, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import createNavigator from './src/routes';
import store from './src/store';
import NavigationService from './src/services/NavigationService';

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userChecked: false, token: null };
  }

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('@agendaedu:token');

      this.setState({ userChecked: true, token });
    } catch (err) {
      this.setState({ userChecked: true });
    }
  }

  render() {
    const { userChecked, token } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(token);
    return (
      <Provider store={store}>
        <Routes
          ref={(navigatorRef) => {
					  NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
