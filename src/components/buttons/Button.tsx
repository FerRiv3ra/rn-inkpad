import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {useButtonType} from '../../hooks';
import {buttonStyles} from '../../theme';
import {ButtonProps} from '../../types';
import {Icon} from '../icon/Icon';

export const Button = ({
  activeOpacity = 0.6,
  buttonColor,
  buttonType,
  disabled,
  full,
  icon,
  color,
  iconSize,
  iconPosition = 'left',
  loading,
  rounded,
  spinnerSize,
  style,
  text,
  textStyle,
  onPress,
}: ButtonProps) => {
  const {backgroundColor, borderColor, borderWidth, textColor} = useButtonType(
    buttonColor,
    color,
    buttonType,
    disabled,
  );

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={[
        buttonStyles.button,
        {
          backgroundColor,
          borderColor,
          borderWidth,
          borderRadius: rounded ? 100 : 0,
          flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
          width: full ? '100%' : undefined,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={color} size={spinnerSize} />
      ) : (
        <>
          {!!icon && <Icon name={icon} size={iconSize} color={textColor} />}
          {!!text && (
            <Text style={[buttonStyles.text, {color: textColor}, textStyle]}>
              {text}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
