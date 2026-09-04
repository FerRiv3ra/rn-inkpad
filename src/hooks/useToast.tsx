import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

export const useToast = (
  visible?: boolean,
  duration?: number,
  position?: 'top' | 'bottom',
  onHide?: (visible: boolean) => void,
) => {
  const [show, setShow] = useState(visible);
  const translateY = useRef(
    new Animated.Value(position === 'bottom' ? 100 : -100),
  ).current;
  // Keep the latest callback without restarting the timer on every render.
  const onHideRef = useRef(onHide);
  onHideRef.current = onHide;

  useEffect(() => {
    if (visible) {
      setShow(true);
      const animation = Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      });
      animation.start();

      const timer = setTimeout(() => {
        onHideRef.current?.(false);
      }, duration);

      return () => {
        clearTimeout(timer);
        animation.stop();
      };
    }

    const animation = Animated.timing(translateY, {
      toValue: position === 'bottom' ? 100 : -100,
      duration: 500,
      useNativeDriver: true,
    });
    animation.start(({finished}) => {
      if (finished) {
        setShow(false);
      }
    });

    return () => animation.stop();
  }, [visible, translateY, duration, position]);

  return {
    show,
    translateY,
  };
};
