
import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
 
// Pages 
import HomeScreen from './src/screens/HomeScreen'; 
import AboutScreen from './src/screens/AboutScreen'; 
import ContactScreen from './src/screens/ContactScreen';
import ChoiceScreen from './src/screens/ChoiceScreen'; 
 
const Stack = createNativeStackNavigator(); 
 
function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Contact" component={ContactScreen} /> 
        <Stack.Screen name="Settings" component={AboutScreen} /> 
        <Stack.Screen name="choix" component={ChoiceScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
} 
 
export default App;