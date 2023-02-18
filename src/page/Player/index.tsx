import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppStack';
import * as NavigationConstants from '../../common/constants/NavigationConstants';
import PlayerLayout from '../../layouts/PlayerLayout';

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
        userId: 'new',
        activeTab: NavigationConstants.SNAPSHOT,
      });
    }
  };

  const setActiveTab = tab => {
    navigation.navigate(NavigationConstants.PERSONAL_INFO, {userId: 'new', activeTab: tab});
  };

  return (
    <PlayerLayout currentTab={activeTab} onChangeNav={setActiveNav} onChangeTab={setActiveTab}>
      <View>
        <Text>Player {userId}</Text>
      </View>
    </PlayerLayout>
  );
};

export default PlayerScreen;
