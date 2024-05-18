import React, { useState } from 'react';
import { Button, TextInput, View, Alert, StyleSheet } from 'react-native';
import firebase from './firebase';

import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase project config
  apiKey: "AIzaSyBTdrhhus3jYPQWEdvAWAhZ4x6Q7GCR_Ak",
  authDomain: "kabiangahomes.firebaseapp.com",
  projectId: "kabiangahomes",
  storageBucket: "kabiangahomes.appspot.com",
  messagingSenderId: "656556242815",
  appId: "1:656556242815:web:fb2934dbd4d94fd0a00c4a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
    } catch (error) {
      // Handle errors
      console.log('Error logging in:', error.message);
      Alert.alert('Error', 'Failed to log in. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
  },
});

export default LoginScreen;
