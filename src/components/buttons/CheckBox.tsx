import {useTheme} from '../../theme/ThemeProvider';
import {useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {CheckBoxGlyph} from '../glyphs/Glyphs';
import type {CheckBoxProps} from '../../types';

export const CheckBox = (props: CheckBoxProps) => {
  const {colors} = useTheme();
  const {
    accessibilityHint,
    accessibilityLabel,
    checked = false,
    checkedIcon,
    iconColor = colors.primary,
    iconSize = 20,
    style,
    testID,
    textColor,
    textStyle,
    title = 'Item',
    unCheckedIcon,
    onChange,
  } = props;
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
      {isChecked && checkedIcon ? (
        renderIcon(checkedIcon, {size: iconSize, color: iconColor})
      ) : !isChecked && unCheckedIcon ? (
        renderIcon(unCheckedIcon, {size: iconSize, color: iconColor})
      ) : (
        <CheckBoxGlyph
          checked={isChecked}
          size={iconSize}
          color={iconColor}
          testID={testID ? `${testID}-icon` : undefined}
        />
      )}
      {!!title && <Text style={[textStyle, {color: textColor}]}>{title}</Text>}
    </Pressable>
  );
};
