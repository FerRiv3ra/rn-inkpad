import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Icon} from '../';
import {useDirection} from '../../hooks';
import {RadioProps} from '../../types';

export const RadioButtons = ({
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
  textColor,
  textStyle,
  values,
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>();

  const {flexDirection, spacing} = useDirection(iconPosition, gap);

  useEffect(() => {
    if (defaultChecked !== undefined) {
      const {value} = values[defaultChecked];

      setChecked(value);
    }

    return () => setChecked(undefined);
  }, [defaultChecked]);

  const handlePress = (value: string | number) => {
    setChecked(value);
    if (!!onChange) {
      onChange(value);
    }
  };

  return (
    <View
      style={[
        orientation == 'horizontal'
          ? {
              gap: gapHorizontal,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }
          : {
              width: fullWidth ? '100%' : undefined,
            },
        style,
      ]}>
      {values.map(({value, text}) => (
        <Pressable
          onPress={() => handlePress(value)}
          disabled={disabled}
          key={value}
          style={[
            {
              alignItems: 'center',
              flexDirection,
              gap: !!gap ? gap : spacing,
              justifyContent:
                iconPosition === 'right' ? 'space-between' : 'center',
              marginVertical,
            },
            border && {
              borderWidth: 1,
              borderRadius: 3,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderColor: disabled ? '#AAA' : borderColor,
            },
          ]}>
          <Icon
            name={checked === value ? 'radio-button-on' : 'radio-button-off'}
            size={iconSize}
            color={disabled ? '#AAA' : iconColor}
          />
          {!!text && (
            <Text style={[textStyle, {color: textColor}]}>{text}</Text>
          )}
        </Pressable>
      ))}
    </View>
  );
};
