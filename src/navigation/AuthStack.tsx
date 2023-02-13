import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Navigations from '../common/constants/NavigationConstants';
import SignInScreen from '../page/auth/SignIn';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Navigations.LOGIN}
        component={SignInScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
