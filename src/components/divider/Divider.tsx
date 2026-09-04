import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type DividerProps = A11yProps & {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  /** Optional label rendered in the middle (horizontal only). */
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  /** Margin along the cross axis. */
  spacing?: number;
  style?: StyleProp<ViewStyle>;
};

export const Divider = ({
  color,
  orientation = 'horizontal',
  spacing = 8,
  style,
  testID,
  text,
  textStyle,
  thickness = StyleSheet.hairlineWidth,
}: DividerProps) => {
  const {colors} = useTheme();
  const lineColor = color ?? colors.border;

  if (orientation === 'vertical') {
    return (
      <View
        testID={testID}
        style={[
          styles.vertical,
          {
            width: thickness,
            backgroundColor: lineColor,
            marginHorizontal: spacing,
          },
          style,
        ]}
      />
    );
  }

  const line = {height: thickness, backgroundColor: lineColor, flex: 1};

  return (
    <View
      testID={testID}
      accessibilityRole={text ? undefined : 'none'}
      style={[styles.horizontal, {marginVertical: spacing}, style]}>
      <View style={line} />
      {!!text && (
        <>
          <Text style={[styles.text, {color: colors.textMuted}, textStyle]}>
            {text}
          </Text>
          <View style={line} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  vertical: {
    alignSelf: 'stretch',
  },
  text: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: '600',
  },
});
