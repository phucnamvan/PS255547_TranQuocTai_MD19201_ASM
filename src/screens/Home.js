import {fonts} from '../contants/fonts';
import {colors} from '../contants/colors';
import React, {useEffect, useState} from 'react';
import {getCategories, getProducts} from '../api/api';
import {Menu, SearchNormal1, Star, Star1} from 'iconsax-react-native';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {screens} from '../contants/screens';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const handleGetCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      if (res.status) {
        setCategories(res.categories);
        setSelectedCategory(res.categories[0].name);
        setSelectedCategoryId(res.categories[0]._id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetProducts = async category => {
    try {
      setLoadingProducts(true);
      const res = await getProducts(category);
      if (res.status) {
        setProducts(res.products);
      }
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  useEffect(() => {
    handleGetProducts(selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.menuColor,
          }}>
          <Menu color={'white'} size={16} variant="Bold" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30, borderRadius: 8}}
            source={require('../assets/images/avatar.jpg')}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          width: '80%',
          fontSize: 28,
          marginTop: 20,
          color: 'white',
          fontFamily: fonts.MainBold,
        }}>
        Find the best coffee for you
      </Text>

      <View
        style={{
          marginTop: 20,
          borderRadius: 10,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          backgroundColor: colors.input,
        }}>
        <SearchNormal1 size={20} color={colors.gray3} variant="Bold" />
        <TextInput
          style={{
            width: '80%',
            padding: 10,
            fontSize: 12,
            color: 'white',
            paddingLeft: 20,
            fontFamily: fonts.Main,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.gray3}
        />
      </View>

      <View>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 20}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedCategory(item.name);
                setSelectedCategoryId(item._id);
              }}
              style={{
                marginRight: 20,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      selectedCategory === item.name
                        ? colors.orange
                        : colors.gray3,
                    fontFamily: fonts.MainBold,
                  }}>
                  {item.name}
                </Text>
                {selectedCategory === item.name && (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      marginTop: 5,
                      borderRadius: 4,
                      backgroundColor: colors.orange,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 120,
        }}>
        {loadingProducts ? (
          <ActivityIndicator size="large" color={colors.orange} />
        ) : (
          <FlatList
            numColumns={2}
            data={products}
            contentContainerStyle={{paddingBottom: 120}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(screens.DetailProduct, {id: item._id});
                }}
                style={{
                  gap: 5,
                  width: '48%',
                  height: 200,
                  padding: 10,
                  marginRight: 10,
                  marginBottom: 20,
                  borderRadius: 20,
                  backgroundColor: colors.input,
                }}>
                <View>
                  <Image
                    style={{width: '100%', height: 100, borderRadius: 8}}
                    source={{uri: item.image}}
                  />
                  <View
                    style={{
                      gap: 3,
                      top: 0,
                      right: 0,
                      width: '40%',
                      flexDirection: 'row',
                      position: 'absolute',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomLeftRadius: 20,
                      backgroundColor: '#00000060',
                    }}>
                    <Star1 color={colors.orange} size={10} variant="Bold" />
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'white',
                        fontFamily: fonts.MainBold,
                      }}>
                      {item.rating}
                    </Text>
                  </View>
                </View>

                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontFamily: fonts.MainBold,
                  }}>
                  {item.name}
                </Text>

                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 9,
                    color: 'white',
                    fontFamily: fonts.Main,
                  }}>
                  {item.description}
                </Text>

                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: colors.orange,
                        fontFamily: fonts.MainBold,
                      }}>
                      $
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'white',
                        fontFamily: fonts.MainBold,
                      }}>
                      {item.price}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.orange,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'white',
                        fontFamily: fonts.Main,
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
