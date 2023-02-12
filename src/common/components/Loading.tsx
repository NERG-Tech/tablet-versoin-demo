import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/StyleConstants';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={COLORS.BLACK_LIGHT} animating={true} size="small" />
    </View>
  );
};

export default Loading;
