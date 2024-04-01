import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {Icon} from '..';
import {ValidName} from '../../types';

type Props = {
  defaultRating?: number;
  icon?: ValidName;
  iconColor?: string;
  justRating?: boolean;
  readOnly?: boolean;
  reviews?: string[];
  size?: number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textSize?: number;
  total?: number;
};

export const RbnbRating = ({
  defaultRating = 3,
  icon = 'star',
  iconColor = '#F0D74B',
  justRating,
  readOnly,
  reviews,
  size = 35,
  style,
  textColor = '#F0D74B',
  textSize = 30,
  total = 5,
}: Props) => {
  const [review, setReview] = useState<string>();
  const [rating, setRating] = useState<number>(0);

  let reviewsArray: string[] = [];

  if (reviews) {
    total = reviews.length;
    reviewsArray = reviews;
  } else {
    reviewsArray = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];
  }

  console.log(total);

  useEffect(() => {
    setRating(defaultRating - 1);
    setReview(reviewsArray[defaultRating - 1]);
  }, [defaultRating]);

  const handleChange = (rating: number) => {
    setRating(rating);
    setReview(reviewsArray[rating]);
  };

  return (
    <View style={style}>
      {!justRating && (
        <Text
          style={{
            textAlign: 'center',
            fontSize: textSize,
            color: textColor,
            fontWeight: '800',
            marginBottom: 10,
          }}>
          {review}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {reviewsArray.slice(0, total).map((_, idx) => (
          <Pressable
            key={idx}
            disabled={readOnly}
            onPress={() => handleChange(idx)}>
            <Icon
              name={rating >= idx ? icon : `${icon}-outline`}
              size={size}
              color={iconColor}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};
