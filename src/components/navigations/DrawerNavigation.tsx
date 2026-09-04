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
import type {
  DrawerItemType,
  DrawerNavigationProps,
  GroupItem,
} from '../../types';
import {DrawerGroup} from './DrawerGroup';
import {DrawerItem} from './DrawerItem';

const isGroup = (item: DrawerItemType | GroupItem): item is GroupItem =>
  Array.isArray((item as GroupItem).items);

export const DrawerNavigation = ({
  accessibilityLabel = 'Navigation menu',
  backgroundColor = '#464EE5',
  closeIcon = 'close',
  collapseIcon,
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
  testID,
  textColor,
  widthPercent = 65,
}: DrawerNavigationProps) => {
  const {height, translateX, width, handlePress, visible} =
    useDrawerNavigation(widthPercent);
  const drawerWidth = width * (widthPercent / 100);

  return (
    <Animated.View
      testID={testID}
      style={[drawerStyles.container, {height, transform: [{translateX}]}]}>
      <SafeAreaView style={{backgroundColor}}>
        <ScrollView
          accessibilityRole="menu"
          style={[drawerStyles.drawer, {width: drawerWidth}]}>
          {image && (
            <Image source={image} style={[drawerStyles.logo, imageStyles]} />
          )}
          {items?.map((item, idx) =>
            isGroup(item) ? (
              <DrawerGroup
                collapseIcon={collapseIcon}
                expandIcon={expandIcon}
                fontSize={fontSize}
                handleDrawer={handlePress}
                iconSize={itemIconSize}
                item={item}
                key={item.text ?? idx}
                textColor={textColor}
              />
            ) : (
              <DrawerItem
                fontSize={fontSize}
                icon={item.icon}
                iconSize={itemIconSize}
                handleDrawer={handlePress}
                key={item.text ?? idx}
                onPress={item.onPress}
                text={item.text}
                textColor={textColor}
              />
            ),
          )}
        </ScrollView>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={{expanded: visible}}
          testID={testID ? `${testID}-toggle` : undefined}
          onPress={handlePress}
          style={[drawerStyles.button, {top: iconTop, left: drawerWidth + 15}]}>
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
