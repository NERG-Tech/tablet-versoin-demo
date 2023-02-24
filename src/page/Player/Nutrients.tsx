import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Button} from '../../common/components';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {
  CircularProgressBar,
  RoundedGradientButton,
  AnalysisDisplay,
  AnalysisBar,
} from '../../common/components';
import {orientation, normalize, normalizeHalf} from '../../utils/normalize';

const CPUImg = require('../../assets/img/cpu.png');

interface BodyDataI {
  category: string;
  percent: string;
  desc: string;
}

const bodyData: Array<BodyDataI> = [
  {
    category: 'Water',
    percent: '30/100%',
    desc: 'Dietary Reference Intake (DRI)',
  },
  {
    category: 'Carbohydrates',
    percent: '30/100%',
    desc: 'Dietary Reference Intake (DRI)',
  },
  {
    category: 'Carbohydrates',
    percent: '30/100%',
    desc: 'Dietary Reference Intake (DRI)',
  },
  {
    category: 'Carbohydrates',
    percent: '30/100%',
    desc: 'Dietary Reference Intake (DRI)',
  },
  {
    category: 'Carbohydrates',
    percent: '30/100%',
    desc: 'Dietary Reference Intake (DRI)',
  },
];

const tabs = {
  macro: "Macro's",
  vitamins: 'Vitamins',
  minerals: 'Minerals',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
    paddingVertical: normalize(30, orientation.HEIGHT),
    paddingHorizontal: normalize(20),
  },
  logsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(30),
  },
  logBtnText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.L),
    color: COLORS.WHITE,
  },
  logBtn: {
    width: normalize(180),
    height: normalize(60, orientation.HEIGHT),
    borderRadius: normalize(24),
  },
  logDescWrapper: {
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
    marginBottom: normalize(20),
  },
  cpuImg: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
  },
  percentGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: normalize(20, orientation.HEIGHT),
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(60, orientation.HEIGHT),
    gap: normalize(60),
  },
  analysisWrapper: {
    flexDirection: 'column',
  },
  analysisTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.L),
    color: COLORS.TEXT_DARK_LIGHT,
  },
  analysisInfoWrapper: {
    flexDirection: 'column',
    width: normalize(400),
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  dataTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
  dataInfoWrapper: {
    flexDirection: 'column',
    marginTop: normalize(30, orientation.HEIGHT),
  },
  dataTabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(10, orientation.HEIGHT),
  },
  dataTabWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: normalize(100),
  },
  dataTabTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    paddingVertical: 8,
  },
  dataTabBottom: {
    width: '100%',
    height: 8,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.WHITE_ALPHA,
    backgroundColor: COLORS.BACKGROUND,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  dataTabActiveBottom: {
    width: '100%',
    height: 8,
    marginTop: 8,
    borderRadius: 4,
    backgroundColor: COLORS.BLUE_LIGHT,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  dataContentWrapper: {
    flexDirection: 'column',
    gap: normalize(24),
    paddingTop: normalize(20, orientation.HEIGHT),
  },
});

const dataItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(12, orientation.HEIGHT),
    paddingHorizontal: normalize(16),
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderWidth: 1.5,
    borderRadius: normalize(24),
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  categoryText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.MS),
    color: COLORS.TEXT_DARK,
  },
  percentText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
  descText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.XS),
    color: COLORS.TEXT_DARK,
    width: normalize(100),
  },
});

const NutrientsScreen = () => {
  const [activeTab, setActiveTab] = useState('macro');
  const {t} = useTranslation();

  const DatatItem = ({
    category,
    percent,
    desc,
  }: {
    category: string;
    percent: string;
    desc: string;
  }) => (
    <View style={dataItemStyles.container}>
      <Text style={dataItemStyles.categoryText}>{category}</Text>
      <Text style={dataItemStyles.percentText}>{percent}</Text>
      <Text style={dataItemStyles.descText}>{desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logsWrapper}>
        <View style={styles.logWrapper}>
          <CircularProgressBar
            progress={75}
            diameter={normalize(190)}
            startColor={COLORS.GRADIENT_SKY}
            endColor={COLORS.GRADIENT_BLUE}>
            <View style={styles.logDescWrapper}>
              <View style={styles.percentGroupWrapper}>
                <Text style={styles.percentValue}>3.7</Text>
                <Text style={styles.unitText}>Liters</Text>
              </View>
              <Text style={styles.percentDescText}>{t('personalInfo.nutrients.dht')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <RoundedGradientButton
            startColor={COLORS.GRADIENT_SKY_LIGHT}
            endColor={COLORS.GRADIENT_BLUE_LIGHT}
            customStyle={styles.logBtn}
            textStyle={styles.logBtnText}
            label="View Log"
          />
        </View>
        <View style={styles.logWrapper}>
          <CircularProgressBar
            progress={75}
            diameter={normalize(190)}
            startColor={COLORS.GRADIENT_YELLOW}
            endColor={COLORS.GRADIENT_SKY}>
            <View style={styles.logDescWrapper}>
              <Text style={styles.percentValue}>2000</Text>
              <Text style={styles.percentDescText}>{t('personalInfo.nutrients.dht')}</Text>
              <Image style={styles.cpuImg} source={CPUImg} />
            </View>
          </CircularProgressBar>
          <RoundedGradientButton
            startColor={COLORS.GRADIENT_SKY_LIGHT}
            endColor={COLORS.GRADIENT_BLUE_LIGHT}
            customStyle={styles.logBtn}
            textStyle={styles.logBtnText}
            label="View Log"
          />
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.analysisWrapper}>
          <Text style={styles.analysisTitle}>Nutrient Log Analysis</Text>
          <View style={styles.analysisInfoWrapper}>
            <AnalysisDisplay
              lLabel="Hydration"
              lHours="02:00"
              rLabel="Diet"
              rHours="05:21"
              dividerColor={COLORS.DIVIDER_SKY}
              customStyle={{marginTop: normalize(16)}}
            />
            <AnalysisBar
              startLabel="Morning"
              startValue={24}
              middleLabel="Afternooon"
              middleValue={46}
              endLabel="Night"
              endValue={30}
              customStyle={{marginTop: normalize(16)}}
            />
          </View>
        </View>
        <View style={styles.dataWrapper}>
          <Text style={styles.dataTitle}>Body Data</Text>
          <View style={styles.dataInfoWrapper}>
            <View style={styles.dataTabsWrapper}>
              {Object.keys(tabs).map((tab: string, i: number) => (
                <Button
                  key={i}
                  customStyle={styles.dataTabWrapper}
                  onPress={() => setActiveTab(tab)}>
                  <Text style={styles.dataTabTitle}>{tabs[tab]}</Text>
                  {tab === activeTab ? (
                    <View style={styles.dataTabActiveBottom} />
                  ) : (
                    <View style={styles.dataTabBottom} />
                  )}
                </Button>
              ))}
            </View>
            <View style={styles.dataContentWrapper}>
              {activeTab === 'macro' &&
                bodyData.map((data: BodyDataI, i: number) => (
                  <DatatItem
                    key={i}
                    category={data.category}
                    percent={data.percent}
                    desc={data.desc}
                  />
                ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NutrientsScreen;
