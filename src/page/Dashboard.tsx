import React from 'react';
import {Button} from 'react-native';
import {useAuth} from '../contexts/AuthProvider';
import MainLayout from '../layouts/MainLayout';

const DashboardScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <MainLayout>
      <Button title="Sign Out" onPress={signOut} />
    </MainLayout>
  );
};

export default DashboardScreen;
