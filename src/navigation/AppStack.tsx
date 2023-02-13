import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Navigations from '../common/constants/NavigationConstants';
import DashboardScreen from '../page/Dashboard';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={Navigations.DASHBOARD}>
      <Stack.Screen
        name={Navigations.DASHBOARD}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Navigations.GM_MODE}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Navigations.COACH_MODE}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Navigations.PERSONAL_INFO}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
