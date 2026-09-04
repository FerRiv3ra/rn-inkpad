import {useTheme} from '../../theme/ThemeProvider';
import {memo, useCallback, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {SegmentedControlProps} from '../../types';

type SegmentProps = {
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

const Segment = memo(
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
  }: SegmentProps) => (
    <Pressable
      accessibilityRole="tab"
      accessibilityLabel={label}
      accessibilityState={{selected}}
      testID={testID}
      onPress={() => onPress(index)}
      style={[
        styles.segment,
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

export const SegmentedControl = (props: SegmentedControlProps) => {
  const {colors} = useTheme();
  const {
    accessibilityLabel,
    values,
    onChange,
    selectedIndex,
    label,
    labelStyle,
    backgroundColor = colors.surface,
    tintColor = colors.background,
    textColor = colors.text,
    selectedTextColor = colors.text,
    style,
    testID,
  } = props;
  const [selected, setSelected] = useState(selectedIndex ?? 0);

  // Keep in sync when `selectedIndex` changes after mount.
  useEffect(() => {
    if (selectedIndex !== undefined) {
      setSelected(selectedIndex);
    }
  }, [selectedIndex]);

  const handlePress = useCallback(
    (idx: number) => {
      const item = values[idx];
      if (!item) {
        return;
      }
      onChange(item.value);
      setSelected(idx);
    },
    [values, onChange],
  );

  return (
    <View
      accessibilityRole="tablist"
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
      style={style}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <View style={[styles.container, {backgroundColor}]}>
        {values.map((value, index) => (
          <Segment
            key={value.key}
            index={index}
            isFirst={index === 0}
            isLast={index === values.length - 1}
            label={value.key}
            selected={selected === index}
            backgroundColor={backgroundColor}
            tintColor={tintColor}
            textColor={textColor}
            selectedTextColor={selectedTextColor}
            testID={testID ? `${testID}-segment-${index}` : undefined}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  segment: {
    flex: 1,
    paddingVertical: 5,
  },
  first: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  last: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
