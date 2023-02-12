import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../page/Dashboard';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
