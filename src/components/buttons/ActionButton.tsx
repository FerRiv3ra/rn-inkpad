import {useTheme} from '../../theme/ThemeProvider';
import {Text, TouchableOpacity, View} from 'react-native';

import {fabStyles} from '../../theme';
import {renderIcon} from '../../helpers/renderIcon';
import type {IconProp} from '../../types';

type Props = {
  icon: IconProp;
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

export const ActionButton = (props: Props) => {
  const {colors} = useTheme();
  const {
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
  } = props;
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
        accessibilityLabel={accessibilityLabel ?? text}
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
            backgroundColor: backgroundColor ?? colors.primary,
          },
        ]}>
        {renderIcon(icon, {size: iconSize, color: iconColor ?? '#FFF'})}
      </TouchableOpacity>
    </View>
  );
};
