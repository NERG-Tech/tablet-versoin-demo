import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import MainLayout from '../layouts/MainLayout';
import {AppStackParamList} from '../navigation/AppStack';

type GMModeNavigationProp = StackNavigationProp<AppStackParamList, 'dashboard'>;

const GMModeScreen = () => {
  const navigation = useNavigation<GMModeNavigationProp>();

  return (
    <MainLayout>
      <Text>GM Mode</Text>
      <Button title="Dashboard" onPress={() => navigation.navigate('dashboard')} />
    </MainLayout>
  );
};

export default GMModeScreen;
