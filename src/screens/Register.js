import React, {useState} from 'react';
import {fonts} from '../contants/fonts';
import {colors} from '../contants/colors';
import {screens} from '../contants/screens';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const Register = () => {
  const navigation = useNavigation();
  const [securityPass, setSecurityPass] = useState(true);
  const [securityRePass, setSecurityRePass] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.background,
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          style={{width: 142, height: 142}}
          source={require('../assets/images/Logo.png')}
        />
        <View style={{width: '100%', alignItems: 'center', gap: 16}}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontWeight: 600,
              fontFamily: fonts.MainBold,
            }}>
            Welcome to Lungo !!
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: colors.gray,
              fontFamily: fonts.MainBold,
            }}>
            Login to Continue
          </Text>
        </View>
      </View>

      <View style={{width: '100%', alignItems: 'center', gap: 16}}>
        <TextInput
          placeholder="Name"
          style={{
            padding: 10,
            width: '90%',
            color: 'white',
            borderWidth: 1,
            borderRadius: 8,
            fontFamily: fonts.Main,
            borderColor: colors.gray2,
          }}
          placeholderTextColor={colors.gray}
        />
        <TextInput
          placeholder="Email"
          style={{
            padding: 10,
            width: '90%',
            color: 'white',
            borderWidth: 1,
            borderRadius: 8,
            fontFamily: fonts.Main,
            borderColor: colors.gray2,
          }}
          placeholderTextColor={colors.gray}
        />

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: colors.gray2,
          }}>
          <TextInput
            placeholder="Password"
            style={{
              padding: 10,
              width: '90%',
              color: 'white',
              fontFamily: fonts.Main,
            }}
            placeholderTextColor={colors.gray}
            secureTextEntry={securityPass}
          />
          <TouchableOpacity
            onPress={() => {
              setSecurityPass(!securityPass);
            }}>
            {securityPass ? (
              <EyeSlash color="white" size={20} />
            ) : (
              <Eye color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: colors.gray2,
          }}>
          <TextInput
            placeholder="Re-type Password"
            style={{
              padding: 10,
              width: '90%',
              color: 'white',
              fontFamily: fonts.Main,
            }}
            placeholderTextColor={colors.gray}
            secureTextEntry={securityRePass}
          />
          <TouchableOpacity
            onPress={() => {
              setSecurityRePass(!securityRePass);
            }}>
            {securityRePass ? (
              <EyeSlash color="white" size={20} />
            ) : (
              <Eye color="white" size={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%', alignItems: 'center', gap: 10}}>
        <TouchableOpacity
          style={{
            padding: 15,
            width: '90%',
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: colors.orange,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 600,
              fontFamily: fonts.MainBold,
            }}>
            Register
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: colors.gray,
              fontFamily: fonts.MainBold,
            }}>
            You have an account? Click{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(screens.Login);
            }}>
            <Text
              style={{
                fontSize: 12,
                color: colors.orange,
                fontFamily: fonts.MainBold,
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
