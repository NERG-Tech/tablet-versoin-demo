import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GradientCircularProgress} from 'react-native-circular-gradient-progress';
import {COLORS} from '../constants/StyleConstants';

type TProps = {
  progress: number;
  diameter: number;
  startColor: string;
  endColor: string;
  emptyColor?: string;
  strokeWidth?: number;
  children: any;
};

export const CircularProgressBar = (props: TProps) => {
  const {progress, diameter, startColor, endColor, emptyColor, strokeWidth, children} = props;
  const radius = diameter / 2;

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    children: {
      position: 'absolute',
      left: radius,
      top: radius,
      zIndex: -1,
      transform: [{translateX: -radius}, {translateY: -radius}],
    },
    content: {
      flex: 1,
      width: diameter,
      height: diameter,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: radius,
      backgroundColor: COLORS.TRANSPARENT,
    },
  });

  return (
    <View style={styles.container}>
      <GradientCircularProgress
        progress={progress}
        size={diameter}
        startColor={startColor}
        middleColor={endColor}
        endColor={startColor}
        strokeWidth={strokeWidth || 2}
        emptyColor={emptyColor || COLORS.BACKGROUND_GREY}
      />
      <View style={styles.children}>
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};
