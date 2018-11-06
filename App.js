import { ScreenOrientation } from 'expo';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);

export default createStackNavigator(
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
  }
);
