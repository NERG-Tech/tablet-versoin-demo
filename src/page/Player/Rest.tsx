import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {CircularProgressBar, AnalysisDisplay, AnalysisBar} from '../../common/components';

const CPUImg = require('../../assets/img/cpu.png');
const SunImg = require('../../assets/img/hoc/sun.png');
const MoonImg = require('../../assets/img/hoc/moon.png');

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
  sunImg: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  moonImg: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
});

const RestScreen = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.analysisWrapper}>
        <View style={styles.logsWrapper}>
          <CircularProgressBar
            progress={75}
            diameter={190}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_PURPLE_MIDDLE}>
            <View style={styles.logWrapper}>
              <View style={styles.percentGroupWrapper}>
                <Text style={styles.percentValue}>745</Text>
                <Text style={styles.unitText}>Min</Text>
              </View>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.rt')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={190}
            startColor={COLORS.GRADIENT_PURPLE_MIDDLE}
            endColor={COLORS.GRADIENT_PURPLE_DARK}>
            <View style={styles.logWrapper}>
              <View style={styles.percentGroupWrapper}>
                <Text style={styles.percentValue}>30</Text>
                <Text style={styles.unitText}>%</Text>
              </View>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.qs')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
        </View>
        <View style={styles.analysisInfoWrapper}>
          <Text style={styles.analysisTitle}>{t('personalInfo.rest.sa')}</Text>
          <AnalysisDisplay
            lLabel={t('personalInfo.rest.bedTime')}
            lHours="22:00"
            lIcon={<Image style={styles.sunImg} source={SunImg} />}
            rLabel={t('personalInfo.rest.wakeup')}
            rHours="05:21"
            rIcon={<Image style={styles.moonImg} source={MoonImg} />}
            dividerColor={COLORS.DIVIDER_PURPLE}
            customStyle={{marginTop: 16}}
          />
          <AnalysisBar
            startLabel={t('personalInfo.rest.remSleep')}
            startValue={24}
            middleLabel={t('personalInfo.rest.deepSleep')}
            middleValue={46}
            endLabel={t('personalInfo.rest.lightSleep')}
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
              startColor={COLORS.GRADIENT_PURPLE_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.rest.vm')}</Text>
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_PURPLE_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <View style={styles.percentGroupWrapper}>
                  <Text style={styles.percentValue}>2000</Text>
                  <Text style={styles.unitText}>F</Text>
                </View>
                <Text style={styles.percentDescText}>{t('personalInfo.rest.br')}</Text>
              </View>
            </CircularProgressBar>
          </View>
        </View>
        <View style={styles.dataInfoRow}>
          <CircularProgressBar
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.bo')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.bg')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
        </View>
        <View style={styles.dataInfoRow}>
          <CircularProgressBar
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.rhr')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={75}
            diameter={170}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.bee')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
        </View>
      </View>
    </View>
  );
};

export default RestScreen;
