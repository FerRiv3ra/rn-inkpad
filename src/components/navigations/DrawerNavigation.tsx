import React from 'react';
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Icon} from '..';
import {useDrawerNavigation} from '../../hooks';
import {drawerStyles} from '../../theme';
import {DrawerItemType, DrawerNavigationProps, GroupItem} from '../../types';
import {DrawerGroup} from './DrawerGroup';
import {DrawerItem} from './DrawerItem';

export const DrawerNavigation = ({
  backgroundColor = '#464EE5',
  collapseIcon,
  closeIcon = 'close',
  expandIcon,
  fontSize = 18,
  icon = 'menu',
  iconColor,
  iconSize = 35,
  iconTop = 50,
  image,
  imageStyles,
  itemIconSize = 19,
  items,
  textColor,
  widthPercent = 65,
}: DrawerNavigationProps) => {
  const {height, translateX, width, handlePress, visible} =
    useDrawerNavigation(widthPercent);

  return (
    <Animated.View
      style={{...drawerStyles.container, height, transform: [{translateX}]}}>
      <SafeAreaView style={{backgroundColor}}>
        <ScrollView
          style={{
            ...drawerStyles.drawer,
            width: width * (widthPercent / 100),
          }}>
          {image && (
            <Image source={image} style={[drawerStyles.logo, imageStyles]} />
          )}
          {items?.map((item, idx) => {
            if (!!(item as GroupItem).items) {
              return (
                <DrawerGroup
                  collapseIcon={collapseIcon}
                  expandIcon={expandIcon}
                  fontSize={fontSize}
                  handleDrawer={handlePress}
                  iconSize={itemIconSize}
                  item={item as GroupItem}
                  key={idx}
                  textColor={textColor}
                />
              );
            } else {
              item = item as DrawerItemType;
              return (
                <DrawerItem
                  fontSize={fontSize}
                  icon={item.icon}
                  iconSize={itemIconSize}
                  handleDrawer={handlePress}
                  key={idx}
                  onPress={item.onPress}
                  text={item.text}
                  textColor={textColor}
                />
              );
            }
          })}
        </ScrollView>
        <Pressable
          onPress={handlePress}
          style={{
            ...drawerStyles.button,
            top: iconTop,
            left: width * (widthPercent / 100) + 15,
          }}>
          <Icon
            name={visible ? closeIcon : icon}
            color={iconColor}
            size={iconSize}
          />
        </Pressable>
      </SafeAreaView>
    </Animated.View>
  );
};
