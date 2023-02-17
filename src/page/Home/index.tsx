import React from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppStack';
import * as NavigationConstants from '../../common/constants/NavigationConstants';
import MainLayout from '../../layouts/MainLayout';
import DashboardScreen from './Dashboard';
import GMModeScreen from './GMMode';
import CoachModeScreen from './CoachMode';

type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'home'>;
type HomeScreenRouteProp = RouteProp<AppStackParamList, 'home'>;

interface Params {
  activeNav: string;
}

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();
  const {activeNav} = route.params as Params;

  const setActiveNav = nav => {
    navigation.navigate(NavigationConstants.HOME, {activeNav: nav});
  };

  const goToPlayerScreen = () => {
    navigation.navigate(NavigationConstants.PERSONAL_INFO, {userId: 'new'});
  };

  const ScreenView = nav => {
    switch (nav) {
      case NavigationConstants.DASHBOARD:
        return <DashboardScreen />;
      case NavigationConstants.GM_MODE:
        return <GMModeScreen />;
      case NavigationConstants.COACH_MODE:
        return <CoachModeScreen />;
      case NavigationConstants.PERSONAL_INFO:
        goToPlayerScreen();
        break;
      default:
        break;
    }
  };

  return (
    <MainLayout currentNav={activeNav} onChangeNav={setActiveNav}>
      {ScreenView(activeNav)}
    </MainLayout>
  );
};

export default HomeScreen;
