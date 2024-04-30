import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {Icon} from '../';
import {drawerStyles} from '../../theme';
import {DrawerGroupProps} from '../../types';
import {DrawerItem} from './DrawerItem';

export const DrawerGroup = ({
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
        style={drawerStyles.groupItem}
        onPress={() => setVisible(!visible)}>
        <View style={drawerStyles.group}>
          <Icon name={item.icon} size={iconSize} color={textColor} />
          <Text style={{...drawerStyles.itemText, fontSize}}>{item.text}</Text>
        </View>
        <Icon
          name={visible ? collapseIcon : expandIcon}
          size={iconSize}
          color={textColor}
        />
      </Pressable>
      <View style={{marginLeft: iconSize + 10}}>
        {visible &&
          item.items.map((item, idx) => (
            <DrawerItem
              fontSize={fontSize - 2}
              handleDrawer={handleDrawer}
              icon={item.icon}
              iconSize={iconSize - 2}
              key={idx}
              onPress={item.onPress}
              text={item.text}
              textColor={textColor}
            />
          ))}
      </View>
    </View>
  );
};
