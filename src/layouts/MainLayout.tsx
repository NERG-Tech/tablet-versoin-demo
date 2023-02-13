import React from 'react';
import {Image} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../common/constants/StyleConstants';
import {Button, RoundedButton} from '../common/components/buttons';
import {navigationRef} from '../navigation/AppNavigator';
import * as Navigations from '../common/constants/NavigationConstants';

const LogoImg = require('../assets/logo/logo_white.png');

const navigations = {
  [Navigations.DASHBOARD]: 'Dashboard',
  [Navigations.GM_MODE]: 'GM Mode',
  [Navigations.COACH_MODE]: 'Coach Mode',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSideBarWrapper: {
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
};

const MainLayout = (props: TProps) => {
  const currentRoute = navigationRef.current?.getCurrentRoute();
  const currentNav = currentRoute?.name || Navigations.DASHBOARD;
  console.log('route: ', currentNav);

  return (
    <View style={styles.container}>
      <View style={styles.leftSideBarWrapper}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={LogoImg} />
        </View>
        <Text style={{color: COLORS.WHITE}}>Left Sidebar</Text>
      </View>
      <View style={styles.rightWrapper}>
        <View style={styles.headerWrapper}>
          <View style={styles.navWrapper}>
            {Object.keys(navigations).map((nav: string, i: number) => {
              if (currentNav === nav) {
                return (
                  <Button
                    key={i}
                    customStyle={styles.navButton}
                    onPress={() => console.log('nav: ', navigations[nav])}>
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
                    onPress={() => console.log('nav: ', navigations[nav])}>
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
