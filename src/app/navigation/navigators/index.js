import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import * as screenNames from '../screen_names';
import HomeScreen from '../../features/home_gallery/components';

const Navigation = createStackNavigator({
  [screenNames.HOME]: {
    screen: HomeScreen,
  },
});

export default Navigation;
