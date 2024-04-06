import {Text, View} from 'react-native';

import {useProgressBar} from '../../hooks';
import {progressBarStyles} from '../../theme';
import {ProgressBarProps} from '../../types';

export const ProgressBar = ({
  backgroundColor = '#FFF',
  borderColor,
  borderRadius = 0,
  height = 20,
  progressColor = '#00cc00',
  rounded,
  showPercent,
  textColor,
  value = 0,
}: ProgressBarProps) => {
  const {progress} = useProgressBar(value);

  return (
    <View
      style={{
        ...progressBarStyles.container,
        backgroundColor,
        height,
        borderRadius: rounded ? 50 : borderRadius,
        borderColor,
        borderWidth: !!borderColor ? 1 : 0,
      }}>
      <View
        style={[
          progressBarStyles.progressBar,
          {backgroundColor: progressColor},
          {width: `${progress * 100}%`},
        ]}
      />
      {showPercent && (
        <Text style={{...progressBarStyles.progressText, color: textColor}}>
          {Math.round(progress * 100)}%
        </Text>
      )}
    </View>
  );
};
