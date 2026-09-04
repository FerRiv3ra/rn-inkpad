import type {A11yProps} from './commonTypes';
import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import type {IconProp} from './iconTypes';

export type NavigationItemType = {
  highlighted?: boolean;
  icon?: IconProp;
  text?: string;
  onPress?: () => void;
};

export type NavigationItemProps = {
  item: NavigationItemType;
  index: number;
  testID?: string;
  highlightedBgColor?: string;
  iconColor?: string;
  iconSize?: number;
  selected?: boolean;
  selectedColor?: string;
  selectedheight?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (index: number) => void;
};

export type BottomTabNavigationProps = A11yProps & {
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
  icon: IconProp;
  onPress?: () => void;
};

export type GroupItem = {
  text: string;
  icon: IconProp;
  items: DrawerItemType[];
};

type Items = DrawerItemType | GroupItem;

export type DrawerNavigationProps = A11yProps & {
  backgroundColor?: string;
  closeIcon?: IconProp;
  collapseIcon?: IconProp;
  expandIcon?: IconProp;
  fontSize?: number;
  icon?: IconProp;
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
  collapseIcon?: IconProp;
  expandIcon?: IconProp;
  fontSize: number;
  iconSize: number;
  item: GroupItem;
  textColor?: string;
  handleDrawer: () => void;
};

export type DrawerItemProps = {
  icon: IconProp;
  textColor?: string;
  iconSize?: number;
  text?: string;
  fontSize?: number;
  onPress?: () => void;
  handleDrawer: () => void;
};
