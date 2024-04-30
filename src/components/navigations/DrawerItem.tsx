import React from 'react';
import {Pressable, Text} from 'react-native';

import {Icon} from '..';
import {drawerStyles} from '../../theme';
import {DrawerItemProps} from '../../types';

export const DrawerItem = ({
  icon,
  textColor,
  fontSize,
  handleDrawer,
  iconSize,
  text,
  onPress,
}: DrawerItemProps) => {
  const handlePress = () => {
    if (!!onPress) {
      onPress();
    }

    handleDrawer();
  };

  return (
    <Pressable style={drawerStyles.item} onPress={handlePress}>
      <Icon name={icon} color={textColor} size={iconSize} />
      <Text style={{...drawerStyles.itemText, color: textColor, fontSize}}>
        {text}
      </Text>
    </Pressable>
  );
};
