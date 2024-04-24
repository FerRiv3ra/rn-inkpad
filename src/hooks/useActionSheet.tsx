import {ActionSheetTheme} from '../types/actionSheetTypes';
import {useActionSheetTheme} from './useActionSheetTheme';

export const useActionSheet = (
  actionLength: number,
  theme?: ActionSheetTheme,
) => {
  const {styles} = useActionSheetTheme(theme);

  const getBorder = (idx: number) => {
    if (actionLength === 1) {
      return 'all';
    }

    if (idx === 0) {
      return 'top';
    }

    if (idx + 1 === actionLength) {
      return 'bottom';
    }

    return 'none';
  };

  return {getBorder, ...styles};
};
