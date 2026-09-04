import {memo, useCallback, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {TabControlProps} from '../../types';

type TabProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  label: string;
  selected: boolean;
  backgroundColor: string;
  tintColor: string;
  textColor: string;
  selectedTextColor: string;
  testID?: string;
  onPress: (index: number) => void;
};

const Tab = memo(
  ({
    index,
    isFirst,
    isLast,
    label,
    selected,
    backgroundColor,
    tintColor,
    textColor,
    selectedTextColor,
    testID,
    onPress,
  }: TabProps) => (
    <Pressable
      accessibilityRole="tab"
      accessibilityLabel={label}
      accessibilityState={{selected}}
      testID={testID}
      onPress={() => onPress(index)}
      style={[
        styles.tab,
        {backgroundColor: selected ? tintColor : backgroundColor},
        isFirst && styles.first,
        isLast && styles.last,
      ]}>
      <Text
        style={[
          styles.text,
          {color: selected ? selectedTextColor : textColor},
        ]}>
        {label}
      </Text>
    </Pressable>
  ),
);

export const TabControl = ({
  accessibilityLabel,
  values,
  selectedIndex = 0,
  label,
  labelStyle,
  backgroundTabColor = '#CCCCCC',
  tabTintColor = '#FFFFFF',
  textColor = '#000000',
  selectedTextColor = '#000000',
  containerStyle,
  style,
  testID,
}: TabControlProps) => {
  const [selected, setSelected] = useState(selectedIndex);

  // Keep in sync when `selectedIndex` changes after mount.
  useEffect(() => {
    setSelected(selectedIndex);
  }, [selectedIndex]);

  const handlePress = useCallback((idx: number) => {
    setSelected(idx);
  }, []);

  // Fall back to the first tab when the index is out of range.
  const current = values[selected] ?? values[0];
  const Component = current?.renderItem;

  return (
    <View testID={testID} style={style}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <View
        accessibilityRole="tablist"
        accessibilityLabel={accessibilityLabel ?? label}
        style={[styles.tabs, {backgroundColor: backgroundTabColor}]}>
        {values.map((value, index) => (
          <Tab
            key={value.key}
            index={index}
            isFirst={index === 0}
            isLast={index === values.length - 1}
            label={value.key}
            selected={selected === index}
            backgroundColor={backgroundTabColor}
            tintColor={tabTintColor}
            textColor={textColor}
            selectedTextColor={selectedTextColor}
            testID={testID ? `${testID}-tab-${index}` : undefined}
            onPress={handlePress}
          />
        ))}
      </View>
      <View style={[styles.content, containerStyle]}>
        {!!Component && <Component />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 2,
    paddingLeft: 1,
    paddingRight: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 5,
  },
  first: {
    borderTopLeftRadius: 5,
  },
  last: {
    borderTopRightRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  content: {
    paddingBottom: 5,
  },
});
