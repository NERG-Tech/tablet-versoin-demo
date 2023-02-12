import {StatusBarStyle} from 'react-native';
import {COLORS} from '../constants/StyleConstants';

const CommonTheme = {
  gridUnit: 4,
  fontFamily: 'Helvetica',
};

export const LightTheme = {
  barStyle: 'dark-content' as StatusBarStyle,
  colors: {
    background: COLORS.BACKGROUND,
    text: COLORS.BLACK,
    ...COLORS,
  },
  ...CommonTheme,
};

export const DefaultTheme = LightTheme;

export const DarkTheme = {
  barStyle: 'light-content' as StatusBarStyle,
  colors: {
    background: COLORS.BLACK,
    text: COLORS.BACKGROUND,
    ...COLORS,
  },
  ...CommonTheme,
};

export type ThemeType = 'light' | 'dark' | 'system';

export const Themes: Record<ThemeType, typeof DefaultTheme> = {
  light: LightTheme,
  dark: DarkTheme,
  system: DefaultTheme,
};
