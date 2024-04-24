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

  if (!!theme) {
    if (theme === 'cupertino') {
      platform = 'ios';
    } else {
      platform = 'android';
    }
  }

  let styles: ActionSheetTheme;

  if (platform === 'ios') {
    styles = {
      backgroundColor: !!backgroundColor
        ? backgroundColor
        : dark
        ? '#171717'
        : '#F4F4F4',
      buttonColor: !!buttonColor ? buttonColor : dark ? '#242625' : '#FFFFFF',
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
    };
  } else {
    platform = 'android';
    styles = {};
  }

  return {
    styles,
  };
};
