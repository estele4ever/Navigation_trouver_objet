import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase/app';
import 'firebase/auth';

// Pages
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

// Configuration de Firebase
const firebaseConfig = {
  
  // Remplacez ces valeurs par vos propres identifiants Firebase
  apiKey: 'AIzaSyAILB0Wk3pGwJNIuduRx-EIjxsXH8ob9lc',
  authDomain: 'com.company.ProjetGuess',
  projectId: '341736771276',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'projetguess'
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Vérifier l'état de connexion au démarrage de l'application
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserInfo(user);
      } else {
        setIsLoggedIn(false);
        setUserInfo(null);
      }
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await firebase.auth().signInWithPopup(provider);
      setIsLoggedIn(true);
      setUserInfo(user);
    } catch (error) {
      console.error('Error during Google authentication:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Settings" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;