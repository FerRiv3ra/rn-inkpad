import {useEffect, useMemo, useRef, useState} from 'react';
import type {LayoutChangeEvent, PanResponderGestureState} from 'react-native';
import {Animated, PanResponder} from 'react-native';

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(n, max));

/**
 * Slide-to-confirm logic. The thumb position is an `Animated.Value` driven
 * natively, so dragging never re-renders; only `completed` and `showText`
 * are React state.
 */
export const useSlideAction = (
  padding: number,
  thumbWidth: number,
  isCompleted = false,
  onCompleted?: () => void,
) => {
  const [completed, setCompleted] = useState(isCompleted);
  const [showText, setShowText] = useState(true);

  const thumbLeft = useRef(new Animated.Value(padding)).current;
  const positionPx = useRef(padding);
  const dragStartPx = useRef(padding);
  const containerWidth = useRef(0);

  const latest = useRef({padding, thumbWidth, onCompleted});
  latest.current = {padding, thumbWidth, onCompleted};

  const endPosition = () =>
    Math.max(
      containerWidth.current -
        (latest.current.thumbWidth + latest.current.padding),
      latest.current.padding,
    );

  const setPosition = (px: number) => {
    positionPx.current = px;
    thumbLeft.setValue(px);
  };

  const animateTo = (px: number) => {
    positionPx.current = px;
    Animated.spring(thumbLeft, {
      toValue: px,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  };

  // Sync with the controlled `isCompleted` prop.
  useEffect(() => {
    setCompleted(isCompleted);
    if (isCompleted) {
      if (containerWidth.current > 0) {
        animateTo(endPosition());
      }
    } else {
      animateTo(padding);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted, padding, thumbWidth]);

  const complete = () => {
    setPosition(endPosition());
    setCompleted(true);
    latest.current.onCompleted?.();
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          dragStartPx.current = positionPx.current;
          setShowText(false);
        },
        onPanResponderMove: (
          _: unknown,
          gestureState: PanResponderGestureState,
        ) => {
          setPosition(
            clamp(
              dragStartPx.current + gestureState.dx,
              latest.current.padding,
              endPosition(),
            ),
          );
        },
        onPanResponderRelease: () => {
          if (positionPx.current < endPosition()) {
            animateTo(latest.current.padding);
            setCompleted(false);
          } else {
            complete();
          }
          setShowText(true);
        },
        onPanResponderTerminate: () => {
          animateTo(latest.current.padding);
          setShowText(true);
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    containerWidth.current = event.nativeEvent.layout.width;
    // The layout arrives after the first render: place the thumb accordingly.
    setPosition(completed ? endPosition() : latest.current.padding);
  };

  /** Used by assistive technologies: completes without dragging. */
  const handleAccessibilityAction = () => {
    if (!completed) {
      complete();
    }
  };

  return {
    completed,
    handleAccessibilityAction,
    handleLayout,
    panResponder,
    showText,
    thumbLeft,
  };
};
