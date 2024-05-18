// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // assuming you're using Expo
import MyStack from './navigation';


import HomeScreen from './Screens/Home';
import BookingsScreen from './Screens/Bookings';
import ProfileScreen from './Screens/Profile';
import SettingsScreen from './Screens/Settings';
import BookingForm from './Screens/bookingForm';
import white from './Description/white';
import HillView from './Description/Hillview';
import Kitinda from './Description/Kitinda';
import suncity from './Description/sun';
import pink from './Description/pink';
import RegisterScreen from './user/register';
import LoginScreen from './user/login';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="white" component={white} />
      <Stack.Screen name="book" component={BookingForm} />
      <Stack.Screen name="hillview" component={HillView} />
      <Stack.Screen name="kitinda" component={Kitinda} />
      <Stack.Screen name="pink" component={pink} />
      <Stack.Screen name="Sun" component={suncity} />
      <Stack.Screen name="back" component={BookingsScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      
    
    </Stack.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'home-outline';
            } else if (route.name === 'Bookings') {
              iconName = focused ? 'ios-add' : 'receipt-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'person-outline';
            }
            else if (route.name === 'View') {
              iconName = focused ? 'ios-unlock' : 'views-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Bookings" component={BookingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="View" component={ProfileStackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
       
      </Tab.Navigator>

  
    </NavigationContainer>
    
  );
}

export default App;

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="white" component={white} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


