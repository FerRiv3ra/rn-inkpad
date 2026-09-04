import type {A11yProps} from './commonTypes';
import type {
  DimensionValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type {IconProp} from './iconTypes';

export type Action = {
  icon: IconProp;
  text?: string;
  onPress: () => void;
};

export type FabProps = A11yProps & {
  actions?: Action[];
  align?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  backgroundColor?: string;
  marginHorizontal?: number;
  marginVertical?: number;
  /** Icon of the main button. Used for both states unless `openIcon` / `closeIcon` are given. */
  icon?: IconProp;
  /** Icon while the actions menu is closed. Defaults to `icon` or a built-in plus. */
  openIcon?: IconProp;
  /** Icon while the actions menu is open. Defaults to `icon` or a built-in cross. */
  closeIcon?: IconProp;
  iconColor?: string;
  iconSize?: number;
  size?: number;
  onPress?: () => void;
};

export type ButtonProps = A11yProps & {
  activeOpacity?: number;
  buttonColor?: string;
  buttonType?: 'solid' | 'outline' | 'clear';
  color?: string;
  disabled?: boolean;
  full?: boolean;
  icon?: IconProp;
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

export type RadioProps = A11yProps & {
  values: RadioValue[];
  border?: boolean;
  borderColor?: string;
  defaultChecked?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  gap?: number;
  gapHorizontal?: number;
  /** Icon of the selected option. Defaults to a built-in filled circle. */
  checkedIcon?: IconProp;
  /** Icon of the unselected options. Defaults to a built-in empty circle. */
  unCheckedIcon?: IconProp;
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

export type CheckBoxProps = A11yProps & {
  checkedIcon?: IconProp;
  checked?: boolean;
  iconColor?: string;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  unCheckedIcon?: IconProp;
  onChange?: (value: boolean) => void;
};

export type LongPressButtonProps = A11yProps & {
  backgroundColor?: string;
  behavior?: 'left-to-right' | 'right-to-left' | 'center-to-ends';
  borderRadius?: number;
  fontSize?: number;
  fullWidth?: boolean;
  height?: DimensionValue;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  longPressTime?: number;
  progressColor?: string;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textColor?: string;
  width?: DimensionValue;
  onFinish?: () => void;
};
