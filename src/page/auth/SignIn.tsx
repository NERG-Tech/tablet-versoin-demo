import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Loading from '../../common/components/Loading';

import {useAuth} from '../../contexts/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      {loading ? <Loading /> : <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};

export default SignInScreen;
