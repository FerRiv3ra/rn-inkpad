import type {A11yProps} from './commonTypes';
import type {StyleProp, TextStyle} from 'react-native';

export type SwitchProps = A11yProps & {
  isOn?: boolean;
  /** Track (and Android thumb) color when the switch is on. */
  backgroundColor?: string;
  /** @deprecated Typo kept for backwards compatibility. Use `backgroundColor`. */
  backgrounColor?: string;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  fullWidth?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  onChange?: (value: boolean) => void;
};
