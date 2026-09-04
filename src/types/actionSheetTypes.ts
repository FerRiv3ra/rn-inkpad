import type {A11yProps} from './commonTypes';
import type {StyleProp, TextStyle} from 'react-native';
import type {IconProp} from './iconTypes';

export type ActionSheet = {
  text: string;
  icon?: IconProp;
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

export type ActionSheetProps = A11yProps & {
  actions?: ActionSheet[];
  /** Icon of the cancel button. Defaults to a built-in cross. */
  cancelIcon?: IconProp;
  cancelText?: string;
  /** Icon of the top close button. Defaults to a built-in cross. */
  closeIcon?: IconProp;
  description?: string;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  showIconOnIos?: boolean;
  theme?: ActionSheetTheme;
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export type ValidTheme = 'cupertino' | 'material';

export type Appearances = 'light' | 'dark';
