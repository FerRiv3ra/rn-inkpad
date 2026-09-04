import {useTheme} from '../../theme/ThemeProvider';
import {Animated, StyleSheet, View} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import {useSlider} from '../../hooks';
import {sliderStyles} from '../../theme';
import type {SliderProps} from '../../types';

const ACCESSIBILITY_ACTIONS = [{name: 'increment'}, {name: 'decrement'}];

export const Slider = (props: SliderProps) => {
  const {
    accessibilityHint,
    accessibilityLabel,
    maxValue = 100,
    minValue = 0,
    testID,
    thumbStyles,
    trackStyles,
    value,
  } = props;

  const {colors} = useTheme();
  const {
    borderRadius: trackRadius = 0,
    trackColor = colors.border,
    trackCompletedColor = colors.primary,
    height: trackHeight = 5,
  } = trackStyles ?? {};
  const {
    backgroundColor = '#FFFFFF',
    borderRadius = 50,
    height = 40,
    icon,
    iconColor = colors.primary,
    iconSize = 20,
    shadow = true,
    width = 40,
  } = thumbStyles ?? {};

  const {
    completedTranslateX,
    handleAccessibilityAction,
    handleLayout,
    panResponder,
    thumbLeft,
  } = useSlider(props, width);

  return (
    <View
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityValue={{min: minValue, max: maxValue, now: value}}
      accessibilityActions={ACCESSIBILITY_ACTIONS}
      onAccessibilityAction={handleAccessibilityAction}
      testID={testID}
      style={[
        sliderStyles.container,
        {
          height: trackHeight,
          borderRadius: trackRadius,
          backgroundColor: trackColor,
        },
      ]}
      {...panResponder.panHandlers}
      onLayout={handleLayout}>
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          styles.clip,
          {borderRadius: trackRadius},
        ]}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: trackCompletedColor,
              borderRadius: trackRadius,
              transform: [{translateX: completedTranslateX}],
            },
          ]}
        />
      </View>
      <Animated.View
        testID={testID ? `${testID}-thumb` : undefined}
        style={[
          sliderStyles.thumb,
          {
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{translateX: thumbLeft}],
          },
          shadow && sliderStyles.shadow,
        ]}>
        {renderIcon(icon, {size: iconSize, color: iconColor})}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  clip: {
    overflow: 'hidden',
  },
});
