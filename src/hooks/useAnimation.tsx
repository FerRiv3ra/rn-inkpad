import {useRef} from 'react';
import {Animated, PanResponder} from 'react-native';

type Props = {
  width?: number;
};

export const useAnimation = (props?: Props) => {
  const {width = 0} = props ?? {};

  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(width === 0 ? 0 : -1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const moveRight = (toValue = 0) => {
    Animated.timing(position, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const moveLeft = (toValue = -1) => {
    Animated.timing(position, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
  });

  const scale = (from = 1, toValue = 0.9) => {
    scaleValue.setValue(from);

    Animated.timing(scaleValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  const fadeIn = (duration = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (duration = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const translatePosition = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    moveLeft,
    moveRight,
    opacity,
    pan,
    panResponder,
    position,
    scale,
    scaleValue,
    translatePosition,
    translateX,
  };
};
