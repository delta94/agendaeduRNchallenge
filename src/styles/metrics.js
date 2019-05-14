import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 25,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeigth: width > height ? width : height,
};
