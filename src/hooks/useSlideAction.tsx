import {useEffect, useRef, useState} from 'react';
import type {LayoutChangeEvent, PanResponderGestureState} from 'react-native';
import {PanResponder} from 'react-native';

export const useSlideAction = (
  padding: number,
  thumbWidth: number,
  isCompleted = false,
  onCompleted?: () => void,
) => {
  const [thumbLeft, setThumbLeft] = useState(padding);
  const [completed, setCompleted] = useState(isCompleted);
  const [showText, setShowText] = useState(true);
  const containerWidth = useRef(0);
  const onCompletedRef = useRef(onCompleted);
  onCompletedRef.current = onCompleted;

  const endPosition = () =>
    Math.max(containerWidth.current - (thumbWidth + padding), padding);

  // Sync with the controlled `isCompleted` prop.
  useEffect(() => {
    setCompleted(isCompleted);
    if (isCompleted) {
      if (containerWidth.current > 0) {
        setThumbLeft(endPosition());
      }
    } else {
      setThumbLeft(padding);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted, padding, thumbWidth]);

  const handlePanResponderMove = (
    _: unknown,
    gestureState: PanResponderGestureState,
  ) => {
    setShowText(false);
    const boundedValue = Math.max(
      0,
      Math.min(thumbLeft + gestureState.dx, endPosition()),
    );
    setThumbLeft(boundedValue);
  };

  const handlePanResponderRelease = () => {
    if (thumbLeft < endPosition()) {
      setThumbLeft(padding);
      setCompleted(false);
    } else {
      setCompleted(true);
      onCompletedRef.current?.();
    }

    setShowText(true);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    containerWidth.current = event.nativeEvent.layout.width;
    // The layout arrives after the first render: place the thumb accordingly.
    if (completed) {
      setThumbLeft(endPosition());
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: handlePanResponderRelease,
    onPanResponderMove: handlePanResponderMove,
  });

  return {
    completed,
    handleLayout,
    panResponder,
    showText,
    thumbLeft,
  };
};
