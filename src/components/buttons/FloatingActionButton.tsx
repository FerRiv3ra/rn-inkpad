import React, {useState} from 'react';
import {View} from 'react-native';

import {FabProps} from '../../types';
import {ActionButton} from './ActionButton';

export const FloatingActionButton = ({
  actions,
  backgroundColor,
  marginHorizontal = 20,
  marginVertical = 30,
  icon,
  iconColor,
  iconSize,
  onPress,
  align = 'bottom-right',
  size = 50,
}: FabProps) => {
  const [showActions, setShowActions] = useState(false);

  const position = {
    bottom: align.includes('bottom') ? marginVertical : undefined,
    top: align.includes('top') ? marginVertical : undefined,
    right: align.includes('right') ? marginHorizontal : undefined,
    left: align.includes('left') ? marginHorizontal : undefined,
  };

  const handlePress = () => {
    if (!!actions && !onPress) {
      setShowActions(!showActions);
    } else {
      if (!!onPress) {
        onPress();
      }
    }
  };

  return (
    <View
      style={[
        {
          position: 'absolute',
          alignItems: align.includes('left') ? 'flex-start' : 'flex-end',
          flexDirection: align.includes('top') ? 'column-reverse' : 'column',
        },
        position,
      ]}>
      {showActions &&
        actions &&
        !onPress &&
        actions.map((action, index) => (
          <ActionButton
            align={align.includes('left') ? 'left' : 'right'}
            backgroundColor={backgroundColor}
            icon={action.icon}
            iconColor={iconColor}
            iconSize={(iconSize ?? 22) - 4}
            margin={5}
            onPress={action.onPress}
            size={size - 10}
            text={action.text}
            key={index}
          />
        ))}
      <ActionButton
        onPress={handlePress}
        backgroundColor={backgroundColor}
        icon={icon ? icon : showActions ? 'close' : 'add'}
        iconColor={iconColor}
        size={size}
        iconSize={iconSize}
      />
    </View>
  );
};
