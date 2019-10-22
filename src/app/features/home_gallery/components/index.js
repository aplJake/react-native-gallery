import React from 'react';
import {Text, View} from 'react-native';
import homeGalleryStyles from './styles';

const HomeScreen = () => {
  return (
    <View style={homeGalleryStyles.wrapper}>
      <Text>Gallery Item</Text>
      <Text>Gallery Item</Text>
      <Text>Gallery Item</Text>
    </View>
  );
};

export default HomeScreen;
