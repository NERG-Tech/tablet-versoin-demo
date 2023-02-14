import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../constants/StyleConstants';
import {Button} from './buttons';

const CheckActiveImg = require('../../assets/img/hoc/checkActive.png');
const CheckNormalImg = require('../../assets/img/hoc/checkNormal.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.UNDERLINE,
  },
  text: {
    flex: 1,
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.MD,
    color: COLORS.WHITE,
  },
  checkItem: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

type TProps = {
  label: string;
  options?: object;
  status: boolean;
  setStatus: (status: string | boolean) => void;
};

export const CheckListItem = (props: TProps) => {
  const {label, options, status} = props;

  return (
    <Button onPress={options ? () => props.setStatus(label) : () => props.setStatus(!status)}>
      <View style={styles.container}>
        <Text style={styles.text}>{options ? options[label] : label}</Text>
        {status ? (
          <Image style={styles.checkItem} source={CheckActiveImg} />
        ) : (
          <Image style={styles.checkItem} source={CheckNormalImg} />
        )}
      </View>
    </Button>
  );
};
