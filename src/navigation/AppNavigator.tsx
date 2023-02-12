import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../contexts/AuthProvider';
import Loading from '../common/components/Loading';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';

export const AppNavigator = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }
  return <NavigationContainer>{authData ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};
