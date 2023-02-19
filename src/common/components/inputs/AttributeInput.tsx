import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: COLORS.BACKGROUND_GREY,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.MD,
    color: COLORS.WHITE,
    textAlign: 'center',
    backgroundColor: COLORS.TRANSPARENT,
  },
  label: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XS,
    color: COLORS.TEXT_GREY_LIGHTER,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRightWidth: 1.5,
    borderRightColor: COLORS.DIVIDER_LIGHT,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type TProps = {
  value: string;
  label: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  readOnly?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoFocus?: boolean;
  selectionColor?: string;
  textStyle?: TextStyle;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  isOnlyText?: boolean;
};

export const AttributeInput = (props: TProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const {
    value,
    label,
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    readOnly,
    keyboardType,
    autoFocus,
    selectionColor,
    textStyle,
    labelStyle,
    inputStyle,
    isOnlyText,
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
      <Text style={StyleSheet.flatten([styles.label, labelStyle])}>{label}</Text>
      {isOnlyText ? (
        <View style={styles.text}>
          <Text style={textStyle}>{value}</Text>
        </View>
      ) : (
        <TextInput
          ref={inputRef}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          editable={!readOnly}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || COLORS.TEXT_GREY}
          autoCorrect={false}
          autoFocus={autoFocus}
          selectionColor={selectionColor || COLORS.TEXT_GREY}
          style={StyleSheet.flatten([styles.input, textStyle])}
          value={value}
          onChangeText={props.onChangeText}
        />
      )}
    </View>
  );
};
