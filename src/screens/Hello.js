import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {colors} from '../contants/colors';
import {screens} from '../contants/screens';
import {useNavigation} from '@react-navigation/native';

const Hello = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.Login);
    }, 1000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <Image
        style={{width: 189, height: 189}}
        source={require('../assets/images/Logo.png')}
      />
    </View>
  );
};

export default Hello;
