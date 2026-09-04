import {memo, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import {drawerStyles} from '../../theme';
import type {DrawerGroupProps, IconProps} from '../../types';
import {ChevronGlyph} from '../glyphs/Glyphs';
import {DrawerItem} from './DrawerItem';

const CollapseGlyph = (props: IconProps) => (
  <ChevronGlyph {...props} direction="up" />
);
const ExpandGlyph = (props: IconProps) => (
  <ChevronGlyph {...props} direction="down" />
);

const DrawerGroupComponent = ({
  collapseIcon = CollapseGlyph,
  expandIcon = ExpandGlyph,
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
          {renderIcon(item.icon, {size: iconSize, color: textColor})}
          <Text style={[drawerStyles.itemText, {color: textColor, fontSize}]}>
            {item.text}
          </Text>
        </View>
        {renderIcon(visible ? collapseIcon : expandIcon, {
          size: iconSize,
          color: textColor,
        })}
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
