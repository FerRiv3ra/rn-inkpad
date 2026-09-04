import {useEffect, useRef, useState} from 'react';
import type {LayoutChangeEvent, PanResponderGestureState} from 'react-native';
import {PanResponder} from 'react-native';
import type {SliderProps} from '../types';

export const useSlider = (props: SliderProps, thumbWidth: number) => {
  const {onChange, value, minValue = 0, maxValue = 100} = props;

  const [thumbLeft, setThumbLeft] = useState(0);
  const containerWidth = useRef(0);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const range = Math.max(maxValue - minValue, 1);
  const trackWidth = () => Math.max(containerWidth.current - thumbWidth, 0);

  const positionFromValue = (current = 0) =>
    (trackWidth() / range) * Math.min(Math.max(current - minValue, 0), range);

  // Report the initial value once, so the consumer state matches the thumb.
  useEffect(() => {
    if (value === 0) {
      onChangeRef.current?.(minValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue]);

  // Keep the thumb in sync when the controlled value changes.
  useEffect(() => {
    if (containerWidth.current > 0) {
      setThumbLeft(positionFromValue(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, minValue, maxValue, thumbWidth]);

  const handlePanResponderMove = (
    _: unknown,
    gestureState: PanResponderGestureState,
  ) => {
    const boundedValue = Math.max(
      0,
      Math.min(thumbLeft + gestureState.dx, trackWidth()),
    );
    const currentValue = (boundedValue / trackWidth()) * range;
    onChangeRef.current?.(Math.round(currentValue) + minValue);
    setThumbLeft(boundedValue);
  };

  const handlePanResponderRelease = () => {
    setThumbLeft(positionFromValue(value));
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    containerWidth.current = event.nativeEvent.layout.width;
    setThumbLeft(positionFromValue(value));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: handlePanResponderRelease,
    onPanResponderMove: handlePanResponderMove,
  });

  return {
    panResponder,
    handleLayout,
    thumbLeft,
  };
};
