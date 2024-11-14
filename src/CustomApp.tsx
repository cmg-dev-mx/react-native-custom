import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './route/StackNavigator';

export const CustomApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
