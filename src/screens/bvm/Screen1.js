import React, {useEffect, useState} from 'react';
import AxiosInstance from '../../helper/AxiosInstance';
import {View, Text, TouchableOpacity, FlatList, Image, Alert} from 'react-native';
import {Heart} from 'iconsax-react-native';

const Screen1 = () => {
  const axios = AxiosInstance();
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('/products');
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavorites = id => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        Alert.alert('Đã xoá khỏi danh sách yêu thích');
        return prevFavorites.filter(favId => favId !== id);
      } else {
        Alert.alert('Đã thêm vào danh sách yêu thích');
        return [...prevFavorites, id];
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View></View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Your dish
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            borderWidth: 1,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>x</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: '100%',
                marginTop: 20,
                borderRadius: 10,
                backgroundColor: 'white',
              }}>
              <View>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 150,
                    width: '100%',
                    borderRadius: 10,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => handleAddToFavorites(item.id)}>
                  <Heart
                    color="red"
                    size={18}
                    variant={favorites.includes(item.id) ? 'Bold' : 'Linear'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{padding: 20}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Screen1;
