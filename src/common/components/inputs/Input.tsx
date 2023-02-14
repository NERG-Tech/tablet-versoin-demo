import React, {useEffect, useRef} from 'react';
import {View, TextInput, KeyboardTypeOptions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    backgroundColor: COLORS.BACKGROUND_INPUT,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.TRANSPARENT,
  },
});

type TProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoFocus?: boolean;
  selectionColor?: string;
  textStyle?: TextStyle;
  inputStyle?: ViewStyle;
  icon?: React.ReactNode;
};

export const Input = (props: TProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const {
    value,
    icon,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    keyboardType,
    autoFocus,
    selectionColor,
    textStyle,
    inputStyle,
  } = props;

  useEffect(() => {
    if (autoFocus && autoFocus === true) {
      if (inputRef) {
        inputRef.current?.focus();
      }
    }
  }, [autoFocus]);

  return (
    <View style={StyleSheet.flatten([styles.container, inputStyle])}>
      {!!icon && icon}
      <TextInput
        ref={inputRef}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY}
        autoCorrect={false}
        autoFocus={autoFocus}
        selectionColor={selectionColor || COLORS.TEXT_GREY}
        style={StyleSheet.flatten([styles.input, textStyle])}
        value={value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
