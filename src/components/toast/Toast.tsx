import React from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

import {useToast} from '../../hooks';
import {ToastProps} from '../../types';
import {Icon} from '../icon/Icon';

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
}: ToastProps) => {
  const {show, translateY} = useToast(visible, duration, position, onHide);

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
