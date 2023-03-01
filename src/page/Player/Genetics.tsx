import React, {useState, useEffect} from 'react';
import {Text, Image, View, ScrollView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_WEIGHT, FONT_SIZE} from '../../common/constants/StyleConstants';
import {
  Loading,
  Button,
  RoundedButton,
  CheckListItem,
  AttributeInput,
  CircularProgressBar,
} from '../../common/components';
import {useDispatch, useSelector} from '../../redux/store';
import {useAuth} from '../../contexts/AuthProvider';
import {addKeyMeasurements, addGenetics, getPlayer} from '../../redux/actions/plyerActions';
import {TPlayerState} from '../../redux/reducers/playerReducer';
import {TKeyMeasurement, TGenetics} from '../../services/formulaService';
import {orientation, normalize, normalizeHalf, normalizeRate} from '../../utils/normalize';

const SkeletonIMg = require('../../assets/img/skeleton.png');
const LogoImg = require('../../assets/img/logo/logo.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: normalizeHalf(30),
    paddingHorizontal: normalizeHalf(50),
  },
  playerInfoInputsWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  bmiWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: normalize(30),
  },
  bmiInfoWrapper: {
    flexDirection: 'column',
  },
  bmiTitle: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
  bmiInputsWrapper: {
    flexDirection: 'column',
    gap: normalize(20),
    width: normalize(180),
    marginTop: normalize(24, orientation.HEIGHT),
  },
  bmiInputWrapper: {
    flex: 1,
    height: normalize(58, orientation.HEIGHT),
    borderRadius: normalize(16),
    paddingVertical: normalizeRate(10, 0),
  },
  bmiInputLabel: {
    fontSize: normalize(FONT_SIZE.XS),
    paddingHorizontal: normalize(20),
    paddingVertical: normalizeRate(10, 0),
  },
  bmiInputText: {
    marginHorizontal: normalize(10),
    paddingHorizontal: normalize(0),
    fontSize: normalize(FONT_SIZE.MD),
  },
  bmiButtonWrapper: {
    width: '100%',
    height: normalize(58, orientation.HEIGHT),
    borderRadius: normalize(16),
  },
  bmiButtonText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.XS),
    color: COLORS.WHITE,
    textAlign: 'center',
    width: normalize(110),
  },
  bmiOddWrapper: {
    flex: 1,
    height: normalize(58, orientation.HEIGHT),
    borderRadius: normalize(16),
    paddingVertical: normalizeRate(10, 0),
  },
  bmiOddlabel: {
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: normalize(FONT_SIZE.XS),
    textAlign: 'center',
    paddingHorizontal: normalize(10, orientation.HEIGHT),
    paddingVertical: 0,
    width: normalize(60),
  },
  bmiOddText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.XS),
    color: COLORS.WHITE,
    textAlign: 'center',
    width: normalize(90),
    marginHorizontal: normalize(10),
    paddingHorizontal: normalize(0),
  },
  skeletonImg: {
    width: normalize(151),
    height: normalize(376, orientation.HEIGHT),
    resizeMode: 'contain',
  },
  geneticsHealthWrapper: {
    flexDirection: 'column',
  },
  geneticsHealthTitle: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
  geneticsHealthInfoWrapper: {
    flexDirection: 'column',
    gap: normalize(20),
    marginTop: normalize(20),
    marginBottom: normalize(30),
  },
  geneticsHealthInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: normalize(20),
  },
  attrBtn: {
    flex: 1,
  },
  gahInputLabel: {
    paddingHorizontal: normalize(15),
    paddingVertical: 0,
    fontSize: normalize(FONT_SIZE.XS),
    textAlign: 'center',
    width: normalize(100),
  },
  gahButtonWrapper: {
    flex: 1,
    height: normalize(58, orientation.HEIGHT),
    borderRadius: normalize(16),
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: normalize(60),
  },
  dataTitle: {
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: normalize(FONT_SIZE.MD),
    color: COLORS.TEXT_DARK,
  },
  dataInfoWrapper: {
    flexDirection: 'column',
    gap: normalizeHalf(40),
    marginTop: normalize(20),
  },
  dataInfoRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginLeft: normalize(6),
  },
  percentDescText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.MS),
    color: COLORS.TEXT_DARK,
    textAlign: 'center',
    width: normalize(110),
    marginBottom: normalize(9),
  },
  cpuImg: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
    marginTop: normalize(16),
  },
  percentGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  progressbtn: {
    flex: 0,
  },
  policyWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  policyText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.MS),
    color: COLORS.TEXT_BLUE,
  },
  modalsWrapper: {
    position: 'relative',
  },
});

const measurementModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 500,
    height: 450,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 35,
    paddingRight: 55,
    paddingTop: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  headerTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.TEXT_DARK,
  },
  headerLinkWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerLink: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MS,
    color: COLORS.TEXT_BLUE,
  },
  modalBody: {
    flex: 1,
    flexDirection: 'column',
  },
  modalBodyInputs: {
    flexDirection: 'column',
    gap: 20,
    padding: 35,
  },
  modalBodyInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  inputStyle: {
    flex: 1,
    height: 58,
    borderRadius: 16,
  },
  labelStyle: {
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 0,
    width: 120,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 35,
    paddingBottom: 20,
  },
  confirmBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.GREEN,
  },
  confirmText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
});

const selectModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 400,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
    marginVertical: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY,
  },
  headerText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
  modalBody: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  colWrapper: {
    flexDirection: 'column',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    marginTop: 30,
  },
  confirmBtn: {
    flex: 1,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GREEN,
  },
  cancelBtn: {
    flex: 1,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLORS.RED,
  },
  buttonText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.WHITE,
  },
});

const aboutModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 560,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 36,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 140,
    height: 33,
    resizeMode: 'contain',
  },
  headerText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.TEXT_DARK,
  },
  modalBody: {
    paddingVertical: 40,
  },
  contentText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.TEXT_DARK,
    lineHeight: 28,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.RED,
  },
  buttonText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
});

const ethnicitys = {
  afro: 'Afro-Caribbean',
  native: 'Alaska Native / American Indigenous ',
  asian: 'Asian / Pacific Islander',
  black: 'Black / African',
  irish: 'Irish',
  italian: 'Italian',
  latino: 'Latino / Hispanic',
  spanish: 'Spanish / Portuguese',
  german: 'White / German',
  other: 'White / Other',
};

const complexions = {
  light: 'Light',
  medium: 'Medium',
  dark: 'Dark',
};

const bloodTypes = {
  om: 'O-',
  op: 'O+',
  am: 'A-',
  ap: 'A+',
  bm: 'B-',
  bp: 'B+',
  abm: 'AB-',
  abp: 'AB+',
};

type TGeneticsState = {
  ethnicity: string;
  complexion: string;
  bloodType: string;
  neck: string;
  wingSpan: string;
  handSize: string;
  hips: string;
  glute: string;
  waist: string;
  waterRatio: string;
};

