import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {Text, Image, View, StyleSheet} from 'react-native';
import {Button, CircularProgressBar, GradientBorderButton} from '../../common/components';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import WeeklyResult from './sections/WeeklyResult';

const ArrowUpImg = require('../../assets/img/arrowUp.png');
const TreasureImg = require('../../assets/img/treasure.png');
const CPUImg = require('../../assets/img/cpu.png');
const MealImg = require('../../assets/img/meal.png');

const nutrientTabs = {
  foodItems: 'Food Items',
  vitamins: 'Vitamins',
  supplements: 'Supplements',
};

const foodItems = [
  'Breakfast: Water, watermelon, iceberg lettuce, fruits and vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Lunch: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Dinner: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
];

const vitamins = [
  'Breakfast: Water, watermelon, iceberg lettuce, fruits and vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Lunch: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Dinner: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
];

const supplements = [
  'Breakfast: Water, watermelon, iceberg lettuce, fruits and vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Lunch: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
  'Dinner: Milk, grains, fruits, vegetables.',
  'Snack: Milk, grains, fruits, vegetables.',
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
    paddingVertical: 30,
  },
  dailyInfoWrapper: {
    flexDirection: 'column',
    borderWidth: 1.5,
    borderColor: COLORS.BORDER_ALPHA_LIGHT,
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  dailyInfoTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK_LIGHT,
  },
  dailySubInfosWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  dailySubInfoWrapper: {
    flexDirection: 'column',
  },
  dailySubInfoContentWrapper: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailySubInfoContentPercentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dailySubInfoContentPercentValue: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: 36,
    color: COLORS.TEXT_DARK,
    paddingRight: 10,
  },
  dailySubInfoContentPercentSymbol: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: 24,
    color: COLORS.TEXT_DARK,
  },
  dailySubInfoContentDesc: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_DARK,
    paddingBottom: 16,
  },
  dailySubInfoArrowUpWrapper: {
    position: 'absolute',
    bottom: 15,
  },
  dailySubInfoArrowUpImg: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  dailySubInfoGuideWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  dailySubInfoGuideText: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.BLACK,
  },
  dailySubInfoGuideImg: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  restInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 28,
    marginTop: 20,
  },
  weeklyResultInfoWrapper: {
    flexDirection: 'column',
    width: 420,
  },
  weeklyResultInfoDescWrapper: {
    flexDirection: 'column',
    gap: 30,
    marginTop: 25,
    paddingHorizontal: 25,
  },
  weeklyResultInfoDescRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weeklyResultInfoDescCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weeklyResultInfoDescIcon: {
    width: 36,
    height: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  weeklyResultInfoDescDashWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weeklyResultInfoDescDash: {
    width: 36,
    borderTopWidth: 4,
    borderStyle: 'dashed',
  },
  weeklyResultInfoDescText: {
    flex: 1,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
    marginLeft: 15,
  },
  playerSelfInfoWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  playerAssessmentWrapper: {
    flexDirection: 'column',
  },
  assessmentTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK_LIGHT,
  },
  assessmentsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  assessmentWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  assessmentContentWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assessmentContentDesc: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    width: 60,
  },
  assessmentContentValue: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.XL,
    color: COLORS.TEXT_DARK,
    paddingBottom: 10,
  },
  assessmentArrowWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  assessmentArrowImg: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  playerHealthWrapper: {
    flexDirection: 'column',
    marginTop: 30,
  },
  playerHealthTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerHealthTitleText: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK_LIGHT,
  },
  playerHealthTitleImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 6,
  },
  playerHealthButtonsWrapper: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  playerHealthButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  playerHealthButtonsCol: {
    flex: 1,
  },
  modalsWrapper: {
    position: 'relative',
  },
});

const nutrientModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 700,
    borderRadius: 25,
    backgroundColor: COLORS.WHITE,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 25,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalHeaderTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_DARK,
  },
  modalHeaderTabsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  modalHeaderTabWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 120,
  },
  modalHeaderTabText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.TEXT_DARK,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  modalHeaderTabBottom: {
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
  modalHeaderTabActiveBottom: {
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
  modalBody: {
    flexDirection: 'column',
    gap: 40,
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  descWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  descText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.BLACK,
    marginLeft: 10,
  },
});

