import React from 'react';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import {colors} from '../contants/colors';
import Favorite from '../screens/Favorite';
import {screens} from '../contants/screens';
import Notification from '../screens/Notification';
import {
  Home as IHome,
  Bag,
  Heart,
  Notification as INoti,
} from 'iconsax-react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const AuthNavigation = () => {
  const tabs = [
    {
      component: Home,
      name: screens.Home,
      iconNotFocus: <IHome color={colors.grayIcon} size={24} />,
      iconFocus: <IHome color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Favorite,
      name: screens.Favorite,
      iconNotFocus: <Heart color={colors.grayIcon} size={24} />,
      iconFocus: <Heart color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Cart,
      name: screens.Cart,
      iconNotFocus: <Bag color={colors.grayIcon} size={24} />,
      iconFocus: <Bag color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Notification,
      name: screens.Notification,
      iconNotFocus: <INoti color={colors.grayIcon} size={24} />,
      iconFocus: <INoti color={colors.orange} variant="Bold" size={24} />,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          borderColor: 'transparent',
          backgroundColor: colors.background,
        },
      }}>
      {tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={item.title}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center'}}>
                  {focused ? item.iconFocus : item.iconNotFocus}
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default AuthNavigation;
