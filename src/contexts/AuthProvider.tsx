import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TAuthData, authService} from '../services/authService';

type AuthContextData = {
  authData?: TAuthData;
  loading: boolean;
  setLoading(isLoading: boolean): void;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  errors?: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}: {children: any}) => {
  const [authData, setAuthData] = useState<TAuthData>();
  const [errors, setErrors] = useState<string>();

  // the AuthContext start with loading equals true
  // and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Every time the App is opened, this provider is rendered
    // and call de loadStorage function.
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      // Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        // If there are data, it's converted to an Object and the state is updated.
        const _authData: TAuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.log('auth err: ', error);
    } finally {
      // loading finished
      setLoading(false);
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      // call the service passing credential (email and password).
      // In a real App this data will be provided by the user from some InputText components.
      const _authData = await authService.loginWithEmail({email, password});

      setAuthData(_authData);

      // clear Error msg
      setErrors('');
      // Set the data in the context, so the App can be notified
      // and send the user to the AuthStack

      // Persist the data in the Async Storage
      // to be recovered in the next user session.
      AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    } catch (error) {
      setErrors('User not found..');
      console.log('log in err: ', error);
    } finally {
      // loading finished
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await authService.revokeToken(authData?.accessToken);
      // Remove data from context, so the App can be notified
      // and send the user to the AuthStack
      setAuthData(undefined);

      // Remove the data from Async Storage
      // to NOT be recoverede in next session.
      await AsyncStorage.removeItem('@AuthData');
    } catch (error) {
      console.log('sign out err: ', error);
    }
  };

  return (
    // This component will be used to encapsulate the whole App,
    // so all components will have access to the Context
    <AuthContext.Provider
      value={{
        authData,
        loading,
        setLoading,
        signIn,
        signOut,
        errors,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};
