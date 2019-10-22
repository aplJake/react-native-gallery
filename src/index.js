import React from 'react';
import Layout from './app/components/layout';
import Navigation from './app/navigation/navigators';
import {createAppContainer} from 'react-navigation';

const AppNavigation = createAppContainer(Navigation);

const App = () => {
  return <AppNavigation theme="light" />;
};

export default App;
