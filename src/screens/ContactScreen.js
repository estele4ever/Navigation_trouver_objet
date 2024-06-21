import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ContactScreen({ navigation }) {
  const navigateToAbout = () => {
    navigation.navigate('ChoiceScreen');
  };

  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      <TouchableOpacity onPress={navigateToAbout}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('./image/thirdpage.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}