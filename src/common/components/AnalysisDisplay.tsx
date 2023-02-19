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
  },
  hourWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 20,
  },
  lWrapper: {
    flex: 1,
    paddingVertical: 20,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: COLORS.GREY,
  },
  lContentWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  rWrapper: {
    flex: 1,
    paddingVertical: 20,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: COLORS.GREY_LIGHT,
  },
  rContentWrapper: {
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
