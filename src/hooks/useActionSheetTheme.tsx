import {Appearance, Platform} from 'react-native';
import {ActionSheetTheme, Appearances} from '../types/actionSheetTypes';

export const useActionSheetTheme = (actionSheetTheme?: ActionSheetTheme) => {
  let {
    appearance: userAppearance,
    backgroundColor,
    buttonColor,
    closeBackgroundColor,
    closeIconColor,
    separatorColor,
    textColor,
    theme,
  } = actionSheetTheme ?? {};

  let appearance: Appearances;

  if (userAppearance) {
    appearance = userAppearance;
  } else {
    appearance = Appearance.getColorScheme() as Appearances;
  }

  const dark = appearance === 'dark';
  let platform = Platform.OS;

  if (!theme) {
    if (platform === 'ios') {
      theme = 'cupertino';
    } else {
      theme = 'material';
    }
  }

  const styles: ActionSheetTheme = {
    backgroundColor: !!backgroundColor
      ? backgroundColor
      : dark
      ? '#171717'
      : theme === 'cupertino'
      ? '#F4F4F4'
      : '#FFFFFF',
    buttonColor: !!buttonColor
      ? buttonColor
      : dark
      ? theme === 'cupertino'
        ? '#242625'
        : '#171717'
      : '#FFFFFF',
    closeBackgroundColor: !!closeBackgroundColor
      ? closeBackgroundColor
      : dark
      ? '#1C1E1D'
      : '#ECECEC',
    closeIconColor: !!closeIconColor
      ? closeIconColor
      : dark
      ? '#959394'
      : '#767779',
    separatorColor: !!separatorColor
      ? separatorColor
      : dark
      ? '#343434'
      : '#E4E4E4',
    textColor: !!textColor ? textColor : dark ? '#FFFFFF' : '#0A0A0A',
    theme,
  };

  return {
    styles,
  };
};
