import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import white from '../Description/white';


const Stack = createStackNavigator();


function MyStack1() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="white" component={white} />
	  
    </Stack.Navigator>
  );
}

export default MyStack1;