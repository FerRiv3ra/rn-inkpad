import {useTheme} from '../../theme/ThemeProvider';
import {Animated, Text, View} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import {useSlideAction} from '../../hooks';
import {slideStyles} from '../../theme';
import type {SlideActionProps} from '../../types';

const ACCESSIBILITY_ACTIONS = [{name: 'activate'}];

export const SlideAction = (props: SlideActionProps) => {
  const {colors} = useTheme();
  const {
    accessibilityHint = 'Slide the thumb to the end to confirm',
    accessibilityLabel,
    height = 56,
    icon,
    iconColor = colors.secondary,
    iconCompletedColor = colors.success,
    iconOnCompleted,
    iconSize = 20,
    isCompleted,
    onCompleted,
    padding = 8,
    readonly,
    style,
    testID,
    text,
    textOnCompleted,
    textPosition = 'center',
    textStyle,
    thumbBorderColor,
    thumbBorderWidth,
    thumbColor = '#FFFFFF',
    thumbCompletedColor = '#FFFFFF',
    thumbWidth = 40,
    tintColor = colors.secondary,
    tintCompletedColor = colors.success,
  } = props;
  const {
    completed,
    handleAccessibilityAction,
    handleLayout,
    panResponder,
    showText,
    thumbLeft,
  } = useSlideAction(padding, thumbWidth, isCompleted, onCompleted);

  const responders = readonly ? {} : panResponder.panHandlers;
  const currentText = completed ? textOnCompleted : text;

  return (
    <View
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? currentText}
      accessibilityHint={readonly ? undefined : accessibilityHint}
      accessibilityState={{disabled: readonly, checked: completed}}
      accessibilityActions={readonly ? undefined : ACCESSIBILITY_ACTIONS}
      onAccessibilityAction={readonly ? undefined : handleAccessibilityAction}
      testID={testID}
      style={[
        slideStyles.container,
        {
          height,
          padding,
          backgroundColor: completed ? tintCompletedColor : tintColor,
          alignItems:
            textPosition === 'center'
              ? 'center'
              : completed
                ? 'flex-start'
                : 'flex-end',
        },
        style,
      ]}
      {...responders}
      onLayout={handleLayout}>
      {showText && (
        <Text style={[slideStyles.text, {color: thumbColor}, textStyle]}>
          {currentText}
        </Text>
      )}
      <Animated.View
        testID={testID ? `${testID}-thumb` : undefined}
        style={[
          slideStyles.thumb,
          {
            backgroundColor: completed ? thumbCompletedColor : thumbColor,
            borderWidth: thumbBorderWidth,
            borderColor: thumbBorderColor,
            width: thumbWidth,
            transform: [{translateX: thumbLeft}],
          },
        ]}>
        {renderIcon(completed ? (iconOnCompleted ?? icon) : icon, {
          size: iconSize,
          color: completed ? iconCompletedColor : iconColor,
        })}
      </Animated.View>
    </View>
  );
};
