import {memo, useCallback, useEffect, useState} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from '../';
import {useDirection} from '../../hooks';
import type {RadioProps} from '../../types';

type OptionProps = {
  value: string | number;
  text?: string;
  checked: boolean;
  disabled?: boolean;
  border?: boolean;
  borderColor: string;
  iconColor: string;
  iconSize: number;
  iconPosition?: 'left' | 'bottom' | 'top' | 'right';
  flexDirection: ViewStyle['flexDirection'];
  gap: ViewStyle['gap'];
  marginVertical: ViewStyle['marginVertical'];
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  onPress: (value: string | number) => void;
};

const Option = memo(
  ({
    value,
    text,
    checked,
    disabled,
    border,
    borderColor,
    iconColor,
    iconSize,
    iconPosition,
    flexDirection,
    gap,
    marginVertical,
    textColor,
    textStyle,
    testID,
    onPress,
  }: OptionProps) => (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel={text ?? String(value)}
      accessibilityState={{checked, disabled: !!disabled}}
      testID={testID}
      onPress={() => onPress(value)}
      disabled={disabled}
      style={[
        styles.option,
        {
          flexDirection,
          gap,
          justifyContent: iconPosition === 'right' ? 'space-between' : 'center',
          marginVertical,
        },
        border && [
          styles.border,
          {borderColor: disabled ? '#AAA' : borderColor},
        ],
      ]}>
      <Icon
        name={checked ? 'radio-button-on' : 'radio-button-off'}
        size={iconSize}
        color={disabled ? '#AAA' : iconColor}
      />
      <Text style={[textStyle, {color: textColor}]}>{text ?? value}</Text>
    </Pressable>
  ),
);

export const RadioButtons = ({
  accessibilityLabel,
  border,
  borderColor = '#464EE5',
  defaultChecked,
  disabled,
  fullWidth,
  gap,
  gapHorizontal = 10,
  iconColor = '#464EE5',
  iconPosition,
  iconSize = 20,
  marginVertical = 8,
  onChange,
  orientation = 'vertical',
  style,
  testID,
  textColor,
  textStyle,
  values,
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>();

  const {flexDirection, spacing} = useDirection(
    iconPosition,
    typeof gap === 'number' ? gap : undefined,
  );

  // Derive a primitive so inline `values` arrays do not re-run the effect.
  const defaultValue =
    defaultChecked !== undefined ? values[defaultChecked]?.value : undefined;

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  const handlePress = useCallback(
    (value: string | number) => {
      setChecked(value);
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <View
      accessibilityRole="radiogroup"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[
        orientation === 'horizontal'
          ? [styles.horizontal, {gap: gapHorizontal}]
          : {width: fullWidth ? '100%' : undefined},
        style,
      ]}>
      {values.map(({value, text}, index) => (
        <Option
          key={value}
          value={value}
          text={text}
          checked={checked === value}
          disabled={disabled}
          border={border}
          borderColor={borderColor}
          iconColor={iconColor}
          iconSize={iconSize}
          iconPosition={iconPosition}
          flexDirection={flexDirection}
          gap={typeof gap === 'number' ? gap : spacing}
          marginVertical={marginVertical}
          textColor={textColor}
          textStyle={textStyle}
          testID={testID ? `${testID}-option-${index}` : undefined}
          onPress={handlePress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
