import React from 'react';
import {Keyboard, Pressable, Text, TextInput, View} from 'react-native';
import {Icon} from '..';
import {useInput} from '../../hooks';
import {inputStyles} from '../../theme/inputStyles';
import {inputProps} from '../../types';

export const Input = (props: inputProps) => {
  const {
    autoComplete,
    borderColor,
    borderRadius,
    icon,
    iconColor,
    iconSize,
    keyboardType,
    label,
    labelColor,
    onChangeText,
    onEndEditing,
    password = false,
    placeholder,
    placeholderColor,
    rightIcon,
    rightIconColor,
    rightIconSize,
    search = false,
    style,
    textColor,
    textContentType,
    textStyle,
    type = 'filled',
    value,
  } = props;

  const {
    getRightIcon,
    handleBlur,
    handleFocus,
    handlePress,
    inputStyle,
    passwordVisible,
    titleStyle,
  } = useInput(props);

  return (
    <View style={[{width: '100%'}, style]}>
      {label && (
        <View
          style={{
            flexDirection: 'row',
            marginBottom: type === 'outlined' ? -8 : 0,
          }}>
          {type === 'outlined' && (
            <View
              style={{
                borderTopColor: borderColor,
                borderTopWidth: 1,
                borderLeftColor: borderColor,
                borderLeftWidth: 1,
                width: 10,
                height: 18,
                marginBottom: -6,
                borderTopLeftRadius: borderRadius,
              }}
            />
          )}
          <Text style={[{...inputStyles.label, color: labelColor}, titleStyle]}>
            {label}
          </Text>
          {type === 'outlined' && (
            <View
              style={{
                borderTopColor: borderColor,
                borderTopWidth: 1,
                borderRightColor: borderColor,
                borderRightWidth: 1,
                flex: 1,
                borderTopRightRadius: borderRadius,
              }}
            />
          )}
        </View>
      )}

      <View
        style={{
          ...inputStyles.input,
          ...inputStyle,
          flexDirection: 'row',
        }}>
        {icon && <Icon name={icon} color={iconColor} size={iconSize ?? 15} />}
        <TextInput
          style={[
            {
              flex: 1,
              fontWeight: '600',
              color: textColor,
            },
            textStyle,
          ]}
          autoComplete={password ? 'password' : autoComplete}
          keyboardType={keyboardType}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onFocus={handleFocus}
          onSubmitEditing={() => Keyboard.dismiss()}
          placeholder={placeholder ?? label ?? 'Input'}
          placeholderTextColor={placeholderColor}
          secureTextEntry={password ? !passwordVisible : false}
          textContentType={password ? 'password' : textContentType}
          value={value}
        />
        {(password || search || rightIcon) && (
          <Pressable
            style={{
              ...inputStyles.btnViewPass,
            }}
            onPress={handlePress}>
            <Icon
              style={inputStyles.icon}
              color={rightIconColor}
              size={rightIconSize ?? 18}
              name={getRightIcon()}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};
