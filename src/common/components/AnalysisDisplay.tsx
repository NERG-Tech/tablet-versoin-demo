import React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
  label: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_GREY_LIGHT,
  },
  hourText: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 28,
    color: COLORS.WHITE,
    marginTop: 20,
  },
  hWrapper: {
    flex: 1,
    paddingVertical: 20,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: COLORS.GREY,
  },
  hContentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  dWrapper: {
    flex: 1,
    paddingVertical: 20,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: COLORS.GREY_LIGHT,
  },
  dContentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    borderLeftWidth: 5,
  },
});

type TProps = {
  lLabel: string;
  rLabel: string;
  lHours: string;
  rHours: string;
  dividerColor: string;
  customStyle?: ViewStyle;
};

export const AnalysisDisplay = (props: TProps) => (
  <View style={StyleSheet.flatten([styles.container, props.customStyle])}>
    <View style={styles.hWrapper}>
      <View style={styles.hContentWrapper}>
        <Text style={styles.label}>{props.lLabel}</Text>
        <Text style={styles.hourText}>{props.lHours} hrs</Text>
      </View>
    </View>
    <View style={styles.dWrapper}>
      <View
        style={StyleSheet.flatten([styles.dContentWrapper, {borderLeftColor: props.dividerColor}])}>
        <Text style={styles.label}>{props.rLabel}</Text>
        <Text style={styles.hourText}>{props.rHours} hrs</Text>
      </View>
    </View>
  </View>
);
