import {getProduct} from '../api/api';
import {colors} from '../contants/colors';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {fonts} from '../contants/fonts';
import {Star1} from 'iconsax-react-native';

const DetailProduct = () => {
  const route = useRoute();
  const {id} = route.params;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const handleGetProduct = async () => {
    try {
      setLoading(true);
      const res = await getProduct(id);
      if (res.status) {
        setProduct(res.product);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flex: 1, backgroundColor: colors.background}}>
      <View style={{height: '60%'}}>
        <Image
          source={{uri: product.image}}
          style={{width: '100%', height: '100%'}}
        />
        <View
          style={{
            bottom: 0,
            padding: 20,
            height: 160,
            width: '100%',
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#00000050',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{color: 'white', fontSize: 20, fontFamily: fonts.MainBold}}>
            {product.name}
          </Text>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Star1 color={colors.orange} size={20} variant="Bold" />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: fonts.MainBold,
              }}>
              {product.rating}{' '}
              <Text
                style={{
                  color: colors.gray,
                  fontFamily: fonts.Main,
                  fontSize: 10,
                }}>
                ({product.voting})
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          paddingBottom: 20,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: colors.gray,
              fontFamily: fonts.MainBold,
              marginTop: 20,
            }}>
            Description
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: 'white',
              marginTop: 10,
              fontFamily: fonts.Main,
            }}>
            {product.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                color: colors.gray,
                fontFamily: fonts.Main,
                fontSize: 12,
              }}>
              Price
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: colors.orange,
                fontFamily: fonts.MainBold,
              }}>
              ${' '}
              <Text style={{fontSize: 20, color: 'white'}}>
                {product.price}
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={{
              padding: 10,
              width: '60%',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.orange,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: fonts.MainBold,
              }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailProduct;
