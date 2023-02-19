import React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemIcon: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },
  itemDescWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  itemDescLabel: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_GREY_MIDDLE,
  },
  itemDescValue: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK_LIGHT,
    marginTop: 10,
  },
});

type TProps = {
  startLabel: string;
  startValue: number;
  middleLabel: string;
  middleValue: number;
  endLabel: string;
  endValue: number;
  customStyle?: ViewStyle;
};

export const AnalysisBar = (props: TProps) => (
  <View style={StyleSheet.flatten([styles.container, props.customStyle])}>
    <View style={styles.itemWrapper}>
      <View style={[styles.itemIcon, {backgroundColor: COLORS.INFO_MORNING}]} />
      <View style={styles.itemDescWrapper}>
        <Text style={styles.itemDescLabel}>{props.startLabel}</Text>
        <Text style={styles.itemDescValue}>{props.startValue} %</Text>
      </View>
    </View>
    <View style={styles.itemWrapper}>
      <View style={[styles.itemIcon, {backgroundColor: COLORS.INFO_AFTERNOON}]} />
      <View style={styles.itemDescWrapper}>
        <Text style={styles.itemDescLabel}>{props.middleLabel}</Text>
        <Text style={styles.itemDescValue}>{props.middleValue} %</Text>
      </View>
    </View>
    <View style={styles.itemWrapper}>
      <View style={[styles.itemIcon, {backgroundColor: COLORS.INFO_NIGHT}]} />
      <View style={styles.itemDescWrapper}>
        <Text style={styles.itemDescLabel}>{props.endLabel}</Text>
        <Text style={styles.itemDescValue}>{props.endValue} %</Text>
      </View>
    </View>
  </View>
);
