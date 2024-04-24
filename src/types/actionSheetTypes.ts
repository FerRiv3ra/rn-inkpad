import {StyleProp, TextStyle} from 'react-native';
import {IconName} from './iconType';

export type ActionSheet = {
  text: string;
  icon?: IconName;
  iconColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

export type ActionSheetTheme = {
  appearance?: Appearances;
  backgroundColor?: string;
  buttonColor?: string;
  closeBackgroundColor?: string;
  closeIconColor?: string;
  separatorColor?: string;
  textColor?: string;
  theme?: ValidTheme;
};

export type ActionSheetProps = {
  actions?: ActionSheet[];
  cancelText?: string;
  showCancelButton?: boolean;
  showIconOnIos?: boolean;
  showCloseButton?: boolean;
  subTitle?: string;
  theme?: ActionSheetTheme;
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export type ValidTheme = 'cupertino' | 'material';

export type Appearances = 'light' | 'dark';
