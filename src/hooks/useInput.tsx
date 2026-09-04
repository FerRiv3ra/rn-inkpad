import {useEffect, useState} from 'react';
import {useInputStyles} from '.';
import {ChevronGlyph, EyeGlyph, SearchGlyph} from '../components/glyphs/Glyphs';
import {useTheme} from '../theme/ThemeProvider';
import type {IconProp, IconProps, inputProps} from '../types';

const HiddenPasswordGlyph = (props: IconProps) => <EyeGlyph {...props} />;
const VisiblePasswordGlyph = (props: IconProps) => <EyeGlyph {...props} off />;
const ForwardGlyph = (props: IconProps) => (
  <ChevronGlyph {...props} direction="right" />
);

export const useInput = ({
  borderRadius,
  borderColor,
  type = 'filled',
  password,
  search,
  rightIcon,
  showPasswordIcon = HiddenPasswordGlyph,
  hidePasswordIcon = VisiblePasswordGlyph,
  label,
  onPress,
}: inputProps) => {
  const {colors} = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(!password);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setPasswordVisible(!password);
  }, [password]);

  const {inputStyle, titleStyle} = useInputStyles(
    type,
    isFocused,
    !!label,
    borderColor ?? colors.border,
    borderRadius,
  );

  const getRightIcon = (): IconProp => {
    if (password) {
      return passwordVisible ? hidePasswordIcon : showPasswordIcon;
    }

    if (search) {
      return SearchGlyph;
    }

    return rightIcon ?? ForwardGlyph;
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePress = () => {
    if (password) {
      setPasswordVisible(!passwordVisible);
    } else {
      onPress?.();
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
