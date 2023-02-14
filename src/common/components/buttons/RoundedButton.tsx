import React from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent} from 'react-native';
import {Button} from './Button';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  text: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.WHITE,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    backgroundColor: COLORS.BLUE,
    borderRadius: 24,
  },
});

type TProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  customStyle?: ViewStyle;
  textStyle?: TextStyle;
  label: string;
};

export const RoundedButton = (props: TProps) => {
  return (
    <Button
      customStyle={StyleSheet.flatten([styles.button, props.customStyle])}
      onPress={props.onPress}>
      <Text style={StyleSheet.flatten([styles.text, props.textStyle])}>{props.label}</Text>
    </Button>
  );
};
