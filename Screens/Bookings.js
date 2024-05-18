// BookingsScreen.js

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BookingForm from './bookingForm';


const BookingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("white")}  >
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/One.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>White House</Text>
            <Text style={styles.houseLocation}>Kabianga</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("pink")}  >
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/two.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Pink House </Text>
            <Text style={styles.houseLocation}>Kapcheluch</Text>
          </View>
        </TouchableOpacity>
        {/* Add more TouchableOpacity components wrapping house containers as needed */}
        <TouchableOpacity onPress={() => navigation.navigate("hillview")}  >
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/three.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>HillView</Text>
            <Text style={styles.houseLocation}>Keter road</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sun")}  >
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/four.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Sun City</Text>
            <Text style={styles.houseLocation}>Chepnyogaa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("kitinda")}  >
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/Kitinda.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Kitinda</Text>
            <Text style={styles.houseLocation}>Bridge</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/blessed.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Blessed</Text>
            <Text style={styles.houseLocation}>Kapcheluch</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/kobel.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Kobel</Text>
            <Text style={styles.houseLocation}>Bridge</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/vegas.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>Vegas</Text>
            <Text style={styles.houseLocation}>Kabianga</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/nDouble.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>nDouble</Text>
            <Text style={styles.houseLocation}>Bridge</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.houseContainer}>
            <Image
              source={require('../assets/newYork.jpeg')} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.houseName}>New York</Text>
            <Text style={styles.houseLocation}>Chepnyogaa</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <BookingForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  houseContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 70, // Increased margin bottom for additional space
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  houseName: {
    fontSize: 15, // Increased font size for better visibility
    fontWeight: 'bold',
    marginTop: 1, // Increased marginTop for additional space
  },
  houseLocation: {
    fontSize: 12, // Increased font size for better visibility
    color: 'gray',
    marginTop: 1,
  },
});

export default BookingsScreen;