const SnapshotScreen = () => {
  const [isNutrientModal, setNutrientModal] = useState(false);
  const [nutrientTab, setNutrientTab] = useState('foodItems');
  const {t} = useTranslation();

  const onNutrientModalClose = () => {
    setTimeout(() => setNutrientModal(false), 150);
  };

  const nutrientModal = isNutrientModal => (
    <Modal
      isVisible={isNutrientModal}
      style={nutrientModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onNutrientModalClose}>
      <View style={nutrientModalStyles.container}>
        <View style={nutrientModalStyles.modalHeader}>
          <Text style={nutrientModalStyles.modalHeaderTitle}>Nutrient Guide</Text>
          <View style={nutrientModalStyles.modalHeaderTabsWrapper}>
            {Object.keys(nutrientTabs).map((tab: string, i: number) => (
              <Button
                key={i}
                customStyle={nutrientModalStyles.modalHeaderTabWrapper}
                onPress={() => setNutrientTab(tab)}>
                <Text style={nutrientModalStyles.modalHeaderTabText}>{nutrientTabs[tab]}</Text>
                {tab === nutrientTab ? (
                  <View style={nutrientModalStyles.modalHeaderTabActiveBottom} />
                ) : (
                  <View style={nutrientModalStyles.modalHeaderTabBottom} />
                )}
              </Button>
            ))}
          </View>
        </View>
        <View style={nutrientModalStyles.modalBody}>
          {nutrientTab === 'foodItems' &&
            foodItems.map((desc: string, i: number) => (
              <View key={i} style={nutrientModalStyles.descWrapper}>
                <Image style={nutrientModalStyles.descImg} source={MealImg} />
                <Text style={nutrientModalStyles.descText}>{desc}</Text>
              </View>
            ))}
          {nutrientTab === 'vitamins' &&
            vitamins.map((desc: string, i: number) => (
              <View key={i} style={nutrientModalStyles.descWrapper}>
                <Image style={nutrientModalStyles.descImg} source={MealImg} />
                <Text style={nutrientModalStyles.descText}>{desc}</Text>
              </View>
            ))}
          {nutrientTab === 'supplements' &&
            supplements.map((desc: string, i: number) => (
              <View key={i} style={nutrientModalStyles.descWrapper}>
                <Image style={nutrientModalStyles.descImg} source={MealImg} />
                <Text style={nutrientModalStyles.descText}>{desc}</Text>
              </View>
            ))}
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dailyInfoWrapper}>
        <Text style={styles.dailyInfoTitle}>Player Daily: Percentage of target</Text>
        <View style={styles.dailySubInfosWrapper}>
          <View style={styles.dailySubInfoWrapper}>
            <CircularProgressBar
              progress={75}
              diameter={174}
              startColor={COLORS.GRADIENT_SKY}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.dailySubInfoContentWrapper}>
                <View style={styles.dailySubInfoContentPercentWrapper}>
                  <Text style={styles.dailySubInfoContentPercentValue}>75</Text>
                  <Text style={styles.dailySubInfoContentPercentSymbol}>%</Text>
                </View>
                <Text style={styles.dailySubInfoContentDesc}>
                  {t('personalInfo.snapshot.options.ht')}
                </Text>
                <View style={styles.dailySubInfoArrowUpWrapper}>
                  <Image style={styles.dailySubInfoArrowUpImg} source={ArrowUpImg} />
                </View>
              </View>
            </CircularProgressBar>
            <View style={styles.dailySubInfoGuideWrapper}>
              <Text style={styles.dailySubInfoGuideText}>View Guide</Text>
              <Image style={styles.dailySubInfoGuideImg} source={TreasureImg} />
            </View>
          </View>
          <View style={styles.dailySubInfoWrapper}>
            <CircularProgressBar
              progress={75}
              diameter={174}
              startColor={COLORS.GRADIENT_SKY}
              endColor={COLORS.GRADIENT_YELLOW}>
              <View style={styles.dailySubInfoContentWrapper}>
                <View style={styles.dailySubInfoContentPercentWrapper}>
                  <Text style={styles.dailySubInfoContentPercentValue}>75</Text>
                  <Text style={styles.dailySubInfoContentPercentSymbol}>%</Text>
                </View>
                <Text style={styles.dailySubInfoContentDesc}>
                  {t('personalInfo.snapshot.options.pn')}
                </Text>
                <View style={styles.dailySubInfoArrowUpWrapper}>
                  <Image style={styles.dailySubInfoArrowUpImg} source={ArrowUpImg} />
                </View>
              </View>
            </CircularProgressBar>
            <Button
              customStyle={styles.dailySubInfoGuideWrapper}
              onPress={() => setNutrientModal(true)}>
              <Text style={styles.dailySubInfoGuideText}>View Guide</Text>
              <Image style={styles.dailySubInfoGuideImg} source={TreasureImg} />
            </Button>
          </View>
          <View style={styles.dailySubInfoWrapper}>
            <CircularProgressBar
              progress={75}
              diameter={174}
              startColor={COLORS.GRADIENT_ORANGE}
              endColor={COLORS.GRADIENT_GREEN}>
              <View style={styles.dailySubInfoContentWrapper}>
                <View style={styles.dailySubInfoContentPercentWrapper}>
                  <Text style={styles.dailySubInfoContentPercentValue}>75</Text>
                  <Text style={styles.dailySubInfoContentPercentSymbol}>%</Text>
                </View>
                <Text style={styles.dailySubInfoContentDesc}>
                  {t('personalInfo.snapshot.options.ha')}
                </Text>
                <View style={styles.dailySubInfoArrowUpWrapper}>
                  <Image style={styles.dailySubInfoArrowUpImg} source={ArrowUpImg} />
                </View>
              </View>
            </CircularProgressBar>
            <View style={styles.dailySubInfoGuideWrapper}>
              <Text style={styles.dailySubInfoGuideText}>View Guide</Text>
              <Image style={styles.dailySubInfoGuideImg} source={TreasureImg} />
            </View>
          </View>
          <View style={styles.dailySubInfoWrapper}>
            <CircularProgressBar
              progress={75}
              diameter={174}
              startColor={COLORS.GRADIENT_YELLOW}
              endColor={COLORS.GRADIENT_PURPLE}>
              <View style={styles.dailySubInfoContentWrapper}>
                <View style={styles.dailySubInfoContentPercentWrapper}>
                  <Text style={styles.dailySubInfoContentPercentValue}>75</Text>
                  <Text style={styles.dailySubInfoContentPercentSymbol}>%</Text>
                </View>
                <Text style={styles.dailySubInfoContentDesc}>
                  {t('personalInfo.snapshot.options.rt')}
                </Text>
                <View style={styles.dailySubInfoArrowUpWrapper}>
                  <Image style={styles.dailySubInfoArrowUpImg} source={ArrowUpImg} />
                </View>
              </View>
            </CircularProgressBar>
            <View style={styles.dailySubInfoGuideWrapper}>
              <Text style={styles.dailySubInfoGuideText}>View Guide</Text>
              <Image style={styles.dailySubInfoGuideImg} source={TreasureImg} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.restInfoWrapper}>
        <View style={styles.weeklyResultInfoWrapper}>
          <WeeklyResult />
          <View style={styles.weeklyResultInfoDescWrapper}>
            <View style={styles.weeklyResultInfoDescRow}>
              <View style={styles.weeklyResultInfoDescCol}>
                <View
                  style={[styles.weeklyResultInfoDescIcon, {backgroundColor: COLORS.CHART_BLUE}]}
                />
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.hl')}
                </Text>
              </View>
              <View style={styles.weeklyResultInfoDescCol}>
                <View
                  style={[styles.weeklyResultInfoDescIcon, {backgroundColor: COLORS.CHART_YELLOW}]}
                />
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.pn')}
                </Text>
              </View>
            </View>
            <View style={styles.weeklyResultInfoDescRow}>
              <View style={styles.weeklyResultInfoDescCol}>
                <View
                  style={[styles.weeklyResultInfoDescIcon, {backgroundColor: COLORS.CHART_GREEN}]}
                />
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.ha')}
                </Text>
              </View>
              <View style={styles.weeklyResultInfoDescCol}>
                <View
                  style={[styles.weeklyResultInfoDescIcon, {backgroundColor: COLORS.CHART_PINK}]}
                />
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.br')}
                </Text>
              </View>
            </View>
            <View style={styles.weeklyResultInfoDescRow}>
              <View style={styles.weeklyResultInfoDescCol}>
                <View style={styles.weeklyResultInfoDescDashWrapper}>
                  <View
                    style={[styles.weeklyResultInfoDescDash, {borderTopColor: COLORS.DIVIDER_GREY}]}
                  />
                </View>
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.tp')}
                </Text>
              </View>
              <View style={styles.weeklyResultInfoDescCol}>
                <View style={styles.weeklyResultInfoDescDashWrapper}>
                  <View
                    style={[styles.weeklyResultInfoDescDash, {borderTopColor: COLORS.DIVIDER_RED}]}
                  />
                </View>
                <Text style={styles.weeklyResultInfoDescText}>
                  {t('personalInfo.snapshot.weeklyResult.st')}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.playerSelfInfoWrapper}>
          <View style={styles.playerAssessmentWrapper}>
            <Text style={styles.assessmentTitle}>Player Self Assessments</Text>
            <View style={styles.assessmentsWrapper}>
              <View style={styles.assessmentWrapper}>
                <CircularProgressBar
                  progress={75}
                  diameter={100}
                  startColor={COLORS.GRADIENT_SKY}
                  endColor={COLORS.GRADIENT_PURPLE}>
                  <View style={styles.assessmentContentWrapper}>
                    <Text style={styles.assessmentContentDesc}>
                      {t('personalInfo.snapshot.options.mf')}
                    </Text>
                    <Text style={styles.assessmentContentValue}>7 / 10</Text>
                  </View>
                </CircularProgressBar>
                <View style={styles.assessmentArrowWrapper}>
                  <Image style={styles.assessmentArrowImg} source={ArrowUpImg} />
                </View>
              </View>
              <View style={styles.assessmentWrapper}>
                <CircularProgressBar
                  progress={75}
                  diameter={100}
                  startColor={COLORS.GRADIENT_SKY}
                  endColor={COLORS.GRADIENT_PURPLE}>
                  <View style={styles.assessmentContentWrapper}>
                    <Text style={styles.assessmentContentDesc}>
                      {t('personalInfo.snapshot.options.gc')}
                    </Text>
                    <Text style={styles.assessmentContentValue}>7 / 10</Text>
                  </View>
                </CircularProgressBar>
                <View style={styles.assessmentArrowWrapper}>
                  <Image style={styles.assessmentArrowImg} source={ArrowUpImg} />
                </View>
              </View>
              <View style={styles.assessmentWrapper}>
                <CircularProgressBar
                  progress={75}
                  diameter={100}
                  startColor={COLORS.GRADIENT_SKY}
                  endColor={COLORS.GRADIENT_PURPLE}>
                  <View style={styles.assessmentContentWrapper}>
                    <Text style={styles.assessmentContentDesc}>
                      {t('personalInfo.snapshot.options.mt')}
                    </Text>
                    <Text style={styles.assessmentContentValue}>7 / 10</Text>
                  </View>
                </CircularProgressBar>
                <View style={styles.assessmentArrowWrapper}>
                  <Image style={styles.assessmentArrowImg} source={ArrowUpImg} />
                </View>
              </View>
              <View style={styles.assessmentWrapper}>
                <CircularProgressBar
                  progress={75}
                  diameter={100}
                  startColor={COLORS.GRADIENT_SKY}
                  endColor={COLORS.GRADIENT_PURPLE}>
                  <View style={styles.assessmentContentWrapper}>
                    <Text style={styles.assessmentContentDesc}>
                      {t('personalInfo.snapshot.options.jnp')}
                    </Text>
                    <Text style={styles.assessmentContentValue}>7 / 10</Text>
                  </View>
                </CircularProgressBar>
                <View style={styles.assessmentArrowWrapper}>
                  <Image style={styles.assessmentArrowImg} source={ArrowUpImg} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.playerHealthWrapper}>
            <View style={styles.playerHealthTitleWrapper}>
              <Text style={styles.playerHealthTitleText}>Player Health Reports</Text>
              <Image style={styles.playerHealthTitleImg} source={CPUImg} />
            </View>
            <View style={styles.playerHealthButtonsWrapper}>
              <View style={styles.playerHealthButtonsRow}>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.bg')}
                  />
                </View>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.bo')}
                  />
                </View>
              </View>
              <View style={styles.playerHealthButtonsRow}>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.bp')}
                  />
                </View>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.hrv')}
                  />
                </View>
              </View>
              <View style={styles.playerHealthButtonsRow}>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.ecg')}
                  />
                </View>
                <View style={styles.playerHealthButtonsCol}>
                  <GradientBorderButton
                    startColor={COLORS.GRADIENT_RED}
                    endColor={COLORS.GRADIENT_PURPLE}
                    label={t('personalInfo.snapshot.playerHealth.stress')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.modalsWrapper}>{nutrientModal(isNutrientModal)}</View>
    </View>
  );
};

export default SnapshotScreen;
