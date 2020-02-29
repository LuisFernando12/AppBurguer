import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
/* Imagens */
import X_Burguer from '../../assets/x-burgue.png';
import X_Bacon from '../../assets/x-bacon.png';
import X_Egg from '../../assets/x-egg.png';
import X_Tudo from '../../assets/x-tudopng.png';
import profile from '../../assets/profile.jpg';
import combo3 from '../../assets/combos/Chicken-Combo.png';

const Burgers = [
  {
    id: 1,
    title: 'X-Burguer',
    imagem: X_Burguer,
    price: '7.00',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum at unde nisi expedita ad..',
  },

  {
    id: 2,
    title: 'X-Bacon',
    imagem: X_Bacon,
    price: '15.00',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: 3,
    title: 'X-EGG',
    imagem: X_Egg,
    price: '10.00',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: 4,
    title: 'X-Tudo',
    imagem: X_Tudo,
    price: '12.00',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Combos = [
  {
    id: 1,
    off: '20% OFF',
    imagem: combo3,
    price: '4.80',
  },
  {
    id: 2,
    off: '30% OFF',
    imagem: combo3,
    price: '5.00',
  },
  {
    id: 3,
    off: '10% OFF',
    imagem: combo3,
    price: '8.00',
  },
  // {
  //   id: 4,
  //   off: '50%',
  //   image: '',
  //   price: '6.80',
  // },
  // {
  //   id: 5,
  //   off: '40%',
  //   image: '',
  //   price: '7.50',
  // },
];

function Home({navigation}) {
  function Combo({id, off, price, imagem}) {
    return (
      <TouchableOpacity style={style.box_combo} key={id}>
        <Text style={style.off}>{off}</Text>
        <Image source={imagem} style={style.imagem_combo} />
        <Text style={style.price_combo}>${price}</Text>
      </TouchableOpacity>
    );
  }
  function Item({id, title, price, imagem, description}) {
    return (
      <TouchableOpacity
        style={style.box}
        key={id}
        onPress={() => {
          let num = id - 1;
          let select = Burgers[num];
          navigation.navigate('OneBurger', {select});
        }}>
        <Image source={imagem} style={style.imagem} />
        <Text style={style.title}>{title}</Text>
        <Text style={style.price}>${price}</Text>
        <Text style={style.description}>{description}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <>
      <View style={style.header}>
        <Image source={profile} style={style.img_profile} />
        <Text style={style.logradouro}>R. Pedroso Alvarega, 1284</Text>
      </View>

      <ScrollView>
        <Text style={style.title_principal}>Our burgues</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={style.list}
          data={Burgers}
          horizontal
          keyExtractor={item => item.id.toFixed()}
          renderItem={({item}) => (
            <Item
              id={item.id}
              imagem={item.imagem}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          )}
        />
        <Text style={style.subtitle}>Our Combos</Text>
        <FlatList
          style={style.list_combo}
          data={Combos}
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toFixed()}
          renderItem={({item}) => (
            <Combo off={item.off} imagem={item.imagem} price={item.price} />
          )}
        />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  list: {maxHeight: 370},
  list_combo: {minHeight: 170},
  box: {
    width: 250,
    minHeight: 250,
    borderRadius: 20,
    backgroundColor: '#99FF8F',
    marginLeft: 35,
    paddingLeft: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  title_principal: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 25,
    fontWeight: 'bold',
    color: '#707070',
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#707070',
    fontSize: 25,
    marginLeft: 25,
    marginBottom: 15,
  },
  title: {
    fontSize: 25,
    color: 'gray',
    marginLeft: 20,
  },
  price: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
    marginLeft: 20,
  },
  description: {
    textAlign: 'left',
    fontSize: 15,
    color: 'gray',
    marginLeft: 20,
  },
  box_combo: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 20,
    borderRadius: 10,
    backgroundColor: '#99FF8F',
    marginLeft: 35,
  },
  off: {
    height: 40,
    width: 50,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#3D6639',
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10,
  },
  imagem_combo: {
    width: 80,
    height: 60,
    alignSelf: 'center',
  },
  price_combo: {
    fontSize: 14,
    color: '#707070',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    fontSize: 26,
    alignItems: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
  },
  img_profile: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginLeft: 30,
  },
  logradouro: {
    fontSize: 20,
    marginLeft: 30,
    color: 'gray',
    fontFamily: 'Verdana',
  },
});
export default withNavigation(Home);
