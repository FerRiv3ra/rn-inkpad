import {Appearance, Platform} from 'react-native';
import {getStyles} from '../theme';
import {Appearances, PersonalTheme, ValidPlatforms} from '../types/alertTypes';

type Props = {
  theme?: ValidPlatforms;
  appearance?: Appearances;
  personalTheme?: PersonalTheme;
  buttons?: number;
  icon?: boolean;
};

export const useTheme = ({
  appearance,
  buttons,
  personalTheme,
  theme,
  icon,
}: Props) => {
  if (!appearance) {
    appearance = Appearance.getColorScheme() as Appearances;
  }

  const dark = appearance === 'dark';
  const personalTextButtonColor = !!personalTheme
    ? personalTheme.textButtonColor
    : undefined;

  let platform = Platform.OS;
  let textButtonColor = personalTextButtonColor ?? '#4F87FF';
  let cancelWeight: '500' | '700' = '500';

  if (!!theme) {
    if (theme === 'ios') {
      platform = 'ios';
    } else {
      platform = 'android';
    }
  }

  if (platform === 'ios') {
    cancelWeight = '700';
  } else {
    platform = 'android';
    textButtonColor = personalTextButtonColor ?? '#00D982';
  }

  return {
    styles: getStyles(platform, dark, personalTheme, buttons, icon),
    ios: platform === 'ios',
    textButtonColor,
    cancelWeight,
  };
};
