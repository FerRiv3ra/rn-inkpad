import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {Icon} from '../';
import {CheckBoxProps} from '../../types';

export const CheckBox = ({
  checked = false,
  checkedIcon,
  iconColor = '#464EE5',
  iconSize = 20,
  style,
  textColor,
  textStyle,
  title,
  unCheckedIcon,
  onChange,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => {
    if (!!onChange) {
      onChange(!isChecked);
    }

    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      onPress={toggleCheck}
      style={[{flexDirection: 'row', alignItems: 'center', gap: 8}, style]}>
      <Icon
        name={
          isChecked
            ? checkedIcon ?? 'checkbox-outline'
            : unCheckedIcon ?? 'square-outline'
        }
        size={iconSize}
        color={iconColor}
      />
      {!!title && <Text style={[textStyle, {color: textColor}]}>{title}</Text>}
    </Pressable>
  );
};
