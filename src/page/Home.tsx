import React, {useState} from 'react';
import {Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import * as NavigationConstants from '../common/constants/NavigationConstants';

const HomeScreen = () => {
  const [nav, setNav] = useState(NavigationConstants.DASHBOARD);

  return (
    <MainLayout currentNav={nav} onChangeNav={setNav}>
      <Text>{nav}</Text>
    </MainLayout>
  );
};

export default HomeScreen;
