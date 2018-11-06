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
    headerTransitionPreset: 'uikit',
    gestureResponseDistance: 100,
  }
);
