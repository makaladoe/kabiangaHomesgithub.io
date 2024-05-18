import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Kitinda = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/single1.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Kitchen</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/single2.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Master Bedroom</Text>
        </View>
        {/* Add more house containers as needed */}
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/single3.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Lighting</Text>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require('../assets/washroom.jpeg')} // Replace with the path to your image
            style={styles.image}
          />
          <Text style={styles.houseName}>Wash Room</Text>
        </View>
      </ScrollView>
      
      <View style={styles.houseDescriptionView}>
        <Text style={styles.houseDescriptionTitle}>
          {"\n"}
          Location: Bridge
          {"\n"}
          Water Details: Borehole Water
          {"\n"}
          House Condition: Well-maintained
          {"\n"}
          Available Space: 12
          {"\n"}
          Tiled: No
          {"\n"}
          Electricity Payment Terms: SelfPaid
          {"\n"}
          Rent Per Month Ksh : 3000
        </Text>
		<TouchableOpacity  onPress={() => navigation.navigate("back")} ><Text>Go Back</Text></TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("book")} style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
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
  houseDescriptionView: {
    marginTop: 10, // Adjusted marginTop to bring the description closer to the images
    paddingHorizontal: 20,
  },
  houseDescriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  bookNowButton: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Kitinda;
