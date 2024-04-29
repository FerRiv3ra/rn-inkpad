import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BottomTabNavigationProps} from '../../types';
import {NavigationItem} from './NavigationItem';

export const BottomTabNavigation = ({
  backgroundColor = '#FFFFFF',
  highlightedBgColor,
  highlightedIconColor,
  iconColor,
  iconSize,
  labelStyle,
  selectedColor = '#FF0000',
  selectedheight,
  selectedIndex,
  textColor,
  values,
}: BottomTabNavigationProps) => {
  const [selected, setSelected] = useState<number>();

  useEffect(() => {
    setSelected(selectedIndex);
  }, [selectedIndex]);

  const handlePress = (idx: number, isHighlighted = false) => {
    const item = values ? values[idx] : undefined;

    if (!!item?.onPress) {
      item.onPress();
    }

    if (!isHighlighted) {
      setSelected(idx);
    }
  };

  return (
    <View
      style={{
        backgroundColor,
        ...styles.container,
      }}>
      <SafeAreaView>
        <View style={{...styles.navigationContainer}}>
          {values?.map((item, idx) => (
            <NavigationItem
              item={item}
              key={idx}
              highlightedBgColor={highlightedBgColor}
              iconColor={item.highlighted ? highlightedIconColor : iconColor}
              iconSize={iconSize}
              selectedheight={selectedheight}
              selected={selected === idx}
              selectedColor={selectedColor}
              textColor={textColor}
              textStyle={labelStyle}
              onPress={() => handlePress(idx, item.highlighted)}
            />
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 3,
    paddingHorizontal: '3%',
    gap: 8,
  },
});
