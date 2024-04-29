import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Icon} from '../';
import {NavigationItemProps} from '../../types';
import {SelectedTab} from './SelectedTab';

export const NavigationItem = ({
  item,
  highlightedBgColor,
  iconColor,
  iconSize = 25,
  selected,
  selectedColor = '#FF0000',
  selectedheight,
  textColor,
  textStyle,
  onPress,
}: NavigationItemProps) => {
  const {highlighted, icon, text} = item;

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <View
        style={[
          styles.button,
          {paddingTop: 10},
          highlighted && {
            ...styles.highlighted,
            top: -(iconSize * 2),
            backgroundColor: highlightedBgColor ?? selectedColor,
          },
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
            style={[
              {color: textColor ?? iconColor, paddingHorizontal: 3},
              textStyle,
            ]}>
            {text}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  highlighted: {
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
  },
});
