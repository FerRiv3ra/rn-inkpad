import {useEffect, useRef} from 'react';
import type {DimensionValue, StyleProp, ViewStyle} from 'react-native';
import {Animated, StyleSheet, View} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type SkeletonProps = A11yProps & {
  width?: DimensionValue;
  height?: number;
  radius?: number;
  /** Renders a circle of `height` diameter. */
  circle?: boolean;
  /** Renders several text-like lines; the last one is shorter. */
  lines?: number;
  gap?: number;
  color?: string;
  /** Pulse between 40% and 100% opacity. */
  animated?: boolean;
  speed?: number;
  style?: StyleProp<ViewStyle>;
};

export const Skeleton = ({
  accessibilityLabel = 'Loading',
  animated = true,
  circle,
  color,
  gap = 8,
  height = 16,
  lines = 1,
  radius,
  speed = 1000,
  style,
  testID,
  width = '100%',
}: SkeletonProps) => {
  const {colors, radius: themeRadius} = useTheme();
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!animated) {
      opacity.setValue(1);
      return undefined;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: speed / 2,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: speed / 2,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [animated, opacity, speed]);

  const backgroundColor = color ?? colors.border;
  const borderRadius = circle ? height / 2 : (radius ?? themeRadius.sm);
  const blockWidth = circle ? height : width;

  const block = (key: number, w: DimensionValue) => (
    <Animated.View
      key={key}
      testID={testID ? `${testID}-line-${key}` : undefined}
      style={[
        {width: w, height, borderRadius, backgroundColor, opacity},
        key > 0 && {marginTop: gap},
      ]}
    />
  );

  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.container, style]}>
      {Array.from({length: Math.max(lines, 1)}, (_, i) =>
        block(i, lines > 1 && i === lines - 1 ? '60%' : blockWidth),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
});
