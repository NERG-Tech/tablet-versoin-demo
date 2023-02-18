import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import * as NavigationConstants from '../common/constants/NavigationConstants';
import HomeScreen from '../page/Home';
import PlayerScreen from '../page/Player';

export type AppStackParamList = {
  [NavigationConstants.HOME]: {activeNav: string};
  [NavigationConstants.PERSONAL_INFO]: {userId: string; activeTab: string};
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
    <Navigator initialRouteName={NavigationConstants.PERSONAL_INFO}>
      <Screen
        name={NavigationConstants.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
        initialParams={{activeNav: NavigationConstants.DASHBOARD}}
      />
      <Screen
        name={NavigationConstants.PERSONAL_INFO}
        component={PlayerScreen}
        options={{headerShown: false}}
        initialParams={{userId: '', activeTab: NavigationConstants.SNAPSHOT}}
      />
    </Navigator>
  );
};
