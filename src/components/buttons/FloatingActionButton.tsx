import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';

import {IconName} from '../../types';
import {Action} from '../../types/buttonTypes';
import {ActionButton} from './ActionButton';

type Props = {
  actions?: Action[];
  backgroundColor?: string;
  bottom?: number;
  icon?: IconName;
  iconColor?: string;
  iconSize?: number;
  margin?: number;
  padding?: number;
  position?: 'left' | 'center' | 'right';
  onPress?: () => void;
};

export const FloatingActionButton = ({
  actions,
  backgroundColor,
  bottom,
  icon,
  iconColor,
  iconSize,
  margin,
  onPress,
  padding = 15,
  position = 'right',
}: Props) => {
  const [showActions, setShowActions] = useState(false);

  let right: number | undefined;
  let left: number | undefined;

  const {width} = useWindowDimensions();

  if (position === 'center') {
    right = width / 2 - 25;
    left = undefined;
  } else if (position === 'left') {
    right = undefined;
    left = margin ?? 30;
  } else {
    right = margin ?? 30;
    left = undefined;
  }

  const handlePress = () => {
    if (!!actions) {
      setShowActions(!showActions);
    } else {
      if (!!onPress) {
        onPress();
      }
    }
  };

  return (
    <View
      style={{
        width: (padding + 11) * 2,
        height: '50%',
        position: 'absolute',
        bottom: bottom ?? 30,
        right,
        left,
      }}>
      {showActions &&
        actions &&
        actions.map((action, index) => (
          <ActionButton
            onPress={action.onPress}
            padding={padding - 5}
            backgroundColor={backgroundColor}
            bottom={
              index === 0
                ? 60 + (padding * 2 - 30)
                : (index + 1) * (padding * 4) - index * (padding + 1)
            }
            icon={action.icon}
            left={(padding - 2) / 2}
            iconColor={iconColor}
            iconSize={(iconSize ?? 22) - 4}
            key={index}
          />
        ))}
      <ActionButton
        onPress={handlePress}
        padding={padding}
        backgroundColor={backgroundColor}
        bottom={0}
        icon={icon ?? showActions ? 'close' : 'add'}
        iconColor={iconColor}
        iconSize={iconSize}
      />
    </View>
  );
};
