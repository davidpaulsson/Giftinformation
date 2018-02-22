import React from 'react';
import { ScreenOrientation } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

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
    // navigationOptions: {
    //   sceneStyle: {
    //     backgroundColor: '#fff',
    //   },
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  }
);
