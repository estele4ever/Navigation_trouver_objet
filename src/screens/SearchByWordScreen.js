
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SearchByWordScreen = () => {
  const [motRecherche, setMotRecherche] = useState('');

  const handleRecherche = () => {
    // Vous pouvez ajouter ici la logique pour traiter le mot saisi par l'utilisateur
    console.log('Mot recherché :', motRecherche);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Entrez un mot à rechercher :</Text>
      <TextInput
        placeholder="Saisir un mot..."
        value={motRecherche}
        onChangeText={setMotRecherche}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Rechercher" onPress={handleRecherche} />
    </View>
  );
};

export default SearchByWordScreen;
