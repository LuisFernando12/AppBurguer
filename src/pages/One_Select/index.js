import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import alface from '../../assets/acompanhamentos/alface.png';
import bacon from '../../assets/acompanhamentos/bacon.png';
import mussarela from '../../assets/acompanhamentos/mussarela.png';
import molhoBarbecue from '../../assets/acompanhamentos/molho_barbecue.png';
import molhoCheddar from '../../assets/acompanhamentos/molho_cheddar.png';

const Acompanhamentos = [
  {
    id: 1,
    price: 2.0,
    imagem: bacon,
  },
  {
    id: 2,
    price: 2.0,
    imagem: mussarela,
  },
  {
    id: 3,
    price: 2.0,
    imagem: alface,
  },
  {
    id: 4,
    price: 2.0,
    imagem: molhoBarbecue,
  },
  {
    id: 5,
    price: 2.0,
    imagem: molhoCheddar,
  },
];

export default function OneBurger({navigation}) {
  const Burger = navigation.getParam('select');

  const [total, setTotal] = useState(0.0);
  const [heart, setHeart] = useState('heart-outline');
  const [select, setSelect] = useState('window-close');
  const favorite = [];

  function Acompanhamento({id, imagem}) {
    return (
      <View style={style.box_acompanhamento} key={id}>
        <TouchableOpacity style={style.select}>
          <Icon
            id={id}
            name={select}
            type="material-community"
            size={20}
            color="red"
            onPress={() => {
              if (select === 'window-close') {
                setSelect('check');
              } else {
                setSelect('window-close');
              }
            }}
          />
        </TouchableOpacity>
        <Image style={style.imagem_acompanhamento} source={imagem} />
      </View>
    );
  }

  return (
    <>
      <View style={style.header}>
        <Icon
          name="arrow-back"
          size={30}
          color="#000"
          onPress={() => {
            navigation.navigate('StartApp');
          }}
        />
      </View>
      {/* Box Burger */}
      <View style={style.box}>
        <View style={style.favorite}>
          <Icon
            name={heart}
            type="material-community"
            color="#fdfd"
            onPress={() => {
              if (heart === 'heart-outline') {
                setHeart('heart');
                favorite.push(Burger);
              } else {
                setHeart('heart-outline');
              }
            }}
          />
        </View>
        <Image source={Burger.imagem} style={style.imagem} />
        <Text style={style.title}>{Burger.title}</Text>
        <Text style={style.description}>{Burger.description}</Text>
        <View style={style.line_price}>
          <Text style={style.price}>{`$ ${Burger.price}`}</Text>
          <Icon
            name="shopping-cart"
            color="#fff"
            onPress={() => {
              setTotal(Burger.price);
            }}
          />
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={style.list}
        data={Acompanhamentos}
        horizontal
        keyExtractor={item => item.id.toFixed()}
        renderItem={({item}) => (
          <Acompanhamento
            id={item.id}
            price={item.price}
            imagem={item.imagem}
          />
        )}
      />
      <View style={style.bottom_cart}>
        <Text style={style.total_itens}>0</Text>
        <Text>View cart</Text>
        <Text>{total === 0 ? '$0,00' : `$${total}`}</Text>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  list: {top: 50, marginRight: 15},
  header: {
    height: 60,
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingTop: 5,
  },
  box: {
    width: '80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#99FF8F',
    alignSelf: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 25,
    color: 'gray',
    marginLeft: 20,
    textAlign: 'center',
  },
  description: {
    textAlign: 'left',
    fontSize: 15,
    color: 'gray',
    marginLeft: 20,
    top: 15,
    overflow: 'hidden',
  },
  line_price: {
    height: 50,
    backgroundColor: '#3D6639',
    top: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 20,
  },
  price: {
    fontSize: 18,
    color: '#fff',
    left: 20,
  },
  favorite: {
    height: 50,
    width: 50,
    marginRight: 20,
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#3D6639',
    left: 20,
    justifyContent: 'center',
  },
  box_acompanhamento: {
    width: 120,
    height: 120,
    backgroundColor: '#99FF8F',
    marginLeft: 30,
    borderRadius: 20,
  },
  select: {
    height: 30,
    width: 30,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#E8EAE8',
  },
  imagem_acompanhamento: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  bottom_cart: {
    height: 40,
    backgroundColor: '#6BB364',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total_itens: {
    fontSize: 20,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});
