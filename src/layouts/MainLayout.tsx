import React, {useState} from 'react';
import {Image} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../common/constants/StyleConstants';
import {Input, AttributeInput, Button, RoundedButton} from '../common/components';
import {useAuth} from '../contexts/AuthProvider';
import * as NavigationConstants from '../common/constants/NavigationConstants';

const LogoImg = require('../assets/img/logo/logo_white.png');
const NFLImg = require('../assets/img/logo/NFL/NFL.png');
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
  nflWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 80,
  },
  nflLogo: {
    width: 170,
    height: 170,
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
  signOutWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 150,
  },
  signOut: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.MD,
    color: COLORS.PINK,
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

const confirmModalStyles = StyleSheet.create({
  modal: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 480,
    height: 210,
    borderRadius: 24,
    backgroundColor: COLORS.WHITE,
  },
  modalTitle: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.TEXT_DARK,
    marginTop: 40,
  },
  modalButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 30,
  },
  modalButton: {
    width: 165,
    height: 70,
    borderRadius: 50,
  },
  confirm: {
    backgroundColor: COLORS.GREEN,
  },
  cancel: {
    backgroundColor: COLORS.RED,
  },
  modalButtonText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
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
  serachText: {
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
  avatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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

type TProps = {
  children: React.ReactNode;
  currentNav: string;
  onChangeNav: (nav: string) => void;
};

const MainLayout = (props: TProps) => {
  const [isConfirmVisible, setConfrimVisible] = useState(false);
  const [isPlayerVisible, setPlayerVisible] = useState(false);
  const [search, setSearch] = useState('');
  const {t} = useTranslation();
  const auth = useAuth();
  const signOut = () => {
    setConfrimVisible(true);
  };

  const confirmModal = isConfirmVisible => (
    <Modal
      isVisible={isConfirmVisible}
      style={confirmModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={() => setConfrimVisible(false)}>
      <View style={confirmModalStyles.container}>
        <Text style={confirmModalStyles.modalTitle}>{t('general.confirm')}</Text>
        <View style={confirmModalStyles.modalButtonsWrapper}>
          <Button
            customStyle={StyleSheet.flatten([
              confirmModalStyles.modalButton,
              confirmModalStyles.cancel,
            ])}
            onPress={() => setConfrimVisible(false)}>
            <Text style={confirmModalStyles.modalButtonText}>{t('general.no')}</Text>
          </Button>
          <Button
            customStyle={StyleSheet.flatten([
              confirmModalStyles.modalButton,
              confirmModalStyles.confirm,
            ])}
            onPress={() => {
              auth.signOut();
              setTimeout(() => setConfrimVisible(false), 300);
            }}>
            <Text style={confirmModalStyles.modalButtonText}>{t('general.yes')}</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );

  const onAddPlayerModalClose = () => {
    setPlayerVisible(false);
    setSearch('');
  };

  const addPlayerModal = isPlayerVisible => (
    <Modal
      isVisible={isPlayerVisible}
      style={addPlayerModalStyles.modal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={() => onAddPlayerModalClose()}>
      <View style={addPlayerModalStyles.container}>
        <View style={addPlayerModalStyles.modalHeader}>
          <Input
            value={search}
            placeholder="Search"
            icon={<Image style={addPlayerModalStyles.serachImg} source={SearchImg} />}
            placeholderTextColor={COLORS.TEXT_GREY_LIGHT}
            textStyle={addPlayerModalStyles.serachText}
            inputStyle={addPlayerModalStyles.searchWrapper}
            onChangeText={(text: string) => setSearch(text)}
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
          <View style={addPlayerModalStyles.colWrapper}>
            <View style={addPlayerModalStyles.avatarWrapper}>
              <Image style={addPlayerModalStyles.avatar} source={AvatarImg} />
              <RoundedButton
                label={t('profile.uploadPhoto')}
                customStyle={addPlayerModalStyles.uploadBtn}
                onPress={() => console.log('Uplaod Photo')}
              />
            </View>
            <AttributeInput
              label={t('profile.age')}
              value="34"
              onChangeText={(text: string) => console.log('age: ', text)}
            />
          </View>
          <View style={addPlayerModalStyles.colWrapper}>
            <AttributeInput
              label={t('profile.name')}
              value="Tom Brady"
              onChangeText={(text: string) => console.log('name: ', text)}
            />
            <AttributeInput
              label={t('profile.college')}
              value="Michigan"
              onChangeText={(text: string) => console.log('college: ', text)}
            />
            <AttributeInput
              label={t('profile.gamesWon')}
              value="20/44"
              onChangeText={(text: string) => console.log('gamesWon: ', text)}
            />
            <AttributeInput
              label={t('profile.height')}
              value="5’5”"
              onChangeText={(text: string) => console.log('height: ', text)}
            />
          </View>
          <View style={addPlayerModalStyles.colWrapper}>
            <Button onPress={() => console.log('position select')}>
              <AttributeInput
                label={t('profile.position')}
                readOnly={true}
                value="QB"
                onChangeText={(text: string) => console.log('position: ', text)}
              />
            </Button>
            <AttributeInput
              label={t('profile.gamesStarted')}
              value="30/44"
              onChangeText={(text: string) => console.log('gamesStarted: ', text)}
            />
            <AttributeInput
              label={t('profile.targetRound')}
              value="3rd"
              onChangeText={(text: string) => console.log('targetRound: ', text)}
            />
            <AttributeInput
              label={t('profile.weight')}
              value="145 LBS"
              onChangeText={(text: string) => console.log('weight: ', text)}
            />
          </View>
        </View>
        <View style={addPlayerModalStyles.modalFooter}>
          <Button customStyle={addPlayerModalStyles.bluetoothBtn}>
            <Text style={addPlayerModalStyles.bluetoothText}>{t('profile.connectDevice')}</Text>
            <Image style={addPlayerModalStyles.bluetoothImg} source={BluetoothImg} />
          </Button>
          <View style={addPlayerModalStyles.buttonGroupWrapper}>
            <Button customStyle={addPlayerModalStyles.cancelBtn}>
              <Text style={addPlayerModalStyles.buttonText}>{t('general.cancel')}</Text>
            </Button>
            <Button customStyle={addPlayerModalStyles.confirmBtn}>
              <Text style={addPlayerModalStyles.buttonText}>{t('profile.createSave')}</Text>
            </Button>
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
        <View style={styles.nflWrapper}>
          <Image style={styles.nflLogo} source={NFLImg} />
        </View>
        <View style={styles.optionsWrapper}>
          <Button customStyle={styles.optionWrapper} onPress={() => console.log('Edit Profile')}>
            <Text style={styles.optionText}>{t('app.editProfile')}</Text>
            <Image style={styles.optionImg} source={ArrowRight} />
          </Button>
          <Button customStyle={styles.optionWrapper} onPress={() => console.log('Privacy Policy')}>
            <Text style={styles.optionText}>{t('app.privacyPolicy')}</Text>
            <Image style={styles.optionImg} source={ArrowRight} />
          </Button>
          <Button customStyle={styles.optionWrapper} onPress={() => console.log('Settings')}>
            <Text style={styles.optionText}>{t('app.settings')}</Text>
            <Image style={styles.optionImg} source={ArrowRight} />
          </Button>
        </View>
        <Button customStyle={styles.signOutWrapper} onPress={() => signOut()}>
          <Text style={styles.signOut}>{t('app.signOut')}</Text>
        </Button>
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
        {confirmModal(isConfirmVisible)}
        {addPlayerModal(isPlayerVisible)}
      </View>
    </View>
  );
};

export default MainLayout;
