import Lab2 from '../screens/Lab2';
import Hello from '../screens/Hello';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {screens} from '../contants/screens';
import AuthNavigation from './AuthNavigation';
import DetailProduct from '../screens/DetailProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screens.Hello} component={Hello} />
        <Stack.Screen name={screens.Lab2} component={Lab2} />
        <Stack.Screen name={screens.Login} component={Login} />
        <Stack.Screen name={screens.Register} component={Register} />
        <Stack.Screen name={screens.AuthNavigation} component={AuthNavigation} />
        <Stack.Screen name={screens.DetailProduct} component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
