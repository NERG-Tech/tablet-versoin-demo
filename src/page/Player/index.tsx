import React from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppStack';
import * as NavigationConstants from '../../common/constants/NavigationConstants';
import PlayerLayout from '../../layouts/PlayerLayout';
import SnapshotScreen from './Snapshot';
import NutrientsScreen from './Nutrients';
import ExerciseScreen from './Exercise';
import RestScreen from './Rest';
import GeneticsScreen from './Genetics';

type PlayerScreenNavigationProp = StackNavigationProp<AppStackParamList, 'personal_info'>;
type PlayerScreenRouteProp = RouteProp<AppStackParamList, 'personal_info'>;

interface Params {
  userId: string;
  activeTab: string;
}

const PlayerScreen = () => {
  const navigation = useNavigation<PlayerScreenNavigationProp>();
  const route = useRoute<PlayerScreenRouteProp>();
  const {userId, activeTab} = route.params as Params;

  const setActiveNav = nav => {
    if (nav !== NavigationConstants.PERSONAL_INFO) {
      navigation.navigate(NavigationConstants.HOME, {activeNav: nav});
    } else {
      navigation.navigate(NavigationConstants.PERSONAL_INFO, {
        userId: userId,
        activeTab: NavigationConstants.SNAPSHOT,
      });
    }
  };

  const setActiveTab = tab => {
    navigation.navigate(NavigationConstants.PERSONAL_INFO, {userId: userId, activeTab: tab});
  };

  const ScreenView = tab => {
    switch (tab) {
      case NavigationConstants.SNAPSHOT:
        return <SnapshotScreen />;
      case NavigationConstants.NUTRIENTS:
        return <NutrientsScreen />;
      case NavigationConstants.EXERCISE:
        return <ExerciseScreen />;
      case NavigationConstants.REST:
        return <RestScreen />;
      case NavigationConstants.GENETICS:
        return <GeneticsScreen />;
      default:
        break;
    }
  };

  return (
    <PlayerLayout currentTab={activeTab} onChangeNav={setActiveNav} onChangeTab={setActiveTab}>
      {ScreenView(activeTab)}
    </PlayerLayout>
  );
};

export default PlayerScreen;
