import {useCallback, useEffect, useRef, useState} from 'react';
import type {ViewStyle} from 'react-native';
import {useAnimation} from './useAnimation';

const RELEASE_TICK_MS = 10;

export const useLongPressButton = (
  longPressTime = 2000,
  onFinish?: () => void,
) => {
  const [number, setNumber] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const {scale, scaleValue} = useAnimation();

  const alignSelf: {[key: string]: ViewStyle['alignSelf']} = {
    'left-to-right': 'flex-start',
    'right-to-left': 'flex-end',
    'center-to-ends': 'center',
  };

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Never leave an interval running after unmount.
  useEffect(() => clear, [clear]);

  // Completion is handled here, outside the state updater, so side effects
  // run exactly once even in StrictMode.
  useEffect(() => {
    if (number >= 100) {
      clear();
      scale(0.9, 1);
      setNumber(0);
      onFinishRef.current?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, clear]);

  const startCounting = () => {
    clear();
    intervalRef.current = setInterval(() => {
      setNumber(prev => Math.min(prev + 1, 100));
    }, longPressTime / 100);
  };

  const decreaseCount = () => {
    clear();
    intervalRef.current = setInterval(() => {
      setNumber(prev => {
        if (prev <= 1) {
          clear();
          return 0;
        }
        return prev - 1;
      });
    }, RELEASE_TICK_MS);
  };

  const handlePressIn = () => {
    scale(1, 0.9);
    startCounting();
  };

  const handlePressOut = () => {
    scale(0.9, 1);
    decreaseCount();
  };

  return {
    alignSelf,
    handlePressIn,
    handlePressOut,
    number,
    scaleValue,
  };
};
