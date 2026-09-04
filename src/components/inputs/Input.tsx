import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Icon} from '..';
import {useInput} from '../../hooks';
import {inputStyles} from '../../theme/inputStyles';
import type {inputProps} from '../../types';

export const Input = (props: inputProps) => {
  const {
    accessibilityHint,
    accessibilityLabel,
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
    testID,
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
          <Text style={[inputStyles.label, {color: labelColor}, titleStyle]}>
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

      <View style={[inputStyles.input, inputStyle, styles.row]}>
        {icon && <Icon name={icon} color={iconColor} size={iconSize ?? 15} />}
        <TextInput
          accessibilityLabel={accessibilityLabel ?? label ?? placeholder}
          accessibilityHint={accessibilityHint}
          testID={testID}
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
            accessibilityRole="button"
            accessibilityLabel={
              password
                ? passwordVisible
                  ? 'Hide password'
                  : 'Show password'
                : search
                  ? 'Search'
                  : 'Action'
            }
            testID={testID ? `${testID}-right-button` : undefined}
            style={inputStyles.btnViewPass}
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

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
});
