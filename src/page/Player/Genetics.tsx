import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {
  Button,
  RoundedButton,
  CheckListItem,
  AttributeInput,
  CircularProgressBar,
} from '../../common/components';

const SkeletonIMg = require('../../assets/img/skeleton.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 60,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  playerInfoInputsWrapper: {
    flexDirection: 'column',
  },
  bmiWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  bmiInfoWrapper: {
    flexDirection: 'column',
  },
  bmiTitle: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  bmiInputsWrapper: {
    flexDirection: 'column',
    gap: 20,
    width: 180,
    marginTop: 24,
  },
  bmiInputWrapper: {
    flex: 1,
    height: 58,
    borderRadius: 16,
  },
  bmiInputLabel: {
    paddingHorizontal: 20,
  },
  bmiButtonWrapper: {
    height: 58,
    borderRadius: 16,
  },
  bmiButtonText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.WHITE,
    textAlign: 'center',
    width: 110,
  },
  bmiOddWrapper: {
    flex: 1,
    height: 58,
  },
  bmiOddlabel: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.XS,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: 60,
  },
  bmiOddText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.WHITE,
    textAlign: 'center',
    width: 90,
  },
  skeletonImg: {
    width: 151,
    height: 376,
    resizeMode: 'contain',
  },
  geneticsHealthWrapper: {
    flexDirection: 'column',
  },
  geneticsHealthTitle: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
  },
  geneticsHealthInfoWrapper: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  geneticsHealthInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  attrBtn: {
    flex: 1,
  },
  gahInputLabel: {
    paddingHorizontal: 15,
  },
  gahButtonWrapper: {
    flex: 1,
    height: 58,
    borderRadius: 16,
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
    gap: 40,
    marginTop: 30,
  },
  dataInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 110,
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
  },
});

const GeneticsScreen = () => {
  const [isBmiBtn, setBmiBtn] = useState(true);

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.playerInfoInputsWrapper}>
        <View style={styles.bmiWrapper}>
          <View style={styles.bmiInfoWrapper}>
            <Text style={styles.bmiTitle}>{t('personalInfo.genetics.bmi.caption')}</Text>
            <View style={styles.bmiInputsWrapper}>
              <AttributeInput
                label={t('personalInfo.genetics.bmi.age')}
                value={'34'}
                placeholder="34"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                onChangeText={(text: string) => {}}
              />
              <AttributeInput
                label={t('personalInfo.genetics.bmi.weight')}
                value={'145 LBS'}
                placeholder="145 LBS"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                onChangeText={(text: string) => {}}
              />
              <AttributeInput
                label={t('personalInfo.genetics.bmi.height')}
                value={'5’5”'}
                placeholder="5’5”"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                onChangeText={(text: string) => {}}
              />
              {isBmiBtn ? (
                <RoundedButton
                  customStyle={styles.bmiButtonWrapper}
                  textStyle={styles.bmiButtonText}
                  onPress={() => {}}
                  label={t('personalInfo.genetics.bmi.apm')}
                />
              ) : (
                <AttributeInput
                  label={t('personalInfo.genetics.bmi.ko')}
                  value={t('personalInfo.genetics.bmi.pm')}
                  isOnlyText={true}
                  inputStyle={styles.bmiOddWrapper}
                  labelStyle={styles.bmiOddlabel}
                  textStyle={styles.bmiOddText}
                />
              )}
            </View>
          </View>
          <Image style={styles.skeletonImg} source={SkeletonIMg} />
        </View>
        <View style={styles.geneticsHealthWrapper}>
          <Text style={styles.geneticsHealthTitle}>{t('personalInfo.genetics.gah.caption')}</Text>
          <View style={styles.geneticsHealthInfoWrapper}>
            <View style={styles.geneticsHealthInfoRow}>
              <Button customStyle={styles.attrBtn}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.ethnicity')}
                  value={'Black'}
                  placeholder="Black"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  onChangeText={(text: string) => {}}
                />
              </Button>
              <Button customStyle={styles.attrBtn}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.complextion')}
                  value={'Dark'}
                  placeholder="Dark"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  onChangeText={(text: string) => {}}
                />
              </Button>
            </View>
            <View style={styles.geneticsHealthInfoRow}>
              <Button customStyle={styles.attrBtn}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.bloodType')}
                  value={'O-'}
                  placeholder="O-"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  onChangeText={(text: string) => {}}
                />
              </Button>
              <RoundedButton
                customStyle={styles.gahButtonWrapper}
                textStyle={styles.bmiButtonText}
                onPress={() => {}}
                label={t('personalInfo.genetics.gah.apec')}
              />
            </View>
            <View style={styles.geneticsHealthInfoRow}>
              <RoundedButton
                customStyle={styles.gahButtonWrapper}
                textStyle={styles.bmiButtonText}
                onPress={() => {}}
                label={t('personalInfo.genetics.gah.adm')}
              />
              <RoundedButton
                customStyle={styles.gahButtonWrapper}
                textStyle={styles.bmiButtonText}
                onPress={() => {}}
                label={t('personalInfo.genetics.gah.afmh')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.dataTitle}>Connect Data</Text>
        <View style={styles.dataInfoWrapper}>
          <View style={styles.dataInfoWrapper}>
            <View style={styles.dataInfoRow}>
              <CircularProgressBar
                progress={75}
                diameter={170}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <Text style={styles.percentValue}>2000</Text>
                  <Text style={styles.percentDescText}>
                    {t('personalInfo.genetics.bmi.caption')}
                  </Text>
                </View>
              </CircularProgressBar>
              <CircularProgressBar
                progress={75}
                diameter={170}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <Text style={styles.percentValue}>2000</Text>
                  <Text style={styles.percentDescText}>{t('personalInfo.genetics.abw')}</Text>
                </View>
              </CircularProgressBar>
            </View>
          </View>
          <View style={styles.dataInfoRow}>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>2000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.lbm')}</Text>
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>0.83</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.wthr')}</Text>
              </View>
            </CircularProgressBar>
          </View>
          <View style={styles.dataInfoRow}>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <View style={styles.percentGroupWrapper}>
                  <Text style={styles.percentValue}>56</Text>
                  <Text style={styles.unitText}>%</Text>
                </View>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.bww')}</Text>
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={75}
              diameter={170}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>5000</Text>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.bv')}</Text>
              </View>
            </CircularProgressBar>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GeneticsScreen;
