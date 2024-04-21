import React from 'react';
import {View} from 'react-native';

import {Icon} from '../';
import {useSlider} from '../../hooks';
import {sliderStyles} from '../../theme';
import {SliderProps, thumbDefaultStyle, trackDefaultStyle} from '../../types';

export const Slider = (props: SliderProps) => {
  const {trackStyles = trackDefaultStyle, thumbStyles = thumbDefaultStyle} =
    props;

  const {
    borderRadius: trackRadius,
    trackColor,
    trackCompletedColor,
    height: trackHeight,
  } = trackStyles;
  const {
    backgroundColor,
    borderRadius,
    height,
    icon,
    iconColor,
    iconSize,
    shadow,
    width,
  } = thumbStyles;

  const {panResponder, handleLayout, thumbLeft} = useSlider(props, width!);

  return (
    <View
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
        style={[
          sliderStyles.track,
          {backgroundColor: trackCompletedColor, width: thumbLeft + width! / 2},
        ]}
      />
      <View
        style={[
          sliderStyles.thumb,
          {
            backgroundColor,
            width,
            height,
            borderRadius,
          },
          {left: thumbLeft},
          shadow && sliderStyles.shadow,
        ]}>
        {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
      </View>
    </View>
  );
};
