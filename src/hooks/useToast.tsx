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

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        if (!!onHide) {
          onHide(false);
        }
      }, duration);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(translateY, {
        toValue: position === 'bottom' ? 100 : -100,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShow(false));
    }
  }, [visible, translateY, duration, onHide, position]);

  return {
    show,
    translateY,
  };
};
