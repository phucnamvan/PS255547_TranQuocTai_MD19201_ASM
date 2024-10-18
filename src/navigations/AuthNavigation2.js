import React from 'react';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import {colors} from '../contants/colors';
import Favorite from '../screens/Favorite';
import {screens} from '../contants/screens';
import Screen1 from '../screens/bvm/Screen1';
import Screen2 from '../screens/bvm/Screen2';
import Screen3 from '../screens/bvm/Screen3';
import Screen4 from '../screens/bvm/Screen4';
import Screen5 from '../screens/bvm/Screen5';
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
      component: Screen1,
      name: 'Screen1',
      iconNotFocus: <IHome color={colors.grayIcon} size={24} />,
      iconFocus: <IHome color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Screen2,
      name: 'Screen2',
      iconNotFocus: <Heart color={colors.grayIcon} size={24} />,
      iconFocus: <Heart color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Screen3,
      name: 'Screen3',
      iconNotFocus: <Bag color={colors.grayIcon} size={24} />,
      iconFocus: <Bag color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Screen4,
      name: 'Screen4',
      iconNotFocus: <INoti color={colors.grayIcon} size={24} />,
      iconFocus: <INoti color={colors.orange} variant="Bold" size={24} />,
    },
    {
      component: Screen5,
      name: 'Screen5',
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
          height: 60,
          backgroundColor: '#f2f2f2',
          borderColor: 'transparent',
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
