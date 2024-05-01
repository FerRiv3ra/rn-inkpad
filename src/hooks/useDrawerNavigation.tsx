import {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useAnimation} from '.';

export const useDrawerNavigation = (widthPercent: number) => {
  const [visible, setVisible] = useState(false);

  const {width, height} = useWindowDimensions();
  const {moveLeft, moveRight, translateX} = useAnimation({
    width: width * (widthPercent / 100),
  });

  const handlePress = () => {
    if (visible) {
      moveLeft();
    } else {
      moveRight();
    }
    setVisible(!visible);
  };

  return {
    handlePress,
    height,
    translateX,
    visible,
    width,
  };
};
