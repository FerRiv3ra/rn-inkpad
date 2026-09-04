import {Animated, Pressable, Text, View} from 'react-native';

import {Icon} from '../';
import {useLongPressButton} from '../../hooks';
import {longPressButtonStyles} from '../../theme';
import type {LongPressButtonProps} from '../../types';

export const LongPressButton = ({
  accessibilityHint = 'Press and hold to confirm',
  accessibilityLabel,
  backgroundColor = '#464EE5',
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
  style,
  testID,
  text = 'Button',
  textColor = '#FFF',
  width = '50%',
}: LongPressButtonProps) => {
  const {alignSelf, handlePressIn, handlePressOut, progressWidth, scaleValue} =
    useLongPressButton(longPressTime, onFinish);

  return (
    <Animated.View
      style={[
        longPressButtonStyles.wrapper,
        {transform: [{scale: scaleValue}]},
        style,
      ]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? text}
        accessibilityHint={accessibilityHint}
        testID={testID}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View
          style={[
            longPressButtonStyles.button,
            {
              width: fullWidth ? '100%' : width,
              height,
              backgroundColor,
              borderRadius,
            },
          ]}>
          <Animated.View
            testID={testID ? `${testID}-progress` : undefined}
            style={[
              longPressButtonStyles.progress,
              {
                width: progressWidth,
                borderRadius,
                backgroundColor: progressColor,
                alignSelf: alignSelf[behavior],
              },
            ]}
          />
          <View
            style={[
              longPressButtonStyles.buttonContent,
              {flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse'},
            ]}>
            {!!icon && (
              <Icon name={icon} color={textColor} size={fontSize + 1} />
            )}
            <Text style={{color: textColor, fontSize}}>{text}</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};
