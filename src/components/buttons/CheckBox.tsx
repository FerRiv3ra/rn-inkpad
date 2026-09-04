import {useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {Icon} from '../';
import type {CheckBoxProps} from '../../types';

export const CheckBox = ({
  accessibilityHint,
  accessibilityLabel,
  checked = false,
  checkedIcon,
  iconColor = '#464EE5',
  iconSize = 20,
  style,
  testID,
  textColor,
  textStyle,
  title = 'Item',
  unCheckedIcon,
  onChange,
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  // Keep in sync when used as a controlled component.
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggleCheck = () => {
    if (onChange) {
      onChange(!isChecked);
    }

    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{checked: isChecked}}
      testID={testID}
      onPress={toggleCheck}
      style={[{flexDirection: 'row', alignItems: 'center', gap: 8}, style]}>
      <Icon
        name={
          isChecked
            ? (checkedIcon ?? 'checkbox-outline')
            : (unCheckedIcon ?? 'square-outline')
        }
        size={iconSize}
        color={iconColor}
      />
      {!!title && <Text style={[textStyle, {color: textColor}]}>{title}</Text>}
    </Pressable>
  );
};
