import React from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent} from 'react-native';
import {Button} from './Button';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  text: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type TProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  customStyle: ViewStyle;
  textStyle?: TextStyle;
  label: string;
};

export const RoundedGradientButton = (props: TProps) => {
  return (
    <Button onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.BLUE_LIGHT, COLORS.BLACK]}
        style={StyleSheet.flatten([styles.gradientButton, props.customStyle])}>
        <Text style={StyleSheet.flatten([styles.text, props.textStyle])}>{props.label}</Text>
      </LinearGradient>
    </Button>
  );
};
