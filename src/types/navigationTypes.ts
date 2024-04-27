import {StyleProp, TextStyle} from 'react-native';
import {IconName} from './iconType';

export type NavigationItemType = {
  highlighted?: boolean;
  icon?: IconName;
  text?: string;
  onPress?: () => void;
};

export type NavigationItemProps = {
  item: NavigationItemType;
  highlightedBgColor?: string;
  iconColor?: string;
  iconSize?: number;
  selected?: boolean;
  selectedColor?: string;
  selectedheight?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export type BottomTabNavigationProps = {
  backgroundColor?: string;
  highlightedBgColor?: string;
  highlightedIconColor?: string;
  iconColor?: string;
  iconSize?: number;
  labelStyle?: StyleProp<TextStyle>;
  selectedColor?: string;
  selectedheight?: number;
  selectedIndex?: number;
  textColor?: string;
  values?: NavigationItemType[];
};
