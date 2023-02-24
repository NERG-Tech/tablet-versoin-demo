import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {CircularProgressBar, AnalysisDisplay, AnalysisBar} from '../../common/components';
import {orientation, normalize, normalizeHalf, normalizeRate} from '../../utils/normalize';

const CPUImg = require('../../assets/img/cpu.png');
const SunImg = require('../../assets/img/hoc/sun.png');
const MoonImg = require('../../assets/img/hoc/moon.png');

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
    marginLeft: normalize(10),
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
    fontSize: FONT_SIZE.L,
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
    marginTop: normalize(30),
  },
  sunImg: {
    width: normalize(21),
    height: normalize(21),
    resizeMode: 'contain',
  },
  moonImg: {
    width: normalize(17),
    height: normalize(17),
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
            diameter={normalize(190)}
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
            diameter={normalize(190)}
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
            lIcon={<Image style={styles.moonImg} source={MoonImg} />}
            rLabel={t('personalInfo.rest.wakeup')}
            rHours="05:21"
            rIcon={<Image style={styles.sunImg} source={SunImg} />}
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
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_PURPLE_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.rest.vm')}</Text>
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_PURPLE_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.rest.br')}</Text>
              </View>
            </CircularProgressBar>
          </View>
        </View>
        <View style={styles.dataInfoRow}>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.bo')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
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
            progress={100}
            diameter={normalize(170)}
            startColor={COLORS.GRADIENT_PURPLE_LIGHT}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.rest.rhr')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <CircularProgressBar
            progress={100}
            diameter={normalize(170)}
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
