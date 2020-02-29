import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from '../../pages/Home/index.js';

const HomeRoute = () => <Home />;

const SearchRoute = () => <Text>Search</Text>;

const MenuRoute = () => <Text>Menu</Text>;

const FavoriteRoute = () => <Text>Favorite</Text>;

export default class MenuBottom extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'home',
        title: 'Home',
        icon: 'home',
        color: '#6BB364',
      },
      {
        key: 'search',
        title: 'Search',
        icon: 'magnify',
        color: '#6BB364',
      },
      {
        key: 'menu',
        title: 'Menu',
        icon: 'text',
        color: '#6BB364',
      },
      {
        key: 'favorite',
        title: 'Favorite',
        icon: 'heart',
        color: '#6BB364',
      },
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    menu: MenuRoute,
    favorite: FavoriteRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
