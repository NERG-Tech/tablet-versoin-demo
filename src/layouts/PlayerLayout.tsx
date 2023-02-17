import React, {useState} from 'react';
import {Image} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../common/constants/StyleConstants';
import {Input, AttributeInput, Button, RoundedButton, CheckListItem} from '../common/components';
import * as NavigationConstants from '../common/constants/NavigationConstants';

const LogoImg = require('../assets/img/logo/logo_white.png');
const ArrowRight = require('../assets/img/hoc/arrowRight.png');
const SearchImg = require('../assets/img/hoc/search.png');
const TeamImg = require('../assets/img/team.png');
const AddFileImg = require('../assets/img/addFile.png');
const AvatarImg = require('../assets/img/jack.png');
const BluetoothImg = require('../assets/img/bluetooth.png');

const navigations = {
  [NavigationConstants.DASHBOARD]: 'Dashboard',
  [NavigationConstants.GM_MODE]: 'GM Mode',
  [NavigationConstants.COACH_MODE]: 'Coach Mode',
};

const positions = {
  QB: 'Quarterback (QB)',
  OL: 'Offensive Linemen (OL)',
  RB: 'Running Back (RB)',
  FB: 'Fullback (FB)',
  TE: 'Tight End (TE)',
  WR: 'Wide Receiver (WR)',
  DL: 'Defensive Linemen (DL)',
  LB: 'Linebacker (LB)',
  CB: 'Cornerback (CB)',
  KR: 'Kick Returner (KR)',
  PR: 'Punt Returner (PR)',
  LS: 'Long Snapper (LS)',
  S: 'Safety (S)',
  K: 'Kicker (K)',
  P: 'Punter (P)',
};

const menSports = {
  football: 'Football',
  basketball: 'Basketball',
  baseball: 'Baseball',
  crossCountry: 'Cross Country',
};

const womenSports = {
  basketball: 'Basketball',
  trackFiled: 'Track / Field',
  softball: 'Softball',
  crossCountry: 'Cross Country',
  tennis: 'Tennis',
  volleyball: 'Volleyball',
};

const genders = {
  male: 'Male',
  female: 'Female',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSideBarWrapper: {
    flexDirection: 'column',
    width: 300,
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 36,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  logo: {
    width: 140,
    height: 30,
    resizeMode: 'contain',
  },
  avatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 80,
  },
  avatarLogo: {
    width: 225,
    height: 225,
    borderRadius: 999,
    resizeMode: 'contain',
  },
  optionsWrapper: {
    flexDirection: 'column',
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.DIVIDER,
  },
  optionText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.WHITE,
  },
  optionImg: {
    width: 6,
    height: 12,
    marginRight: 6,
    resizeMode: 'contain',
  },
  rightWrapper: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
  navWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  navButton: {
    paddingRight: 70,
  },
  navText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.TEXT_GREY,
  },
  navActiveText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    color: COLORS.BLUE_SKY,
  },
  invite: {
    flex: 1,
  },
  modalsWrapper: {
    position: 'relative',
  },
});

const addPlayerModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
  },
  container: {
    width: 830,
    height: 700,
    borderRadius: 25,
    backgroundColor: COLORS.WHITE,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 35,
    paddingRight: 55,
    paddingVertical: 25,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: COLORS.BLACK_MIDDLE,
  },
  searchWrapper: {
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: COLORS.BORDER_LIGHT,
    backgroundColor: COLORS.BACKGROUND_INPUT_LIGHT,
  },
  searchText: {
    fontSize: FONT_SIZE.MS,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK_LIGHT,
    width: 160,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  serachImg: {
    width: 16,
    height: 16,
    marginLeft: 18,
    resizeMode: 'contain',
  },
  headerGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 90,
  },
  headerItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerItemText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.L,
    color: COLORS.WHITE,
  },
  headerItemImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  modalBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 28,
    padding: 60,
    paddingTop: 40,
  },
  colWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 35,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  attrBtn: {
    flex: 1,
  },
  avatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: COLORS.BORDER_GREY,
  },
  uploadBtn: {
    width: 185,
    height: 40,
    borderRadius: 24,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingBottom: 40,
  },
  bluetoothBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 36,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: COLORS.BORDER_ALPHA,
  },
  bluetoothText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MS,
    color: COLORS.BLACK_MIDDLE,
  },
  bluetoothImg: {
    width: 32,
    height: 32,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  buttonGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  confirmBtn: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GREEN,
  },
  cancelBtn: {
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

const positionModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 850,
    height: 480,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  colWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  lastWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  confirmBtn: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GREEN,
  },
  cancelBtn: {
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

const genderModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 400,
    height: 300,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
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
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  colWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 20,
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

const menModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 400,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
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
    alignItems: 'flex-end',
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

const womenModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: 400,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY_LIGHT,
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
    alignItems: 'center',
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

type TProps = {
  children: React.ReactNode;
  currentNav: string;
  onChangeNav: (nav: string) => void;
};

const PlayerLayout = (props: TProps) => {
  const initState = {
    search: '',
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: 'Male',
    sport: '',
    position: '',
  };

  const [isPlayerVisible, setPlayerVisible] = useState(false);
  const [isPositionVisible, setPositionVisible] = useState(false);
  const [isGenderVisible, setGenderVisible] = useState(false);
  const [isMenVisible, setMenVisible] = useState(false);
  const [isWomenVisible, setWomenVisible] = useState(false);
  const [state, setState] = useState(initState);
  const {t} = useTranslation();

  const onChangeField = (field: string, value: string) => {
    setState({...state, [field]: value});
  };

  const onAddPlayerModalClose = (confirm: boolean) => {
    if (!confirm) {
      setState(initState);
    }
    setTimeout(() => setPlayerVisible(false), 150);
  };

  const onPositionModalClose = (confirm: boolean) => {
    if (!confirm) {
      onChangeField('position', '');
    }
    setTimeout(() => setPositionVisible(false), 150);
    setTimeout(() => setPlayerVisible(true), 600);
  };

  const onGenderModalClose = (confirm: boolean) => {
    if (!confirm) {
      onChangeField('gender', '');
    }
    setTimeout(() => setGenderVisible(false), 150);
    setTimeout(() => setPlayerVisible(true), 600);
  };

  const onMenModalClose = (confirm: boolean) => {
    if (!confirm) {
      onChangeField('sport', '');
    }
    setTimeout(() => setMenVisible(false), 150);
    setTimeout(() => setPlayerVisible(true), 600);
  };

  const onWoenModalClose = (confirm: boolean) => {
    if (!confirm) {
      onChangeField('sport', '');
    }
    setTimeout(() => setWomenVisible(false), 150);
    setTimeout(() => setPlayerVisible(true), 600);
  };

  const addPlayerModal = isPlayerVisible => (
    <Modal
      isVisible={isPlayerVisible}
      style={addPlayerModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={addPlayerModalStyles.container}>
        <View style={addPlayerModalStyles.modalHeader}>
          <Input
            value={state.search}
            placeholder="Search"
            icon={<Image style={addPlayerModalStyles.serachImg} source={SearchImg} />}
            placeholderTextColor={COLORS.TEXT_GREY_LIGHT}
            textStyle={addPlayerModalStyles.searchText}
            inputStyle={addPlayerModalStyles.searchWrapper}
            onChangeText={(text: string) => onChangeField('search', text)}
          />
          <View style={addPlayerModalStyles.headerGroupWrapper}>
            <Button customStyle={addPlayerModalStyles.headerItemWrapper}>
              <Text style={addPlayerModalStyles.headerItemText}>{t('profile.teamConnect')}</Text>
              <Image style={addPlayerModalStyles.headerItemImg} source={TeamImg} />
            </Button>
            <Button customStyle={addPlayerModalStyles.headerItemWrapper}>
              <Text style={addPlayerModalStyles.headerItemText}>{t('profile.addFile')}</Text>
              <Image style={addPlayerModalStyles.headerItemImg} source={AddFileImg} />
            </Button>
          </View>
        </View>
        <View style={addPlayerModalStyles.modalBody}>
          <View style={addPlayerModalStyles.avatarWrapper}>
            <Image style={addPlayerModalStyles.avatar} source={AvatarImg} />
            <RoundedButton
              label={t('profile.uploadPhoto')}
              customStyle={addPlayerModalStyles.uploadBtn}
              onPress={() => console.log('Uplaod Photo')}
            />
          </View>
          <View style={addPlayerModalStyles.colWrapper}>
            <View style={addPlayerModalStyles.rowWrapper}>
              <AttributeInput
                label={t('profile.name')}
                value={state.name}
                placeholder="Tom Brady"
                onChangeText={(text: string) => onChangeField('name', text)}
              />
              <AttributeInput
                label={t('profile.age')}
                value={state.age}
                placeholder="34"
                onChangeText={(text: string) => onChangeField('age', text)}
              />
            </View>
            <View style={addPlayerModalStyles.rowWrapper}>
              <AttributeInput
                label={t('profile.height')}
                value={state.height}
                placeholder="5’5”"
                onChangeText={(text: string) => onChangeField('height', text)}
              />
              <AttributeInput
                label={t('profile.weight')}
                value={state.weight}
                placeholder="145 LBS"
                onChangeText={(text: string) => onChangeField('weight', text)}
              />
            </View>
            <View style={addPlayerModalStyles.rowWrapper}>
              <Button
                customStyle={addPlayerModalStyles.attrBtn}
                onPress={() => {
                  setPlayerVisible(false);
                  setTimeout(() => setGenderVisible(true), 450);
                }}>
                <AttributeInput
                  label={t('profile.gender')}
                  value={state.gender}
                  placeholder="Male"
                  readOnly={true}
                />
              </Button>
              <Button
                customStyle={addPlayerModalStyles.attrBtn}
                onPress={() => {
                  setPlayerVisible(false);
                  setTimeout(
                    () =>
                      state.gender === 'Male' || state.gender === ''
                        ? setMenVisible(true)
                        : setWomenVisible(true),
                    450,
                  );
                }}>
                <AttributeInput
                  label={t('profile.sport')}
                  value={state.sport}
                  placeholder="Football"
                  readOnly={true}
                />
              </Button>
            </View>
            <View style={addPlayerModalStyles.rowWrapper}>
              <Button
                customStyle={{width: '50%'}}
                onPress={() => {
                  setPlayerVisible(false);
                  setTimeout(() => setPositionVisible(true), 450);
                }}>
                <AttributeInput
                  label={t('profile.position')}
                  value={state.position}
                  placeholder="QB"
                  readOnly={true}
                />
              </Button>
            </View>
          </View>
        </View>
        <View style={addPlayerModalStyles.modalFooter}>
          <Button customStyle={addPlayerModalStyles.bluetoothBtn}>
            <Text style={addPlayerModalStyles.bluetoothText}>{t('profile.connectDevice')}</Text>
            <Image style={addPlayerModalStyles.bluetoothImg} source={BluetoothImg} />
          </Button>
          <View style={addPlayerModalStyles.buttonGroupWrapper}>
            <Button
              customStyle={addPlayerModalStyles.cancelBtn}
              onPress={() => onAddPlayerModalClose(false)}>
              <Text style={addPlayerModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button
              customStyle={addPlayerModalStyles.confirmBtn}
              onPress={() => onAddPlayerModalClose(true)}>
              <Text style={addPlayerModalStyles.buttonText}>{t('profile.createSave')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );

  const genderModal = isGenderVisible => (
    <Modal
      isVisible={isGenderVisible}
      style={genderModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={genderModalStyles.container}>
        <View style={genderModalStyles.modalHeader}>
          <Text style={genderModalStyles.headerText}>{t('profile.genders.caption')}</Text>
        </View>
        <View style={genderModalStyles.modalBody}>
          <View style={genderModalStyles.colWrapper}>
            {Object.keys(genders).map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={genders}
                status={state.gender === genders[key]}
                setStatus={(status: string) => {
                  onChangeField('sport', '');
                  onChangeField('gender', genders[status]);
                }}
              />
            ))}
          </View>
          <View style={genderModalStyles.buttonsWrapper}>
            <Button
              customStyle={genderModalStyles.cancelBtn}
              onPress={() => onGenderModalClose(false)}>
              <Text style={genderModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button
              customStyle={genderModalStyles.confirmBtn}
              onPress={() => onGenderModalClose(true)}>
              <Text style={genderModalStyles.buttonText}>{t('general.save')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );

  const menModal = isMenVisible => (
    <Modal
      isVisible={isMenVisible}
      style={menModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={menModalStyles.container}>
        <View style={menModalStyles.modalHeader}>
          <Text style={menModalStyles.headerText}>{t('profile.menSports.caption')}</Text>
        </View>
        <View style={menModalStyles.modalBody}>
          <View style={menModalStyles.colWrapper}>
            {Object.keys(menSports).map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={menSports}
                status={state.sport === menSports[key]}
                setStatus={(status: string) => onChangeField('sport', menSports[status])}
              />
            ))}
          </View>
          <View style={menModalStyles.buttonsWrapper}>
            <Button customStyle={menModalStyles.cancelBtn} onPress={() => onMenModalClose(false)}>
              <Text style={menModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button customStyle={menModalStyles.confirmBtn} onPress={() => onMenModalClose(true)}>
              <Text style={menModalStyles.buttonText}>{t('general.save')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );

  const womenModal = isWomenVisible => (
    <Modal
      isVisible={isWomenVisible}
      style={womenModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={womenModalStyles.container}>
        <View style={womenModalStyles.modalHeader}>
          <Text style={womenModalStyles.headerText}>{t('profile.womenSports.caption')}</Text>
        </View>
        <View style={womenModalStyles.modalBody}>
          <View style={womenModalStyles.colWrapper}>
            {Object.keys(womenSports).map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={womenSports}
                status={state.sport === womenSports[key]}
                setStatus={(status: string) => onChangeField('sport', womenSports[status])}
              />
            ))}
          </View>
          <View style={womenModalStyles.buttonsWrapper}>
            <Button
              customStyle={womenModalStyles.cancelBtn}
              onPress={() => onWoenModalClose(false)}>
              <Text style={womenModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button
              customStyle={womenModalStyles.confirmBtn}
              onPress={() => onWoenModalClose(true)}>
              <Text style={womenModalStyles.buttonText}>{t('general.save')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );

  const positionModal = isPositionVisible => (
    <Modal
      isVisible={isPositionVisible}
      style={positionModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={positionModalStyles.container}>
        <View style={positionModalStyles.modalHeader}>
          <Text style={positionModalStyles.headerText}>{t('profile.positions.caption')}</Text>
        </View>
        <View style={positionModalStyles.modalBody}>
          <View style={positionModalStyles.colWrapper}>
            {['QB', 'OL', 'RB', 'FB', 'TE', 'WR'].map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={positions}
                status={state.position === key}
                setStatus={(status: string) => onChangeField('position', status)}
              />
            ))}
          </View>
          <View style={positionModalStyles.colWrapper}>
            {['DL', 'LB', 'CB', 'S', 'K', 'P'].map((key: string, i: number) => (
              <CheckListItem
                key={i}
                label={key}
                options={positions}
                status={state.position === key}
                setStatus={(status: string) => onChangeField('position', status)}
              />
            ))}
          </View>
          <View style={positionModalStyles.lastWrapper}>
            <View style={positionModalStyles.colWrapper}>
              {['KR', 'PR', 'LS'].map((key: string, i: number) => (
                <CheckListItem
                  key={i}
                  label={key}
                  options={positions}
                  status={state.position === key}
                  setStatus={(status: string) => onChangeField('position', status)}
                />
              ))}
            </View>
            <View style={positionModalStyles.buttonsWrapper}>
              <Button
                customStyle={positionModalStyles.cancelBtn}
                onPress={() => onPositionModalClose(false)}>
                <Text style={positionModalStyles.buttonText}>{t('general.cancel')}</Text>
              </Button>
              <Button
                customStyle={positionModalStyles.confirmBtn}
                onPress={() => onPositionModalClose(true)}>
                <Text style={positionModalStyles.buttonText}>{t('general.save')}</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftSideBarWrapper}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={LogoImg} />
        </View>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatarLogo} source={AvatarImg} />
        </View>
        <View style={styles.optionsWrapper}>
          <Button customStyle={styles.optionWrapper} onPress={() => console.log('Edit Profile')}>
            <Text style={styles.optionText}>{t('app.editProfile')}</Text>
            <Image style={styles.optionImg} source={ArrowRight} />
          </Button>
        </View>
      </View>
      <View style={styles.rightWrapper}>
        <View style={styles.headerWrapper}>
          <View style={styles.navWrapper}>
            {Object.keys(navigations).map((nav: string, i: number) => (
              <Button key={i} customStyle={styles.navButton} onPress={() => props.onChangeNav(nav)}>
                {props.currentNav === nav ? (
                  <Text style={StyleSheet.flatten([styles.navText, styles.navActiveText])}>
                    {navigations[nav]}
                  </Text>
                ) : (
                  <Text style={styles.navText}>{navigations[nav]}</Text>
                )}
              </Button>
            ))}
          </View>
          <RoundedButton onPress={() => setPlayerVisible(true)} label="Add Player" />
          <Button customStyle={styles.invite} onPress={() => console.log('Invite')}>
            <Text style={styles.navText}>Invite</Text>
          </Button>
        </View>
        {props.children}
      </View>
      <View style={styles.modalsWrapper}>
        {addPlayerModal(isPlayerVisible)}
        {positionModal(isPositionVisible)}
        {genderModal(isGenderVisible)}
        {menModal(isMenVisible)}
        {womenModal(isWomenVisible)}
      </View>
    </View>
  );
};

export default PlayerLayout;
