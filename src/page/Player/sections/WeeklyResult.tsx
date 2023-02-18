import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../common/constants/StyleConstants';
import WeeklyChart from './WeeklyChart';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  resultWrapper: {
    flexDirection: 'column',
    borderWidth: 1.5,
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  resultTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK,
  },
  lastWeek: {
    position: 'absolute',
    zIndex: 9,
    left: 75,
    bottom: 7,
  },
  currentWeek: {
    position: 'absolute',
    zIndex: 9,
    left: 210,
    bottom: 7,
  },
});

const WeeklyResult = () => {
  const {t} = useTranslation();

  const redPercent = 30;
  const chartHeight = 160;

  const calcRedPos = percent => {
    const initPos = (percent * chartHeight) / 100;

    if (percent > 80) return initPos + 56;
    if (percent > 50) return initPos + 42;
    if (percent > 20) return initPos + 28;
    if (percent > 0) return initPos + 14;
  };

  const chartStyles = StyleSheet.create({
    chartWrapper: {
      position: 'relative',
      flexDirection: 'column',
      marginTop: 20,
      marginBottom: 20,
    },
    rowWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    redRowWrapper: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      zIndex: 1,
      left: 0,
    },
    percentText: {
      width: 40,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: FONT_SIZE.XXS,
      color: COLORS.TEXT_GREY,
      textAlign: 'right',
      paddingRight: 10,
    },
    redText: {
      color: COLORS.TEXT_RED,
    },
    greyDashLine: {
      flex: 1,
      borderTopWidth: 1.5,
      borderStyle: 'dashed',
      borderTopColor: COLORS.DIVIDER_GREY,
    },
    redDashLine: {
      borderTopColor: COLORS.DIVIDER_RED,
    },
    height20: {
      flex: 1,
      height: (chartHeight * 20) / 100,
    },
    height30: {
      flex: 1,
      height: (chartHeight * 30) / 100,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultTitle}>{t('personalInfo.snapshot.weeklyResult.caption')}</Text>
        <View style={chartStyles.chartWrapper}>
          <View style={chartStyles.rowWrapper}>
            <Text style={chartStyles.percentText}>100%</Text>
            <View style={chartStyles.greyDashLine} />
          </View>
          <View style={chartStyles.height20} />
          <View style={chartStyles.rowWrapper}>
            <Text style={chartStyles.percentText}>80%</Text>
            <View style={chartStyles.greyDashLine} />
          </View>
          <View style={chartStyles.height30} />
          <View style={chartStyles.rowWrapper}>
            <Text style={chartStyles.percentText}>50%</Text>
            <View style={chartStyles.greyDashLine} />
          </View>
          <View style={chartStyles.height30} />
          <View style={chartStyles.rowWrapper}>
            <Text style={chartStyles.percentText}>20%</Text>
            <View style={chartStyles.greyDashLine} />
          </View>
          <View style={chartStyles.height20} />
          <View style={chartStyles.rowWrapper}>
            <Text style={chartStyles.percentText}>0%</Text>
            <View style={chartStyles.greyDashLine} />
          </View>
          <View style={[chartStyles.redRowWrapper, {bottom: calcRedPos(redPercent)}]}>
            <Text style={[chartStyles.percentText, chartStyles.redText]}>{redPercent}%</Text>
            <View style={[chartStyles.greyDashLine, chartStyles.redDashLine]} />
          </View>
          <View style={styles.lastWeek}>
            <WeeklyChart
              label="Last Week"
              hl={100}
              pn={60}
              ha={90}
              br={40}
              chartHeight={chartHeight}
            />
          </View>
          <View style={styles.currentWeek}>
            <WeeklyChart
              label="Current Week"
              hl={100}
              pn={40}
              ha={80}
              br={60}
              chartHeight={chartHeight}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeeklyResult;
