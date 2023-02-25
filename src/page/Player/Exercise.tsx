import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {CircularProgressBar, AnalysisDisplay, AnalysisBar} from '../../common/components';
import {orientation, normalize, normalizeHalf} from '../../utils/normalize';

const CPUImg = require('../../assets/img/cpu.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: normalize(60),
    backgroundColor: COLORS.WHITE,
    paddingVertical: normalizeHalf(30),
    paddingHorizontal: normalizeHalf(20),
  },
  analysisWrapper: {
    flexDirection: 'column',
  },
  logsWrapper: {
    flexDirection: 'row',
    gap: normalize(30),
  },
  logWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  percentValue: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(36),
    color: COLORS.BLACK,
  },
  unitText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.XXL),
    color: COLORS.BLACK,
    marginLeft: normalize(10, orientation.HEIGHT),
  },
  percentDescText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.MS),
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    width: normalize(120),
  },
  cpuImg: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
    marginTop: normalize(16, orientation.HEIGHT),
  },
  percentGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: normalize(20, orientation.HEIGHT),
  },
  analysisTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.L),
    color: COLORS.TEXT_DARK_LIGHT,
  },
  analysisInfoWrapper: {
    flexDirection: 'column',
    width: normalize(400),
    marginTop: normalize(40, orientation.HEIGHT),
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  dataTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.BLACK,
  },
  dataInfoWrapper: {
    flexDirection: 'column',
  },
  dataInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(30, orientation.HEIGHT),
  },
});

const ExerciseScreen = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.analysisWrapper}>
        <View style={styles.logsWrapper}>
          <CircularProgressBar
            progress={75}
            diameter={normalize(190)}
            startColor={COLORS.GRADIENT_ORANGE}
            endColor={COLORS.GRADIENT_GREEN}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.ctbd')}</Text>
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={normalize(190)}
            startColor={COLORS.GRADIENT_ORANGE}
            endColor={COLORS.GRADIENT_GREEN}>
            <View style={styles.logWrapper}>
              <View style={styles.percentGroupWrapper}>
                <Text style={styles.percentValue}>.06</Text>
                <Text style={styles.unitText}>Miles</Text>
              </View>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.td')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
        </View>
        <View style={styles.analysisInfoWrapper}>
          <Text style={styles.analysisTitle}>{t('personalInfo.exercise.aza')}</Text>
          <AnalysisDisplay
            lLabel={t('personalInfo.exercise.ma')}
            lHours="22:00"
            rLabel={t('personalInfo.exercise.pa')}
            rHours="05:21"
            dividerColor={COLORS.DIVIDER_ORANGE}
            customStyle={{marginTop: normalize(16)}}
          />
          <AnalysisBar
            startLabel={t('personalInfo.exercise.recovery')}
            startValue={24}
            middleLabel={t('personalInfo.exercise.weightLoss')}
            middleValue={46}
            endLabel={t('personalInfo.exercise.maximum')}
            endValue={30}
            customStyle={{marginTop: normalize(16)}}
          />
        </View>
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.dataTitle}>Body Data</Text>
        <View style={styles.dataInfoWrapper}>
          <View style={styles.dataInfoRow}>
            <CircularProgressBar
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_YELLOW}
              endColor={COLORS.GRADIENT_ORANGE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.exercise.rr')}</Text>
                <Image style={styles.cpuImg} source={CPUImg} />
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_YELLOW}
              endColor={COLORS.GRADIENT_ORANGE}>
              <View style={styles.logWrapper}>
                <View style={styles.percentGroupWrapper}>
                  <Text style={styles.percentValue}>98.6</Text>
                  <Text style={styles.unitText}>F</Text>
                </View>
                <Text style={styles.percentDescText}>{t('personalInfo.exercise.abt')}</Text>
                <Image style={styles.cpuImg} source={CPUImg} />
              </View>
            </CircularProgressBar>
          </View>
        </View>
        <View style={styles.dataInfoRow}>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.ahr')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.hr')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
        </View>
        <View style={styles.dataInfoRow}>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.hrr')}</Text>
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.mm')}</Text>
            </View>
          </CircularProgressBar>
        </View>
      </View>
    </View>
  );
};

export default ExerciseScreen;
