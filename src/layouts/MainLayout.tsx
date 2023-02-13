import React from 'react';
import {Image} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../common/constants/StyleConstants';
import {navigationRef} from '../navigation/AppNavigator';

const LogoImg = require('../assets/logo/logo_white.png');

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
    height: 100,
    backgroundColor: COLORS.BACKGROUND_DARK,
  },
});

type TProps = {
  children: any;
};

const MainLayout = (props: TProps) => {
  console.log('route: ', navigationRef.current?.getCurrentRoute());

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
          <Text style={{color: COLORS.WHITE}}>Header</Text>
        </View>
        {props.children}
      </View>
    </View>
  );
};

export default MainLayout;
