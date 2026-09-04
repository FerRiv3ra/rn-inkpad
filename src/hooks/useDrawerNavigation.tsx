import {useCallback, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useAnimation} from '.';

export const useDrawerNavigation = (widthPercent: number) => {
  const [visible, setVisible] = useState(false);

  const {width, height} = useWindowDimensions();
  const {moveLeft, moveRight, translateX} = useAnimation({
    width: width * (widthPercent / 100),
  });

  // Stable identity: memoized drawer items depend on it.
  const handlePress = useCallback(() => {
    setVisible(prev => {
      if (prev) {
        moveLeft();
      } else {
        moveRight();
      }
      return !prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handlePress,
    height,
    translateX,
    visible,
    width,
  };
};
