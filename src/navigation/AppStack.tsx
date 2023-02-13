import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import * as NavigationConstants from '../common/constants/NavigationConstants';
import HomeScreen from '../page/Home';

export type AppStackParamList = {
  [NavigationConstants.HOME]: undefined;
  [NavigationConstants.PERSONAL_INFO]: {userId: string};
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> = StackNavigationProp<
  AppStackParamList,
  RouteName
>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<AppStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Navigator initialRouteName={NavigationConstants.HOME}>
      <Screen
        name={NavigationConstants.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationConstants.PERSONAL_INFO}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
