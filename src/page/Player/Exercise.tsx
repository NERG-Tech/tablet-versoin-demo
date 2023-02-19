import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {CircularProgressBar, AnalysisDisplay, AnalysisBar} from '../../common/components';

const CPUImg = require('../../assets/img/cpu.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 60,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  analysisWrapper: {
    flexDirection: 'column',
  },
  logsWrapper: {
    flexDirection: 'row',
    gap: 30,
  },
  logWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  percentValue: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: 36,
    color: COLORS.BLACK,
  },
  unitText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.BLACK,
    marginLeft: 10,
  },
  percentDescText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    width: 120,
  },
  cpuImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: 16,
  },
  percentGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  analysisTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK_LIGHT,
  },
  analysisInfoWrapper: {
    flexDirection: 'column',
    width: 400,
    marginTop: 40,
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  dataTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.BLACK,
  },
  dataInfoWrapper: {
    flexDirection: 'column',
  },
  dataInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
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
            diameter={190}
            startColor={COLORS.GRADIENT_ORANGE}
            endColor={COLORS.GRADIENT_GREEN}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.ctbd')}</Text>
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={190}
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
            customStyle={{marginTop: 16}}
          />
          <AnalysisBar
            startLabel={t('personalInfo.exercise.recovery')}
            startValue={24}
            middleLabel={t('personalInfo.exercise.weightLoss')}
            middleValue={46}
            endLabel={t('personalInfo.exercise.maximum')}
            endValue={30}
            customStyle={{marginTop: 16}}
          />
        </View>
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.dataTitle}>Body Data</Text>
        <View style={styles.dataInfoWrapper}>
          <View style={styles.dataInfoRow}>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_YELLOW}
              endColor={COLORS.GRADIENT_ORANGE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.exercise.rr')}</Text>
                <Image style={styles.cpuImg} source={CPUImg} />
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={75}
              diameter={170}
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
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.ahr')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={170}
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
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_ORANGE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.exercise.hrr')}</Text>
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={170}
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
