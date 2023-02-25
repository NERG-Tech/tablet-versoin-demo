import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import {orientation, normalize, normalizeHalf} from '../../../utils/normalize';

type TProps = {
  label: string;
  hl: number;
  pn: number;
  ha: number;
  br: number;
  chartHeight: number;
};

const styles = StyleSheet.create({
  hlWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: normalizeHalf(5),
    paddingHorizontal: normalizeHalf(5),
    borderTopLeftRadius: normalizeHalf(5),
    borderTopRightRadius: normalizeHalf(5),
    backgroundColor: COLORS.CHART_BLUE,
  },
  pnWrapper: {
    width: normalize(26),
    borderTopLeftRadius: normalizeHalf(5),
    borderTopRightRadius: normalizeHalf(5),
    backgroundColor: COLORS.CHART_YELLOW,
  },
  haWrapper: {
    width: normalize(26),
    borderTopLeftRadius: normalizeHalf(5),
    borderTopRightRadius: normalizeHalf(5),
    backgroundColor: COLORS.CHART_GREEN,
  },
  brWrapper: {
    width: normalize(26),
    borderTopLeftRadius: normalizeHalf(5),
    borderTopRightRadius: normalizeHalf(5),
    backgroundColor: COLORS.CHART_PINK,
  },
  textWrapper: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: normalize(103),
    left: 0,
    bottom: -normalize(30, orientation.HEIGHT),
  },
  text: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
});

const WeeklyChart = (props: TProps) => {
  const {label, hl, pn, ha, br, chartHeight} = props;

  const calcHeight = percent => {
    const basicHeight = (percent * chartHeight) / 100;

    if (percent > 80) return basicHeight + 56;
    if (percent > 50) return basicHeight + 42;
    if (percent > 20) return basicHeight + 28;
    if (percent > 0) return basicHeight + 14;
  };

  return (
    <View style={[styles.hlWrapper, {height: calcHeight(hl)}]}>
      <View style={[styles.pnWrapper, {height: calcHeight(pn)}]} />
      <View style={[styles.haWrapper, {height: calcHeight(ha)}]} />
      <View style={[styles.brWrapper, {height: calcHeight(br)}]} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
};

export default WeeklyChart;
