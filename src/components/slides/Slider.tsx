import React from 'react';
import {View} from 'react-native';

import {Icon} from '../';
import {useSlider} from '../../hooks';
import {sliderStyles} from '../../theme';
import {SliderProps} from '../../types';

export const Slider = (props: SliderProps) => {
  const {trackStyles, thumbStyles} = props;

  const {
    borderRadius: trackRadius = 0,
    trackColor = '#CECECE',
    trackCompletedColor = '#4D67FF',
    height: trackHeight = 5,
  } = trackStyles ?? {};
  const {
    backgroundColor = '#FFFFFF',
    borderRadius = 50,
    height = 40,
    icon,
    iconColor = '#4D67FF',
    iconSize = 20,
    shadow = true,
    width = 40,
  } = thumbStyles ?? {};

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
          {
            backgroundColor: trackCompletedColor,
            width: thumbLeft + width! / 2,
            borderRadius: trackRadius,
          },
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
