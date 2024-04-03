import {StyleProp, TextStyle, ViewStyle} from 'react-native';
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
