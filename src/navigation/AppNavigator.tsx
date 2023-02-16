import React from 'react';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {useAuth} from '../contexts/AuthProvider';
import {Loading} from '../common/components';
import {AuthStack, AuthStackRoutes, AuthNavigations} from './AuthStack';
import {AppStack, AppStackRoutes, AppNavigations} from './AppStack';

export type Navigations = AuthNavigations & AppNavigations;

export type Routes = AuthStackRoutes & AppStackRoutes;

export const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const {authData, loading} = useAuth();

  const isLogin = authData?.token.length;

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
