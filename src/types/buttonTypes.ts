import {DimensionValue, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconName} from './iconType';

export type Action = {
  icon: IconName;
  text?: string;
  onPress: () => void;
};

export type FabProps = {
  actions?: Action[];
  align?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  backgroundColor?: string;
  marginHorizontal?: number;
  marginVertical?: number;
  icon?: IconName;
  iconColor?: string;
  iconSize?: number;
  size?: number;
  onPress?: () => void;
};

export type ButtonProps = {
  activeOpacity?: number;
  buttonColor?: string;
  buttonType?: 'solid' | 'outline' | 'clear';
  color?: string;
  disabled?: boolean;
  full?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  loading?: boolean;
  rounded?: boolean;
  spinnerSize?: number | 'small' | 'large';
  style?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

type RadioValue = {
  text?: string;
  value: string | number;
};

export type RadioProps = {
  values: RadioValue[];
  border?: boolean;
  borderColor?: string;
  defaultChecked?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  gap?: number;
  gapHorizontal?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'bottom' | 'top' | 'right';
  iconSize?: number;
  marginVertical?: DimensionValue;
  orientation?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onChange?: (value: string | number) => void;
};

export type CheckBoxProps = {
  checkedIcon?: IconName;
  checked?: boolean;
  iconColor?: string;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  unCheckedIcon?: IconName;
  onChange?: (value: boolean) => void;
};

export type LongPressButtonProps = {
  backgroundColor?: string;
  behavior?: 'left-to-right' | 'right-to-left' | 'center-to-ends';
  borderRadius?: number;
  fontSize?: number;
  fullWidth?: boolean;
  height?: DimensionValue;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  longPressTime?: number;
  progressColor?: string;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textColor?: string;
  width?: DimensionValue;
  onFinish?: () => void;
};
