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
