import {memo, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {Icon} from '../';
import {drawerStyles} from '../../theme';
import type {DrawerGroupProps} from '../../types';
import {DrawerItem} from './DrawerItem';

const DrawerGroupComponent = ({
  collapseIcon = 'chevron-up',
  expandIcon = 'chevron-down',
  fontSize,
  handleDrawer,
  iconSize,
  item,
  textColor,
}: DrawerGroupProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={item.text}
        accessibilityState={{expanded: visible}}
        style={drawerStyles.groupItem}
        onPress={() => setVisible(!visible)}>
        <View style={drawerStyles.group}>
          <Icon name={item.icon} size={iconSize} color={textColor} />
          <Text style={[drawerStyles.itemText, {color: textColor, fontSize}]}>
            {item.text}
          </Text>
        </View>
        <Icon
          name={visible ? collapseIcon : expandIcon}
          size={iconSize}
          color={textColor}
        />
      </Pressable>
      <View style={{marginLeft: iconSize + 10}}>
        {visible &&
          item.items.map((child, idx) => (
            <DrawerItem
              fontSize={fontSize - 2}
              handleDrawer={handleDrawer}
              icon={child.icon}
              iconSize={iconSize - 2}
              key={child.text ?? idx}
              onPress={child.onPress}
              text={child.text}
              textColor={textColor}
            />
          ))}
      </View>
    </View>
  );
};

export const DrawerGroup = memo(DrawerGroupComponent);
