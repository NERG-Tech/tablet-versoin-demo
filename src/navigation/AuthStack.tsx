import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import * as NavigationConstants from '../common/constants/NavigationConstants';
import SignInScreen from '../page/auth/SignIn';

export type AuthStackParamList = {
  [NavigationConstants.LOGIN]: undefined;
};

export type AuthStackNavigationProp<RouteName extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, RouteName>;

export type AuthNavigations = {
  [RouteName in keyof AuthStackParamList]: AuthStackNavigationProp<RouteName>;
};

export type AuthStackRoutes = {
  [RouteName in keyof AuthStackParamList]: RouteProp<AuthStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name={NavigationConstants.LOGIN}
        component={SignInScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
