import React, { useState } from 'react';
import { Button, TextInput, View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
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

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User registered successfully
      const user = userCredential.user;
      console.log('User registered:', user);
      Alert.alert('Success', 'User registered successfully.');
    } catch (error) {
      // Handle errors
      console.log('Error registering user:', error.message);
      Alert.alert('Error', 'Failed to register user. Please try again.');
    }
  };

  const handleProceed = () => {
    // Implement logic to navigate to the next screen or perform other actions
    console.log('Proceed clicked');
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
      <Button title="Register" onPress={() => navigation.navigate("Register")}/>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
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
  proceedText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
