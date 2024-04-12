import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {IconName} from '../../types';
import {Icon} from '../icon/Icon';

type Props = {
  backgroundColor?: string;
  bottom?: number;
  duration?: number;
  fontSize?: number;
  icon?: IconName;
  position?: 'top' | 'bottom';
  text?: string;
  textColor?: string;
  top?: number;
  visible?: boolean;
  onHide?: (visible: boolean) => void;
};

export const Toast = ({
  backgroundColor = 'rgba(0,0,0,0.7)',
  duration = 3000,
  bottom = 30,
  top = 50,
  fontSize = 14,
  icon,
  onHide,
  position = 'top',
  text,
  textColor = '#FFF',
  visible,
}: Props) => {
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

  if (!show) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {backgroundColor},
        {transform: [{translateY: translateY}]},
        position === 'top' ? {top} : {bottom},
      ]}>
      {!!icon && <Icon name={icon} color={textColor} size={fontSize + 2} />}
      {!!text && <Text style={{color: textColor, fontSize}}>{text}</Text>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 15,
    position: 'absolute',
  },
});
