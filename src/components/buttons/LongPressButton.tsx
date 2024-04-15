import React from 'react';
import {Animated, Text, TouchableWithoutFeedback, View} from 'react-native';

import {Icon} from '../';
import {useLongPressButton} from '../../hooks';
import {longPressButtonStyles} from '../../theme';
import {LongPressButtonProps} from '../../types';

export const LongPressButton = ({
  behavior = 'left-to-right',
  borderRadius = 20,
  fontSize = 14,
  fullWidth,
  height = 40,
  icon,
  iconPosition = 'left',
  longPressTime,
  onFinish,
  progressColor = 'rgba(255, 255, 255, 0.3)',
  text,
  textColor = '#FFF',
  width = '50%',
}: LongPressButtonProps) => {
  const {alignSelf, handlePressIn, handlePressOut, number, scaleValue} =
    useLongPressButton(longPressTime, onFinish);

  return (
    <Animated.View
      style={{
        width: '100%',
        alignItems: 'center',
        transform: [{scale: scaleValue}],
      }}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View
          style={{
            ...longPressButtonStyles.button,
            width: fullWidth ? '100%' : width,
            height,
            backgroundColor: '#464EE5',
            borderRadius,
          }}>
          <View
            style={[
              longPressButtonStyles.progress,
              {
                width: `${number}%`,
                borderRadius,
                backgroundColor: progressColor,
                alignSelf: alignSelf[behavior],
              },
            ]}></View>
          <View
            style={{
              ...longPressButtonStyles.buttonContent,
              flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
            }}>
            {!!icon && (
              <Icon name={icon} color={textColor} size={fontSize + 1} />
            )}
            <Text style={{color: textColor, fontSize}}>{text}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
