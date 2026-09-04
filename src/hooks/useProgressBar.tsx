import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

/** Milliseconds needed to travel the whole bar (0% to 100%). */
const FULL_DURATION_MS = 1000;

const clamp = (n: number) => Math.min(Math.max(n, 0), 100);

/**
 * Animates the bar width towards `value` (0..100) with `Animated.timing`.
 * `percent` mirrors the animated value as an integer, only when requested,
 * so the component re-renders at most 100 times per transition.
 */
export const useProgressBar = (value: number, trackPercent = false) => {
  const progress = useRef(new Animated.Value(0)).current;
  const current = useRef(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const target = clamp(value);
    const distance = Math.abs(target - current.current);

    const animation = Animated.timing(progress, {
      toValue: target,
      duration: (distance / 100) * FULL_DURATION_MS,
      useNativeDriver: false,
    });
    animation.start(({finished}) => {
      if (finished) {
        current.current = target;
      }
    });

    return () => animation.stop();
  }, [value, progress]);

  useEffect(() => {
    const id = progress.addListener(({value: v}) => {
      current.current = v;
      if (trackPercent) {
        setPercent(prev => {
          const next = Math.round(v);
          return next === prev ? prev : next;
        });
      }
    });

    return () => progress.removeListener(id);
  }, [progress, trackPercent]);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return {
    percent,
    progress,
    width,
  };
};
