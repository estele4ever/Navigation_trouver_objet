import React from 'react';
import { View, Button } from 'react-native';
import SearchByWordScreen from './SearchByWordScreen';
import SearchByPhotoScreen from './SearchByPhotoScreen';


export default function ChoiceScreen({ navigation }) {
  const navigateToSearchByWord = () => {
    navigation.navigate('SearchByWordScreen');
  };

  const navigateToSearchByPhoto = () => {
    navigation.navigate('SearchByPhotoScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Chercher avec un mot" onPress={navigateToSearchByWord} />
      <Button title="Chercher avec une photo" onPress={navigateToSearchByPhoto} />
    </View>
  );
}