const GeneticsScreen = () => {
  const initState: TGeneticsState = {
    ethnicity: '',
    complexion: '',
    bloodType: '',
    neck: '',
    wingSpan: '',
    handSize: '',
    hips: '',
    glute: '',
    waist: '',
    waterRatio: '',
  };

  const [state, setState] = useState(initState);
  const [isMeasurement, setMeasurement] = useState(false);
  const [isEthnicity, setEthnicity] = useState(false);
  const [isComplexion, setComplexion] = useState(false);
  const [isBloodType, setBloodType] = useState(false);
  const [isBloodAbout, setBloodAbout] = useState(false);
  const [isWaterAbout, setWaterAbout] = useState(false);
  const [isBmiBtn, setBmiBtn] = useState(true);
  const [isGeneticsBtn, setGeneticsBtn] = useState(true);
  const {authData} = useAuth();

  const {t} = useTranslation();

  const dispatch = useDispatch();
  const playerData = useSelector<TPlayerState>(state => state.player);

  useEffect(() => {
    if (playerData?.waistHipsRatio) {
      setBmiBtn(false);
    } else {
      setBmiBtn(true);
    }

    if (playerData.ethnicity && playerData.complexion && playerData.bloodType) {
      setGeneticsBtn(false);
    } else {
      setGeneticsBtn(true);
    }

    const ratio = (playerData.bodyWaterWeight.kg / playerData.idealWeight.kg) * 100;
    onChangeField('waterRatio', ratio.toFixed(2).toString());
  }, [playerData]);

  const onChangeField = (field: string, value: string) => {
    setState({...state, [field]: value});
  };

  const onMeasurementModalClose = () => {
    setTimeout(() => setMeasurement(false), 150);
    const tempState = {...state};
    tempState.neck = '';
    tempState.wingSpan = '';
    tempState.handSize = '';
    tempState.hips = '';
    tempState.glute = '';
    tempState.waist = '';
    setState({...state, ...tempState});
  };

  const onMeasurementModalConfirm = () => {
    onMeasurementModalClose();
    const measurementData: TKeyMeasurement = {
      wingSpan: parseFloat(state.wingSpan),
      handSize: parseFloat(state.handSize),
      neckCircumference: parseFloat(state.neck),
      hipsCircumference: parseFloat(state.hips),
      gluteCircumference: parseFloat(state.glute),
      waistCircumference: parseFloat(state.waist),
      idToken: authData?.accessToken,
    };
    dispatch(addKeyMeasurements(measurementData));
  };

  const onSelectConfirm = (field: string) => {
    switch (field) {
      case 'ethnicity':
        setEthnicity(false);
        break;
      case 'complexion':
        setComplexion(false);
        break;
      case 'bloodType':
        setBloodType(false);
        break;
      default:
        break;
    }
  };

  const onSelectCancel = (field: string) => {
    onChangeField(field, '');

    switch (field) {
      case 'ethnicity':
        setEthnicity(false);
        break;
      case 'complexion':
        setComplexion(false);
        break;
      case 'bloodType':
        setBloodType(false);
        break;
      default:
        break;
    }
  };

  const onAboutClose = (field: string) => {
    switch (field) {
      case 'water':
        setWaterAbout(false);
        break;
      case 'blood':
        setBloodAbout(false);
        break;
      default:
        break;
    }
  };

  const handleAddGenetics = () => {
    const geneticsData: TGenetics = {
      ethnicity: state.ethnicity,
      complexion: state.complexion,
      bloodType: state.bloodType,
      idToken: authData?.accessToken,
    };
    dispatch(addGenetics(geneticsData));
  };

  const measurementModal = (isVisible: boolean) => (
    <Modal
      isVisible={isVisible}
      style={measurementModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onMeasurementModalClose}>
      <View style={measurementModalStyles.container}>
        <View style={measurementModalStyles.modalHeader}>
          <Text style={measurementModalStyles.headerTitle}>
            {t('personalInfo.genetics.mesurement.caption')}
          </Text>
          <Button customStyle={measurementModalStyles.headerLinkWrapper}>
            <Text style={measurementModalStyles.headerLink}>
              {t('personalInfo.genetics.mesurement.link')}
            </Text>
          </Button>
        </View>
        <View style={measurementModalStyles.modalBody}>
          <View style={measurementModalStyles.modalBodyInputs}>
            <View style={measurementModalStyles.modalBodyInputRow}>
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.nc')}
                value={state.neck}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('neck', text)}
              />
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.ws')}
                value={state.wingSpan}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('wingSpan', text)}
              />
            </View>
            <View style={measurementModalStyles.modalBodyInputRow}>
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.hs')}
                value={state.handSize}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('handSize', text)}
              />
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.hc')}
                value={state.hips}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('hips', text)}
              />
            </View>
            <View style={measurementModalStyles.modalBodyInputRow}>
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.gc')}
                value={state.glute}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('glute', text)}
              />
              <AttributeInput
                label={t('personalInfo.genetics.mesurement.wc')}
                value={state.waist}
                placeholder="12 in"
                labelStyle={measurementModalStyles.labelStyle}
                inputStyle={measurementModalStyles.inputStyle}
                onChangeText={(text: string) => onChangeField('waist', text)}
              />
            </View>
          </View>
        </View>
        <View style={measurementModalStyles.modalFooter}>
          <Button
            customStyle={measurementModalStyles.confirmBtn}
            onPress={onMeasurementModalConfirm}>
            <Text style={measurementModalStyles.confirmText}>Save</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );

  const selectModal = (
    isVisible: boolean,
    field: string,
    title: string,
    options: object,
    onConfirm: (field: string) => void,
    onCancel: (field: string) => void,
  ) => (
    <Modal
      isVisible={isVisible}
      style={selectModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={selectModalStyles.container}>
        <View style={selectModalStyles.modalHeader}>
          <Text style={selectModalStyles.headerText}>{title}</Text>
        </View>
        <View style={selectModalStyles.modalBody}>
          <ScrollView style={selectModalStyles.colWrapper}>
            {Object.keys(options).map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={options}
                status={state[field] === options[key]}
                setStatus={(key: string) => onChangeField(field, options[key])}
              />
            ))}
          </ScrollView>
          <View style={selectModalStyles.buttonsWrapper}>
            <Button customStyle={selectModalStyles.cancelBtn} onPress={() => onCancel(field)}>
              <Text style={selectModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button customStyle={selectModalStyles.confirmBtn} onPress={() => onConfirm(field)}>
              <Text style={selectModalStyles.buttonText}>{t('general.save')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );

  const aboutModal = (isVisible: boolean, title: string, field: string, description: string) => (
    <Modal
      isVisible={isVisible}
      style={aboutModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={aboutModalStyles.container}>
        <View style={aboutModalStyles.modalHeader}>
          <Image style={aboutModalStyles.logo} source={LogoImg} />
          <Text style={aboutModalStyles.headerText}>{title}</Text>
        </View>
        <View style={aboutModalStyles.modalBody}>
          <Text style={aboutModalStyles.contentText}>{description}</Text>
        </View>
        <View style={aboutModalStyles.buttonsWrapper}>
          <Button customStyle={aboutModalStyles.cancelBtn} onPress={() => onAboutClose(field)}>
            <Text style={aboutModalStyles.buttonText}>{t('general.cancel')}</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );

  return playerData.loading ? (
    <View style={{flex: 1}}>
      <Loading />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.playerInfoInputsWrapper}>
        <View style={styles.bmiWrapper}>
          <View style={styles.bmiInfoWrapper}>
            <Text style={styles.bmiTitle}>{t('personalInfo.genetics.bmi.caption')}</Text>
            <View style={styles.bmiInputsWrapper}>
              <AttributeInput
                label={t('personalInfo.genetics.bmi.age')}
                value={playerData.age.toString()}
                placeholder="34"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                textStyle={styles.bmiInputText}
                onChangeText={(text: string) => onChangeField('age', text)}
              />
              <AttributeInput
                label={t('personalInfo.genetics.bmi.weight')}
                value={`${playerData.weight.kg} kg`}
                placeholder="145 LBS"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                textStyle={styles.bmiInputText}
                onChangeText={(text: string) => onChangeField('weight', text)}
              />
              <AttributeInput
                label={t('personalInfo.genetics.bmi.height')}
                value={`${playerData.height.feet.feet}’ ${playerData.height.feet.inch}”`}
                placeholder="5’5”"
                labelStyle={styles.bmiInputLabel}
                inputStyle={styles.bmiInputWrapper}
                textStyle={styles.bmiInputText}
                onChangeText={(text: string) => onChangeField('height', text)}
              />
              {isBmiBtn ? (
                <RoundedButton
                  customStyle={styles.bmiButtonWrapper}
                  textStyle={styles.bmiButtonText}
                  onPress={() => setMeasurement(true)}
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
              <Button customStyle={styles.attrBtn} onPress={() => setEthnicity(true)}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.ethnicity')}
                  value={state.ethnicity}
                  placeholder="Black"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  textStyle={styles.bmiInputText}
                />
              </Button>
              <Button customStyle={styles.attrBtn} onPress={() => setComplexion(true)}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.complexion')}
                  value={state.complexion}
                  placeholder="Dark"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  textStyle={styles.bmiInputText}
                />
              </Button>
            </View>
            <View style={styles.geneticsHealthInfoRow}>
              <Button customStyle={styles.attrBtn} onPress={() => setBloodType(true)}>
                <AttributeInput
                  label={t('personalInfo.genetics.gah.bloodType')}
                  value={state.bloodType}
                  placeholder="O-"
                  readOnly={true}
                  labelStyle={styles.gahInputLabel}
                  inputStyle={styles.bmiInputWrapper}
                  textStyle={styles.bmiInputText}
                />
              </Button>
              {isGeneticsBtn ? (
                <RoundedButton
                  customStyle={styles.gahButtonWrapper}
                  textStyle={styles.bmiButtonText}
                  onPress={handleAddGenetics}
                  label={t('personalInfo.genetics.gah.ag')}
                />
              ) : (
                <RoundedButton
                  customStyle={styles.gahButtonWrapper}
                  textStyle={styles.bmiButtonText}
                  onPress={() => {}}
                  label={t('personalInfo.genetics.gah.apec')}
                />
              )}
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
        <Button customStyle={styles.policyWrapper}>
          <Text style={styles.policyText}>{t('personalInfo.genetics.policy')}</Text>
        </Button>
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.dataTitle}>Connect Data</Text>
        <View style={styles.dataInfoWrapper}>
          <View style={styles.dataInfoWrapper}>
            <View style={styles.dataInfoRow}>
              <CircularProgressBar
                progress={100}
                diameter={normalize(170)}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <Text style={styles.percentValue}>{playerData.bmi}</Text>
                  <Text style={styles.percentDescText}>
                    {t('personalInfo.genetics.bmi.caption')}
                  </Text>
                </View>
              </CircularProgressBar>
              <CircularProgressBar
                progress={100}
                diameter={normalize(170)}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <View style={styles.percentGroupWrapper}>
                    <Text style={styles.percentValue}>{playerData.adjustedBodyWeight.kg}</Text>
                  </View>
                  <Text style={styles.percentDescText}>{t('personalInfo.genetics.abw')}</Text>
                </View>
              </CircularProgressBar>
            </View>
          </View>
          <View style={styles.dataInfoRow}>
            <CircularProgressBar
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <View style={styles.percentGroupWrapper}>
                  <Text style={styles.percentValue}>{playerData.leanBodyMass.kg}</Text>
                </View>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.lbm')}</Text>
              </View>
            </CircularProgressBar>
            <CircularProgressBar
              progress={100}
              diameter={normalize(170)}
              startColor={COLORS.GRADIENT_SKY_LIGHT}
              endColor={COLORS.GRADIENT_BLUE}>
              <View style={styles.logWrapper}>
                <Text style={styles.percentValue}>
                  {playerData.waistHipsRatio ? playerData.waistHipsRatio : 'N/A'}
                </Text>
                <Text style={styles.percentDescText}>{t('personalInfo.genetics.wthr')}</Text>
              </View>
            </CircularProgressBar>
          </View>
          <View style={styles.dataInfoRow}>
            <Button customStyle={styles.progressbtn} onPress={() => setWaterAbout(true)}>
              <CircularProgressBar
                progress={100}
                diameter={normalize(170)}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <View style={styles.percentGroupWrapper}>
                    <Text style={styles.percentValue}>
                      {playerData.bodyWaterWeight && playerData.idealWeight
                        ? state.waterRatio
                        : 'N/A'}
                    </Text>
                    <Text style={styles.unitText}>%</Text>
                  </View>
                  <Text style={styles.percentDescText}>{t('personalInfo.genetics.bww')}</Text>
                </View>
              </CircularProgressBar>
            </Button>
            <Button customStyle={styles.progressbtn} onPress={() => setBloodAbout(true)}>
              <CircularProgressBar
                progress={100}
                diameter={normalize(170)}
                startColor={COLORS.GRADIENT_SKY_LIGHT}
                endColor={COLORS.GRADIENT_BLUE}>
                <View style={styles.logWrapper}>
                  <View style={styles.percentGroupWrapper}>
                    <Text style={styles.percentValue}>{playerData.bloodVolumn.value}</Text>
                    <Text style={styles.unitText}>{playerData.bloodVolumn.unit}</Text>
                  </View>
                  <Text style={styles.percentDescText}>{t('personalInfo.genetics.bv')}</Text>
                </View>
              </CircularProgressBar>
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.modalsWrapper}>
        {measurementModal(isMeasurement)}
        {selectModal(
          isEthnicity,
          'ethnicity',
          t('personalInfo.genetics.gah.ethnicity'),
          ethnicitys,
          onSelectConfirm,
          onSelectCancel,
        )}
        {selectModal(
          isComplexion,
          'complexion',
          t('personalInfo.genetics.gah.complexion'),
          complexions,
          onSelectConfirm,
          onSelectCancel,
        )}
        {selectModal(
          isBloodType,
          'bloodType',
          t('personalInfo.genetics.gah.bloodType'),
          bloodTypes,
          onSelectConfirm,
          onSelectCancel,
        )}
        {aboutModal(
          isBloodAbout,
          t('personalInfo.genetics.bloodModal.caption'),
          'blood',
          t('personalInfo.genetics.bloodModal.content'),
        )}
        {aboutModal(
          isWaterAbout,
          t('personalInfo.genetics.waterModal.caption'),
          'water',
          t('personalInfo.genetics.waterModal.content'),
        )}
      </View>
    </View>
  );
};

export default GeneticsScreen;
