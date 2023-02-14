import React, {useState} from 'react';
import * as NavigationConstants from '../common/constants/NavigationConstants';
import MainLayout from '../layouts/MainLayout';
import DashboardScreen from './Dashboard';
import GMModeScreen from './GMMode';
import CoachModeScreen from './CoachMode';

const HomeScreen = () => {
  const [nav, setNav] = useState(NavigationConstants.DASHBOARD);

  const ScreenView = nav => {
    if (nav === NavigationConstants.DASHBOARD) {
      return <DashboardScreen />;
    } else if (nav === NavigationConstants.GM_MODE) {
      return <GMModeScreen />;
    } else if (nav === NavigationConstants.COACH_MODE) {
      return <CoachModeScreen />;
    }
  };

  return (
    <MainLayout currentNav={nav} onChangeNav={setNav}>
      {ScreenView(nav)}
    </MainLayout>
  );
};

export default HomeScreen;
