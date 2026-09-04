import {useTheme} from '../../theme/ThemeProvider';
import {memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import type {NavigationItemProps} from '../../types';
import {SelectedTab} from './SelectedTab';

const NavigationItemComponent = (props: NavigationItemProps) => {
  const {colors} = useTheme();
  const {
    item,
    index,
    highlightedBgColor,
    iconColor,
    iconSize = 25,
    selected,
    selectedColor = colors.primary,
    selectedheight,
    testID,
    textColor,
    textStyle,
    onPress,
  } = props;
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
        {renderIcon(icon, {
          size: highlighted ? iconSize + 5 : iconSize,
          color: iconColor,
        })}
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
