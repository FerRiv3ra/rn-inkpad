import type {A11yProps} from './commonTypes';
import type {IconName} from './iconType';

export type ToastProps = A11yProps & {
  backgroundColor?: string;
  bottom?: number;
  duration?: number;
  fontSize?: number;
  icon?: IconName;
  position?: 'top' | 'bottom';
  text: string;
  textColor?: string;
  top?: number;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
