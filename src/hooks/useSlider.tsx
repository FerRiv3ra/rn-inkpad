import {useEffect, useRef, useState} from 'react';
import {
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';
import {SliderProps} from '../types';

export const useSlider = (props: SliderProps, width: number) => {
  const {onChange, value, minValue = 0, maxValue = 100} = props;

  const [thumbLeft, setThumbLeft] = useState(0);
  const containerWidth = useRef(0);

  useEffect(() => {
    if (!!onChange && value === 0) {
      onChange(minValue);
    }
  }, [minValue]);

  const handlePanResponderMove = (
    _: any,
    gestureState: PanResponderGestureState,
  ) => {
    const newValue = thumbLeft + gestureState.dx;
    const boundedValue = Math.max(
      0,
      Math.min(newValue, containerWidth.current - width!),
    );
    const currentValue =
      (boundedValue / (containerWidth.current - width!)) *
      (maxValue - minValue);
    if (!!onChange) {
      onChange(Math.round(currentValue) + minValue);
    }
    setThumbLeft(boundedValue);
  };

  const handlePanResponderRelease = () => {
    setThumbLeft(((containerWidth.current - width!) / maxValue) * (value ?? 0));
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;

    containerWidth.current = width;

    setThumbLeft(((containerWidth.current - width!) / maxValue) * (value ?? 0));
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
