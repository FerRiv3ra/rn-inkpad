import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {Icon} from '../';
import {colorToRgba} from '../../helpers/colorToRgba';
import {ratingCardStyles} from '../../theme';
import {FloatingActionCardProps} from '../../types';

export const FloatingActionCard = ({
  backgroundColor: bgColor,
  bottom = 40,
  decimals = 1,
  description,
  icon,
  iconColor = '#FFD700',
  image,
  onPress,
  rating = 0,
  textColor = '#000000',
  title,
  width = '90%',
}: FloatingActionCardProps) => {
  const backgroundColor = colorToRgba(bgColor ?? '#FFFFFF', 0.9);

  return (
    <Pressable
      onPress={onPress}
      style={{
        ...ratingCardStyles.container,
        bottom,
        width,
        backgroundColor,
      }}>
      {image && <Image style={{height: 75, width: 75}} source={image} />}
      <View style={ratingCardStyles.information}>
        <Text style={{...ratingCardStyles.title, color: textColor}}>
          {title}
        </Text>
        {description && (
          <Text style={{...ratingCardStyles.decription, color: textColor}}>
            {description}
          </Text>
        )}
        <View style={ratingCardStyles.rating}>
          {icon && <Icon name={icon} color={iconColor} size={16} />}
          {rating && (
            <Text style={{color: textColor}}>
              {Number(rating).toFixed(decimals)}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};
