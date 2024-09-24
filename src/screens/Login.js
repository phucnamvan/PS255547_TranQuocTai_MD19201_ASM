import React, {useState} from 'react';
import {fonts} from '../contants/fonts';
import {colors} from '../contants/colors';
import {screens} from '../contants/screens';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [security, setSecurity] = useState(true);

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
          placeholder="Email Address"
          style={{
            padding: 10,
            width: '90%',
            borderWidth: 1,
            color: 'white',
            borderRadius: 8,
            fontFamily: fonts.Main,
            borderColor: colors.gray2,
          }}
          placeholderTextColor={colors.gray}
        />
        {/* <TextInput
          placeholder="Password"
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
        /> */}

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
            secureTextEntry={security}
          />
          <TouchableOpacity
            onPress={() => {
              setSecurity(!security);
            }}>
            {security ? <EyeSlash color="white" /> : <Eye color="white" />}
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
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            width: '90%',
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../assets/images/icon-google.png')}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: 600,
              fontFamily: fonts.MainBold,
            }}>
            Sign in with Google
          </Text>
          <View style={{width: 15, height: 15}} />
        </TouchableOpacity>

        <View
          style={{width: '100%', alignItems: 'center', gap: 20, marginTop: 20}}>
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
              Don't have account? Click{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(screens.Register);
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.orange,
                  fontFamily: fonts.MainBold,
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
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
              Forget password? Click{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.orange,
                  fontFamily: fonts.MainBold,
                }}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
