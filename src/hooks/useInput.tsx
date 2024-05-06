import {useState} from 'react';
import {useInputStyles} from '.';
import {IconName, inputProps} from '../types';

export const useInput = ({
  borderRadius,
  borderColor,
  type = 'filled',
  password,
  search,
  rightIcon,
  label,
  onPress,
}: inputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(!password);
  const [isFocused, setIsFocused] = useState(false);

  const {inputStyle, titleStyle} = useInputStyles(
    type,
    isFocused,
    !!label,
    borderColor,
    borderRadius,
  );

  const getRightIcon = (): IconName => {
    if (!!password) {
      if (passwordVisible) {
        return 'eye-off';
      } else {
        return 'eye';
      }
    }

    if (!!search) {
      return 'search';
    }

    if (!!rightIcon) {
      return rightIcon;
    }

    return 'chevron-forward';
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePress = () => {
    if (!!password) {
      setPasswordVisible(!passwordVisible);
    } else {
      if (!!onPress) {
        onPress();
      }
    }
  };

  return {
    getRightIcon,
    handleBlur,
    handleFocus,
    handlePress,
    inputStyle,
    passwordVisible,
    titleStyle,
  };
};
