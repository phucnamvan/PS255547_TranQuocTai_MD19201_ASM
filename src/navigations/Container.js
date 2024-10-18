import {screens} from '../contants/screens';
import AuthNavigation2 from './AuthNavigation2';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={screens.AuthNavigation}
          component={AuthNavigation2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
