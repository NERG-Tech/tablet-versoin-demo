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
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  logBtnText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.L,
    color: COLORS.WHITE,
  },
  logBtn: {
    width: 180,
    height: 60,
    borderRadius: 24,
  },
  logDescWrapper: {
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
    marginBottom: 20,
  },
  cpuImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  percentGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    gap: 60,
  },
  analysisWrapper: {
    flexDirection: 'column',
    marginTop: 16,
  },
  analysisTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK_LIGHT,
  },
  analysisInfoWrapper: {
    flexDirection: 'column',
    width: 400,
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  dataTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  dataInfoWrapper: {
    flexDirection: 'column',
    marginTop: 30,
  },
  dataTabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dataTabWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
  },
  dataTabTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
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
    gap: 24,
    paddingTop: 20,
  },
});

const dataItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.BACKGROUND,
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderWidth: 1.5,
    borderRadius: 24,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK_LIGHT,
    shadowOffset: {width: 2, height: 2},
  },
  categoryText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
  },
  percentText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  descText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_DARK,
    width: 100,
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
            diameter={190}
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
            diameter={190}
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
            <AnalysisDisplay hHours="02:00" dHours="05:21" customStyle={{marginTop: 16}} />
            <AnalysisBar morning={24} afternoon={46} night={30} customStyle={{marginTop: 16}} />
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
