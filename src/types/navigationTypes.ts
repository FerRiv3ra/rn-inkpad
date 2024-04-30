import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
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

export type DrawerItemType = {
  text: string;
  icon: IconName;
  onPress?: () => void;
};

export type GroupItem = {
  text: string;
  icon: IconName;
  items: DrawerItemType[];
};

type Items = DrawerItemType | GroupItem;

export type DrawerNavigationProps = {
  backgroundColor?: string;
  collapseIcon?: IconName;
  expandIcon?: IconName;
  fontSize?: number;
  icon?: IconName;
  iconColor?: string;
  iconSize?: number;
  iconTop?: number;
  image?: ImageSourcePropType;
  imageStyles?: StyleProp<ImageStyle>;
  itemIconSize?: number;
  items?: Items[];
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  widthPercent?: number;
};

export type DrawerGroupProps = {
  collapseIcon?: IconName;
  expandIcon?: IconName;
  fontSize: number;
  iconSize: number;
  item: GroupItem;
  textColor?: string;
  handleDrawer: () => void;
};

export type DrawerItemProps = {
  icon: IconName;
  textColor?: string;
  iconSize?: number;
  text?: string;
  fontSize?: number;
  onPress?: () => void;
  handleDrawer: () => void;
};
