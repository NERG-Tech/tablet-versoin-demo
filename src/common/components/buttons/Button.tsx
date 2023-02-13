import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type TProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  customStyle?: ViewStyle;
  children: any;
};

export const Button = (props: TProps) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={StyleSheet.flatten([styles.container, props.customStyle])}
    hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
    {props.children}
  </TouchableOpacity>
);

export const HighlightButton = (props: TProps) => (
  <TouchableHighlight
    onPress={props.onPress}
    style={StyleSheet.flatten([styles.container, props.customStyle])}
    activeOpacity={0.85}
    underlayColor={COLORS.TRANSPARENT}
    hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
    {props.children}
  </TouchableHighlight>
);
