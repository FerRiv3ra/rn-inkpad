import React from 'react';
import {Text, View} from 'react-native';

import {Icon} from '../';
import {useSlideAction} from '../../hooks';
import {slideStyles} from '../../theme';
import {SlideActionProps} from '../../types';

export const SlideAction = ({
  height = 56,
  icon,
  iconColor = '#F43F5D',
  iconCompletedColor = '#4ADE80',
  iconOnCompleted,
  iconSize = 20,
  isCompleted,
  onCompleted,
  padding = 8,
  readonly,
  style,
  text,
  textOnCompleted,
  textPosition = 'center',
  textStyle,
  thumbBorderColor,
  thumbBorderWidth,
  thumbColor = '#FFFFFF',
  thumbCompletedColor = '#FFFFFF',
  thumbWidth = 40,
  tintColor = '#F43F5D',
  tintCompletedColor = '#4ADE80',
}: SlideActionProps) => {
  const {completed, handleLayout, panResponder, showText, thumbLeft} =
    useSlideAction(padding, thumbWidth, isCompleted, onCompleted);

  const responders = readonly ? {} : {...panResponder.panHandlers};

  return (
    <View
      style={[
        {
          ...slideStyles.container,
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
          {completed ? textOnCompleted : text}
        </Text>
      )}
      <View
        style={[
          slideStyles.thumb,
          {
            backgroundColor: completed ? thumbCompletedColor : thumbColor,
            borderWidth: thumbBorderWidth,
            borderColor: thumbBorderColor,
            width: thumbWidth,
          },
          {left: thumbLeft},
        ]}>
        {icon && (
          <Icon
            name={completed ? iconOnCompleted ?? icon : icon}
            color={completed ? iconCompletedColor : iconColor}
            size={iconSize}
          />
        )}
      </View>
    </View>
  );
};
