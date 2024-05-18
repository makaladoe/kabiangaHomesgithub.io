import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import White from '../Description/white';
import LoginScreen from '../user/login';
import RegisterScreen from '../user/register';

const ProfileScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Connect with Kabianga Homes</Text>
      <View style={styles.buttonContainer}>
        <Button title="Register With Us" onPress={handleRegister} style={styles.button} />
        <View style={styles.buttonSpacer} />
        <Button title="Login to Create Profile" onPress={handleLogin} style={styles.button} />
      </View>
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
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonSpacer: {
    marginVertical: 10,
  },
  button: {
    marginBottom: 10,
    borderRadius: 100, // Set a large value for circular corners
  },
});

export default ProfileScreen;
