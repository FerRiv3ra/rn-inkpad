import {useEffect, useMemo, useRef} from 'react';
import type {
  AccessibilityActionEvent,
  LayoutChangeEvent,
  PanResponderGestureState,
} from 'react-native';
import {Animated, PanResponder} from 'react-native';
import type {SliderProps} from '../types';

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(n, max));

/**
 * Slider logic driven by an `Animated.Value` (native driver) so dragging never
 * re-renders the component. The PanResponder is created once; it reads the
 * latest props through a ref.
 */
export const useSlider = (props: SliderProps, thumbWidth: number) => {
  const {onChange, value, minValue = 0, maxValue = 100} = props;

  const thumbLeft = useRef(new Animated.Value(0)).current;
  const containerWidth = useRef(new Animated.Value(0)).current;
  const containerWidthPx = useRef(0);
  const positionPx = useRef(0);
  const dragStartPx = useRef(0);
  const dragging = useRef(false);

  const latest = useRef({onChange, value, minValue, maxValue, thumbWidth});
  latest.current = {onChange, value, minValue, maxValue, thumbWidth};

  const trackWidth = () =>
    Math.max(containerWidthPx.current - latest.current.thumbWidth, 0);

  const range = () =>
    Math.max(latest.current.maxValue - latest.current.minValue, 1);

  const positionFromValue = (current = 0) =>
    (trackWidth() / range()) *
    clamp(current - latest.current.minValue, 0, range());

  const setPosition = (px: number) => {
    positionPx.current = px;
    thumbLeft.setValue(px);
  };

  // Report the initial value once, so the consumer state matches the thumb.
  useEffect(() => {
    if (value === 0) {
      onChange?.(minValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue]);

  // Keep the thumb in sync when the controlled value changes.
  useEffect(() => {
    if (containerWidthPx.current > 0 && !dragging.current) {
      setPosition(positionFromValue(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, minValue, maxValue, thumbWidth]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          dragging.current = true;
          dragStartPx.current = positionPx.current;
        },
        onPanResponderMove: (
          _: unknown,
          gestureState: PanResponderGestureState,
        ) => {
          const track = trackWidth();
          const bounded = clamp(
            dragStartPx.current + gestureState.dx,
            0,
            track,
          );
          setPosition(bounded);
          const ratio = track > 0 ? bounded / track : 0;
          latest.current.onChange?.(
            Math.round(ratio * range()) + latest.current.minValue,
          );
        },
        onPanResponderRelease: () => {
          dragging.current = false;
          if (latest.current.value !== undefined) {
            setPosition(positionFromValue(latest.current.value));
          }
        },
        onPanResponderTerminate: () => {
          dragging.current = false;
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    containerWidthPx.current = event.nativeEvent.layout.width;
    containerWidth.setValue(containerWidthPx.current);
    setPosition(positionFromValue(latest.current.value));
  };

  const handleAccessibilityAction = (event: AccessibilityActionEvent) => {
    const step = Math.max(Math.round(range() / 10), 1);
    const current = latest.current.value ?? latest.current.minValue;
    const direction = event.nativeEvent.actionName === 'increment' ? 1 : -1;
    const next = clamp(
      current + direction * step,
      latest.current.minValue,
      latest.current.maxValue,
    );
    if (next !== current) {
      latest.current.onChange?.(next);
    }
  };

  // Completed track: full width, shifted left so only the completed part shows.
  const completedTranslateX = Animated.subtract(
    Animated.add(thumbLeft, thumbWidth / 2),
    containerWidth,
  );

  return {
    completedTranslateX,
    handleAccessibilityAction,
    handleLayout,
    panResponder,
    thumbLeft,
  };
};
