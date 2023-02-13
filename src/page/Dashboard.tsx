import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAuth} from '../contexts/AuthProvider';
import MainLayout from '../layouts/MainLayout';
import {AppStackParamList} from '../navigation/AppStack';

type DashboardNavigationProp = StackNavigationProp<AppStackParamList, 'dashboard'>;

const DashboardScreen = () => {
  const navigation = useNavigation<DashboardNavigationProp>();

  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <MainLayout>
      <Button title="Sign Out" onPress={signOut} />
      <Button title="GM Mode" onPress={() => navigation.navigate('gm_mode')} />
    </MainLayout>
  );
};

export default DashboardScreen;
