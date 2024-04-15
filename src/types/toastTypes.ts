import {IconName} from './iconType';

export type ToastProps = {
  backgroundColor?: string;
  bottom?: number;
  duration?: number;
  fontSize?: number;
  icon?: IconName;
  position?: 'top' | 'bottom';
  text?: string;
  textColor?: string;
  top?: number;
  visible?: boolean;
  onHide?: (visible: boolean) => void;
};
