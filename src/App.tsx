import 'react-native-gesture-handler';
import React, {memo, ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './redux/store';
import {useSelector} from './redux/store';
import {themeTypeSelector} from './modules/app/selectors';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Themes} from './common/theme';
import {AuthProvider} from './contexts/AuthProvider';
import {AppNavigator} from './navigation/AppNavigator';
import {ToastProvider} from 'react-native-toast-notifications';

const persistor = persistStore(store);

const AppThemeProvider = ({children}: {children: ReactNode | ReactNode[]}) => {
  const userSelectedThemeType = useSelector(themeTypeSelector);
  const systemThemeType = useColorScheme();
  const themeType =
    userSelectedThemeType === 'system' && systemThemeType ? systemThemeType : userSelectedThemeType;
  const theme = Themes[themeType];

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={theme.barStyle} />
      {children}
    </ThemeProvider>
  );
};

const AppComponent = (): JSX.Element => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppThemeProvider>
            <ToastProvider textStyle={{fontSize: 16}}>
              <AppNavigator />
            </ToastProvider>
          </AppThemeProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

const App = memo(AppComponent);

export default App;
