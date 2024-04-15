import {useState} from 'react';
import {FlexAlignType} from 'react-native';
import {useAnimation} from './useAnimation';

export const useLongPressButton = (
  longPressTime = 2000,
  onFinish?: () => void,
) => {
  const [number, setNumber] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const {scale, scaleValue} = useAnimation();

  const alignSelf: {[key: string]: FlexAlignType} = {
    'left-to-right': 'flex-start',
    'right-to-left': 'flex-end',
    'center-to-ends': 'center',
  };

  const handlePressIn = () => {
    scale(1, 0.9);
    clearInterval(intervalId!);
    startCounting();
  };

  const handlePressOut = () => {
    scale(0.9, 1);
    clearInterval(intervalId!);
    decreaseCount();
  };

  const startCounting = () => {
    const speed = 100 / (longPressTime / 1000);
    const interval = 100 / speed;

    const id = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber < 100) {
          return prevNumber + 1;
        } else {
          clearInterval(id);
          scale(0.9, 1);
          setNumber(0);
          if (!!onFinish) {
            onFinish();
          }
          return prevNumber;
        }
      });
    }, interval);
    setIntervalId(id);
  };

  const decreaseCount = () => {
    const id = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber > 0) {
          return prevNumber - 1;
        } else {
          clearInterval(id);
          return prevNumber;
        }
      });
    }, 10);
    setIntervalId(id);
  };

  return {
    alignSelf,
    handlePressIn,
    handlePressOut,
    number,
    scaleValue,
  };
};
