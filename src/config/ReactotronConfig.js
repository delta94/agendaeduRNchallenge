import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import host from './host';

if (__DEV__) {
  const tron = Reactotron.configure({ host }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
