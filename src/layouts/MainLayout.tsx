import React from 'react';
import {Image} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../common/constants/StyleConstants';
import {Button, RoundedButton} from '../common/components/buttons';
import {useAuth} from '../contexts/AuthProvider';
import * as NavigationConstants from '../common/constants/NavigationConstants';

const LogoImg = require('../assets/logo/logo_white.png');
const NFLImg = require('../assets/logo/NFL/NFL.png');
const ArrowRight = require('../assets/hoc/arrowRight.png');

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
});

type TProps = {
  children: any;
  currentNav: string;
  onChangeNav: (nav: string) => void;
};

const MainLayout = (props: TProps) => {
  const {t} = useTranslation();
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  console.log('currentNav: ', props.currentNav);

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
            {Object.keys(navigations).map((nav: string, i: number) => {
              if (props.currentNav === nav) {
                return (
                  <Button
                    key={i}
                    customStyle={styles.navButton}
                    onPress={() => props.onChangeNav(nav)}>
                    <Text style={StyleSheet.flatten([styles.navText, styles.navActiveText])}>
                      {navigations[nav]}
                    </Text>
                  </Button>
                );
              } else {
                return (
                  <Button
                    key={i}
                    customStyle={styles.navButton}
                    onPress={() => props.onChangeNav(nav)}>
                    <Text style={styles.navText}>{navigations[nav]}</Text>
                  </Button>
                );
              }
            })}
          </View>
          <RoundedButton onPress={() => console.log('Add Player')} label="Add Player" />
          <Button customStyle={styles.invite} onPress={() => console.log('Invite')}>
            <Text style={styles.navText}>Invite</Text>
          </Button>
        </View>
        {props.children}
      </View>
    </View>
  );
};

export default MainLayout;
