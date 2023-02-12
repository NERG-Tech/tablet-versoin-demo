import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../page/auth/SignIn';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
