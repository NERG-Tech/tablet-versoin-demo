import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import {useAuth} from '../contexts/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DashboardScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Dashboard SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default DashboardScreen;
