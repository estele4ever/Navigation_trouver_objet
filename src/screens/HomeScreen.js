import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Accueil</Text>
      <Button
        title="Aller aux détails"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
