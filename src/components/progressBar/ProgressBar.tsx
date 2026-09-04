import {Animated, Text, View} from 'react-native';

import {useProgressBar} from '../../hooks';
import {progressBarStyles} from '../../theme';
import type {ProgressBarProps} from '../../types';

export const ProgressBar = ({
  accessibilityLabel,
  backgroundColor = '#FFF',
  borderColor,
  borderRadius = 0,
  height = 20,
  progressColor = '#00cc00',
  rounded,
  showPercent,
  testID,
  textColor,
  value = 0,
}: ProgressBarProps) => {
  const {percent, width} = useProgressBar(value, !!showPercent);
  const now = Math.min(Math.max(Math.round(value), 0), 100);

  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{min: 0, max: 100, now}}
      testID={testID}
      style={[
        progressBarStyles.container,
        {
          backgroundColor,
          height,
          borderRadius: rounded ? 50 : borderRadius,
          borderColor,
          borderWidth: borderColor ? 1 : 0,
        },
      ]}>
      <Animated.View
        testID={testID ? `${testID}-fill` : undefined}
        style={[
          progressBarStyles.progressBar,
          {backgroundColor: progressColor, width},
        ]}
      />
      {showPercent && (
        <Text style={[progressBarStyles.progressText, {color: textColor}]}>
          {percent}%
        </Text>
      )}
    </View>
  );
};
