import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  size?: number; // Dots size in pixels
  color?: string; // Dots color
  dotCount?: number; // Number of dots
  speed?: number; // Duration (ms) of each animation cycle
  style?: ViewStyle;
};

export const DotsLoading = ({
  size = 10,
  color = '#17B9D1',
  dotCount = 3,
  speed = 600,
  style,
}: Props) => {
  // Create Animated.Value for each dot
  const animatedValues = useRef<Animated.Value[]>(
    Array.from({length: dotCount}, () => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    // Create looping animations with staggered delay
    const animations = animatedValues.map(av =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(av, {
            toValue: 1,
            duration: Math.round(speed / 2),
            useNativeDriver: true,
          }),
          Animated.timing(av, {
            toValue: 0,
            duration: Math.round(speed / 2),
            useNativeDriver: true,
          }),
        ]),
        {iterations: -1},
      ),
    );

    // Start with a small staggered delay for the "wave" effect
    const staggered = animations.map((anim, i) =>
      Animated.sequence([Animated.delay((speed / dotCount) * i), anim]),
    );

    // Execute all in parallel
    Animated.parallel(staggered).start();

    // Clean up on unmount
    return () => {
      animatedValues.forEach(av => av.stopAnimation());
    };
  }, [animatedValues, speed, dotCount]);

  return (
    <View style={[styles.container, style]}>
      {animatedValues.map((av, i) => {
        // Animate opacity and scale
        const scale = av.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1.3],
        });
        const opacity = av.interpolate({
          inputRange: [0, 1],
          outputRange: [0.4, 1],
        });

        return (
          <Animated.View
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: color,
              marginHorizontal: size * 0.35,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
