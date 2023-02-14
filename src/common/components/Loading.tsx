import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/StyleConstants';

export const Loading = ({size = 'large'}: {size?: number | 'small' | 'large' | undefined}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={COLORS.BLACK_LIGHT} animating={true} size={size} />
    </View>
  );
};
