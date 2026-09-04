import {memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Icon} from '../';
import type {NavigationItemProps} from '../../types';
import {SelectedTab} from './SelectedTab';

const NavigationItemComponent = ({
  item,
  index,
  highlightedBgColor,
  iconColor,
  iconSize = 25,
  selected,
  selectedColor = '#DB504A',
  selectedheight,
  testID,
  textColor,
  textStyle,
  onPress,
}: NavigationItemProps) => {
  const {highlighted, icon, text} = item;

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityLabel={text}
      accessibilityState={{selected: !!selected}}
      testID={testID}
      onPress={() => onPress?.(index)}
      style={styles.button}>
      <View
        style={[
          styles.button,
          styles.content,
          highlighted && [
            styles.highlighted,
            {
              top: -(iconSize * 2),
              backgroundColor: highlightedBgColor ?? selectedColor,
            },
          ],
        ]}>
        {!highlighted && selected && (
          <SelectedTab height={selectedheight} color={selectedColor} />
        )}
        {icon && (
          <Icon
            name={icon}
            size={highlighted ? iconSize + 5 : iconSize}
            color={iconColor}
          />
        )}
        {!highlighted && (
          <Text
            style={[styles.text, {color: textColor ?? iconColor}, textStyle]}>
            {text}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export const NavigationItem = memo(NavigationItemComponent);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    paddingTop: 10,
  },
  text: {
    paddingHorizontal: 3,
  },
  highlighted: {
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
  },
});
