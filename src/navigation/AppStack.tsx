import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import * as NavigationConstants from '../common/constants/NavigationConstants';
import DashboardScreen from '../page/Dashboard';

export type AppStackParamList = {
  [NavigationConstants.DASHBOARD]: undefined;
  [NavigationConstants.GM_MODE]: undefined;
  [NavigationConstants.COACH_MODE]: undefined;
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
    <Navigator initialRouteName={NavigationConstants.DASHBOARD}>
      <Screen
        name={NavigationConstants.DASHBOARD}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationConstants.GM_MODE}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationConstants.COACH_MODE}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationConstants.PERSONAL_INFO}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
