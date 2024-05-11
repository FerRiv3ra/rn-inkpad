import {StyleProp, TextStyle} from 'react-native';

export type SwitchProps = {
  isOn?: boolean;
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
