import 'react-native-gesture-handler';
import React, {memo, ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {useSelector} from './redux/store';
import {themeTypeSelector} from './modules/app/selectors';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Themes} from './common/theme';
import {AuthProvider} from './contexts/AuthProvider';
import {AppNavigator} from './navigation/AppNavigator';

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
        <AppThemeProvider>
          <AppNavigator />
        </AppThemeProvider>
      </Provider>
    </AuthProvider>
  );
};

const App = memo(AppComponent);

export default App;
