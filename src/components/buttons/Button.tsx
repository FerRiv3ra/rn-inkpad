import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {useButtonType} from '../../hooks';
import {buttonStyles} from '../../theme';
import type {ButtonProps} from '../../types';
import {Icon} from '../icon/Icon';

export const Button = ({
  accessibilityHint,
  accessibilityLabel,
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
  text = 'Button',
  testID,
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
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? text}
      accessibilityHint={accessibilityHint}
      accessibilityState={{disabled: !!disabled, busy: !!loading}}
      testID={testID}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        buttonStyles.button,
        {
          backgroundColor,
          borderColor,
          borderWidth,
          borderRadius: rounded ? 100 : 0,
          flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
          width: full ? '100%' : 'auto',
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={textColor} size={spinnerSize} />
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
