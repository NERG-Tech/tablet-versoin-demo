import React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';
import {orientation, normalize} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize(16),
  },
  label: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.MS),
    color: COLORS.TEXT_GREY_LIGHT,
  },
  hourText: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: normalize(28),
    color: COLORS.WHITE,
  },
  hourWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(9),
    marginTop: normalize(20, orientation.HEIGHT),
  },
  lWrapper: {
    justifyContent: 'center',
    height: normalize(120, orientation.HEIGHT),
    paddingVertical: normalize(20, orientation.HEIGHT),
    borderTopLeftRadius: normalize(16),
    borderBottomLeftRadius: normalize(16),
    backgroundColor: COLORS.GREY,
  },
  lContentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: normalize(30),
  },
  rWrapper: {
    justifyContent: 'center',
    height: normalize(120, orientation.HEIGHT),
    paddingVertical: normalize(20, orientation.HEIGHT),
    borderTopRightRadius: normalize(16),
    borderBottomRightRadius: normalize(16),
    backgroundColor: COLORS.GREY_LIGHT,
  },
  rContentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: normalize(30),
    borderLeftWidth: normalize(5),
  },
});

type TProps = {
  lLabel: string;
  rLabel: string;
  lHours: string;
  rHours: string;
  lIcon?: React.ReactNode;
  rIcon?: React.ReactNode;
  dividerColor: string;
  customStyle?: ViewStyle;
};

export const AnalysisDisplay = (props: TProps) => (
  <View style={StyleSheet.flatten([styles.container, props.customStyle])}>
    <View style={styles.lWrapper}>
      <View style={styles.lContentWrapper}>
        <Text style={styles.label}>{props.lLabel}</Text>
        <View style={styles.hourWrapper}>
          {!!props.lIcon && props.lIcon}
          <Text style={styles.hourText}>{props.lHours} hrs</Text>
        </View>
      </View>
    </View>
    <View style={styles.rWrapper}>
      <View
        style={StyleSheet.flatten([styles.rContentWrapper, {borderLeftColor: props.dividerColor}])}>
        <Text style={styles.label}>{props.rLabel}</Text>
        <View style={styles.hourWrapper}>
          {!!props.rIcon && props.rIcon}
          <Text style={styles.hourText}>{props.rHours} hrs</Text>
        </View>
      </View>
    </View>
  </View>
);
