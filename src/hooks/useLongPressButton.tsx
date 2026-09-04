import {useEffect, useRef} from 'react';
import type {ViewStyle} from 'react-native';
import {Animated} from 'react-native';
import {useAnimation} from './useAnimation';

/** Milliseconds to empty a full bar after releasing. */
const RELEASE_DURATION_MS = 400;

/**
 * Long press progress driven by `Animated.timing` instead of a 10 ms
 * setState loop. Only `onFinish` reaches React.
 */
export const useLongPressButton = (
  longPressTime = 2000,
  onFinish?: () => void,
) => {
  const progress = useRef(new Animated.Value(0)).current;
  const current = useRef(0);
  const running = useRef<Animated.CompositeAnimation | null>(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const {scale, scaleValue} = useAnimation();

  const alignSelf: {[key: string]: ViewStyle['alignSelf']} = {
    'left-to-right': 'flex-start',
    'right-to-left': 'flex-end',
    'center-to-ends': 'center',
  };

  useEffect(() => {
    const id = progress.addListener(({value}) => {
      current.current = value;
    });
    return () => {
      progress.removeListener(id);
      running.current?.stop();
    };
  }, [progress]);

  const stop = () => {
    running.current?.stop();
    running.current = null;
  };

  const handlePressIn = () => {
    stop();
    scale(1, 0.9);
    const remaining = (1 - current.current / 100) * longPressTime;
    const animation = Animated.timing(progress, {
      toValue: 100,
      duration: remaining,
      useNativeDriver: false,
    });
    running.current = animation;
    animation.start(({finished}) => {
      if (!finished) {
        return;
      }
      running.current = null;
      scale(0.9, 1);
      progress.setValue(0);
      current.current = 0;
      onFinishRef.current?.();
    });
  };

  const handlePressOut = () => {
    if (!running.current) {
      return;
    }
    stop();
    scale(0.9, 1);
    const animation = Animated.timing(progress, {
      toValue: 0,
      duration: (current.current / 100) * RELEASE_DURATION_MS,
      useNativeDriver: false,
    });
    running.current = animation;
    animation.start(() => {
      running.current = null;
    });
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return {
    alignSelf,
    handlePressIn,
    handlePressOut,
    progressWidth,
    scaleValue,
  };
};
