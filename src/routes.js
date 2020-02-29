import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import OneBurger from './pages/One_Select/index';
import StartApp from './pages/StartApp/index';
const Routes = createAppContainer(
  createSwitchNavigator({
    StartApp,
    OneBurger,
  }),
);

export default Routes;
