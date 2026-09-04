import {useTheme} from '../../theme/ThemeProvider';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useButtonType} from '../../hooks';
import {buttonStyles} from '../../theme';
import type {ButtonProps} from '../../types';

export const Button = (props: ButtonProps) => {
  const {colors} = useTheme();
  const {
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
  } = props;
  const {backgroundColor, borderColor, borderWidth, textColor} = useButtonType(
    buttonColor ?? colors.primary,
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
          {renderIcon(icon, {size: iconSize ?? 18, color: textColor})}
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
