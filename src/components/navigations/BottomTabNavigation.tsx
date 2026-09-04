import {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import type {BottomTabNavigationProps, NavigationItemType} from '../../types';
import {NavigationItem} from './NavigationItem';

const DEFAULT_VALUES: NavigationItemType[] = [{icon: 'home', text: 'Home'}];

export const BottomTabNavigation = ({
  accessibilityLabel,
  backgroundColor = '#FFFFFF',
  highlightedBgColor,
  highlightedIconColor,
  iconColor,
  iconSize,
  labelStyle,
  selectedColor = '#DB504A',
  selectedheight,
  selectedIndex,
  testID,
  textColor,
  values = DEFAULT_VALUES,
}: BottomTabNavigationProps) => {
  const [selected, setSelected] = useState<number | undefined>(selectedIndex);

  useEffect(() => {
    setSelected(selectedIndex);
  }, [selectedIndex]);

  // Stable callback so memoized items only re-render when their props change.
  const handlePress = useCallback(
    (idx: number) => {
      const item = values[idx];
      item?.onPress?.();
      if (!item?.highlighted) {
        setSelected(idx);
      }
    },
    [values],
  );

  return (
    <View
      accessibilityRole="tablist"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.container, {backgroundColor}]}>
      <SafeAreaView>
        <View style={styles.navigationContainer}>
          {values.map((item, idx) => (
            <NavigationItem
              item={item}
              index={idx}
              key={item.text ?? item.icon ?? idx}
              testID={testID ? `${testID}-item-${idx}` : undefined}
              highlightedBgColor={highlightedBgColor}
              iconColor={item.highlighted ? highlightedIconColor : iconColor}
              iconSize={iconSize}
              selectedheight={selectedheight}
              selected={selected === idx}
              selectedColor={selectedColor}
              textColor={textColor}
              textStyle={labelStyle}
              onPress={handlePress}
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
