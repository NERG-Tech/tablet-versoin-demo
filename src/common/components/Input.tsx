import React, {useEffect, useRef} from 'react';
import {View, TextInput, KeyboardTypeOptions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    width: '100%',
    height: 90,
    paddingVertical: 20,
    paddingHorizontal: 28,
    backgroundColor: COLORS.BACKGROUND_INPUT,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
    borderRadius: 24,
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
};

const Input = (props: TProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const {
    value,
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

export default Input;
