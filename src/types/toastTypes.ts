import type {A11yProps} from './commonTypes';
import type {IconProp} from './iconTypes';

export type ToastProps = A11yProps & {
  backgroundColor?: string;
  bottom?: number;
  duration?: number;
  fontSize?: number;
  icon?: IconProp;
  position?: 'top' | 'bottom';
  text: string;
  textColor?: string;
  top?: number;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
