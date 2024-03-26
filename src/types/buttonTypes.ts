import {IconName} from './iconType';

export type Action = {
  icon: IconName;
  onPress: () => void;
};
