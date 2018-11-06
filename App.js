import React from 'react';
import { ScreenOrientation } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import colors from './utils/colors';
import { human } from 'react-native-typography'

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT_UP);

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerTransitionPreset: 'uikit',
    gestureResponseDistance: 100,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.sunflowerYellow,
        borderBottomColor: colors.sunflowerYellow,
      },
      headerTintColor: colors.greyishBrown,
    },
  }
);
