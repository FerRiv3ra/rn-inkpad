import {Text, TouchableOpacity, View} from 'react-native';

import {fabStyles} from '../../theme';
import type {IconName} from '../../types';
import {Icon} from '../icon/Icon';

type Props = {
  icon: IconName;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityState?: {expanded?: boolean};
  testID?: string;
  align?: 'left' | 'right';
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  size?: number;
  margin?: number;
  text?: string;
  onPress?: () => void;
};

export const ActionButton = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityState,
  align,
  backgroundColor,
  icon,
  iconColor,
  iconSize = 22,
  onPress,
  margin = 0,
  size = 50,
  testID,
  text,
}: Props) => {
  return (
    <View
      style={[
        fabStyles.btnContainer,
        {flexDirection: align === 'left' ? 'row-reverse' : 'row'},
      ]}>
      {!!text && (
        <View style={fabStyles.textContainer}>
          <Text>{text}</Text>
        </View>
      )}
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? text ?? icon}
        accessibilityHint={accessibilityHint}
        accessibilityState={accessibilityState}
        testID={testID}
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          fabStyles.fab,
          {
            width: size,
            marginTop: 5,
            marginHorizontal: margin,
            height: size,
            backgroundColor: backgroundColor ?? '#464EE5',
          },
        ]}>
        <Icon name={icon} color={iconColor ?? '#FFF'} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};
