import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {Icon} from '../';
import {colorToRgba} from '../../helpers/colorToRgba';
import {ratingCardStyles} from '../../theme';
import {RatingCardProps} from '../../types';

export const RatingCard = ({
  backgroundColor: bgColor,
  bottom = 40,
  description,
  image,
  rating = 0,
  textColor = '#000000',
  title,
  width = 400,
  onPress,
}: RatingCardProps) => {
  const backgroundColor = colorToRgba(bgColor ?? '#FFFFFF', 0.9);

  return (
    <Pressable
      onPress={onPress}
      style={{...ratingCardStyles.container, bottom, width, backgroundColor}}>
      {image && (
        <Image
          style={{height: 60, width: 60, borderRadius: 5}}
          source={image}
        />
      )}
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
          <Icon name="star" color="#FFD700" size={16} />
          <Text style={{color: textColor}}>{Number(rating).toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
