import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from './Button';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';
import {orientation, normalize, normalizeHalf} from '../../../utils/normalize';

const CircleLeftImg = require('../../../assets/img/circleLeft.png');

const styles = StyleSheet.create({
  gradientButton: {
    flex: 1,
    borderRadius: normalize(24),
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: normalizeHalf(5),
    borderRadius: normalize(24),
    paddingVertical: normalize(10, orientation.HEIGHT),
    paddingHorizontal: normalize(16),
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
  },
  buttonText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  arrowImg: {
    width: normalize(21),
    height: normalize(21),
    resizeMode: 'contain',
  },
});

type TProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  startColor: string;
  endColor: string;
  label: string;
  customStyle?: ViewStyle;
  gradientStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const GradientBorderButton = (props: TProps) => {
  const {startColor, endColor, label} = props;
  return (
    <Button onPress={props.onPress}>
      <LinearGradient
        colors={[startColor, endColor]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.flatten([styles.gradientButton, props.gradientStyle])}>
        <View style={StyleSheet.flatten([styles.innerContainer, props.customStyle])}>
          <Text style={StyleSheet.flatten([styles.buttonText, props.textStyle])}>{label}</Text>
          <Image style={styles.arrowImg} source={CircleLeftImg} />
        </View>
      </LinearGradient>
    </Button>
  );
};
