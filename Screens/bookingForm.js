import React, { useState } from 'react';
import { Alert, Button, View, ScrollView, StyleSheet,  TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BookingForm = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [email, setEmail] = useState('');
  const [estate, setEstate] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [entryDate, setEntryDate] = useState('');

  const handleBookNow = () => {
    if (!username || !phoneNumber || !admissionNumber || !email || !estate || !roomNumber || !entryDate) {
      Alert.alert('Error', 'Please fill in all required fields.');
    } else {
      console.log('Booking Details:', {
        username,
        phoneNumber,
        admissionNumber,
        email,
        estate,
        roomNumber,
        entryDate,
      });

      Alert.alert(
        'Booking Processing',
        'Your booking is being processed. Please wait for a confirmation message.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Admission Number"
        value={admissionNumber}
        onChangeText={setAdmissionNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Picker
        style={styles.input}
        selectedValue={estate}
        onValueChange={(itemValue, itemIndex) => setEstate(itemValue)}
      >
        <Picker.Item label="Select Estate" value="" />
        <Picker.Item label="White" value="White" />
        <Picker.Item label="House" value="House" />
        <Picker.Item label="Pink House" value="Pink House" />
        <Picker.Item label="HillView" value="HillView" />
        <Picker.Item label="Suncity" value="Suncity" />
        <Picker.Item label="Kitinda" value="Kitinda" />
        <Picker.Item label="Blessed" value="Blessed" />
        <Picker.Item label="Kobel" value="Kobel" />
        <Picker.Item label="Vegas" value="Vegas" />
        <Picker.Item label="nDouble" value="nDouble" />
        <Picker.Item label="New York" value="New York" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        value={roomNumber}
        onChangeText={setRoomNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Entry Date"
        value={entryDate}
        onChangeText={setEntryDate}
      />

      <Button
        title="Book Now"
        onPress={handleBookNow}
        style={styles.button} // Add this style
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 4,
  },
});

export default BookingForm;
