import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const NearBy = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/One.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>White House</Text>
          <Text style={styles.houseLocation}>Kabianga</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/two.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Pink House </Text>
          <Text style={styles.houseLocation}>Kapcheluch</Text>
        </View>
        {/* Add more house containers as needed */}
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/three.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>HillView</Text>
          <Text style={styles.houseLocation}>Keter road</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/four.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Sun City</Text>
          <Text style={styles.houseLocation}>Chepnyogaa</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/Kitinda.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Kitinda</Text>
          <Text style={styles.houseLocation}>Bridge</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/vegas.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Vegas</Text>
          <Text style={styles.houseLocation}>Chepnyogaa</Text>
        </View>
      </ScrollView>

	  

      
	  <ScrollView style={styles.placeListContainer}>

      
        <Text style={styles.place}>Kitinda</Text>
        <Text style={styles.place}>Blessed</Text>
        <Text style={styles.place}>Kobel</Text>
        <Text style={styles.place}>Vegas</Text>
        <Text style={styles.place}>New York</Text>
        <Text style={styles.place}>HillView</Text>
        <Text style={styles.place}>White House</Text>
        <Text style={styles.place}>Pink House</Text>
        <Text style={styles.place}>Kapmaso</Text>
        <Text style={styles.place}>Sunrise</Text>
        <Text style={styles.place}>Green Resort</Text>
        {/* Add more places as needed */}
      </ScrollView>
    
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
    marginBottom: 30, // Increased margin bottom for additional space
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
  estatesTitle: {
    fontSize: 12, // Increased font size for better visibility
    fontWeight: 'bold',
    marginTop: 30, // Increased marginTop for additional space
    paddingHorizontal: 20,
  },
  placeListContainer: {
    marginTop: 100, // Increased marginTop for additional space
    paddingHorizontal: 20,
  },
  place: {
    fontSize: 14, // Increased font size for better visibility
    marginBottom: 0, // Increased marginBottom for additional space
  },
});

export default NearBy;
