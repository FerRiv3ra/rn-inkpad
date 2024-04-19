import {useRef, useState} from 'react';
import {
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';

export const useSlideAction = (
  padding: number,
  thumbWidth: number,
  onCompleted?: () => void,
) => {
  const [thumbLeft, setThumbLeft] = useState(padding);
  const [completed, setCompleted] = useState(false);
  const [showText, setShowText] = useState(true);
  const containerWidth = useRef(0);

  const handlePanResponderMove = (
    _: any,
    gestureState: PanResponderGestureState,
  ) => {
    setShowText(false);
    const newValue = thumbLeft + gestureState.dx;
    const boundedValue = Math.max(
      0,
      Math.min(newValue, containerWidth.current - (thumbWidth + padding)),
    );
    setThumbLeft(boundedValue);
  };

  const handlePanResponderRelease = () => {
    if (thumbLeft < containerWidth.current - (thumbWidth + padding)) {
      setThumbLeft(padding);
      setCompleted(false);
    } else {
      setCompleted(true);
      if (!!onCompleted) {
        onCompleted();
      }
    }

    setShowText(true);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;

    containerWidth.current = width;
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
