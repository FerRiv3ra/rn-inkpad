import {memo} from 'react';
import {Pressable, Text} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import {drawerStyles} from '../../theme';
import type {DrawerItemProps} from '../../types';

const DrawerItemComponent = ({
  icon,
  textColor,
  fontSize,
  handleDrawer,
  iconSize,
  text,
  onPress,
}: DrawerItemProps) => {
  const handlePress = () => {
    onPress?.();
    handleDrawer();
  };

  return (
    <Pressable
      accessibilityRole="menuitem"
      accessibilityLabel={text}
      style={drawerStyles.item}
      onPress={handlePress}>
      {renderIcon(icon, {size: iconSize, color: textColor})}
      <Text style={[drawerStyles.itemText, {color: textColor, fontSize}]}>
        {text}
      </Text>
    </Pressable>
  );
};

export const DrawerItem = memo(DrawerItemComponent);
