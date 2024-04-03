import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {Icon} from '..';

type Props = {
  defaultRating?: number;
  iconColor?: string;
  justRating?: boolean;
  readOnly?: boolean;
  reviews?: string[];
  size?: number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textSize?: number;
};

export const StarRating = ({
  defaultRating = 3,
  iconColor = '#F0D74B',
  justRating,
  readOnly,
  reviews,
  size = 35,
  style,
  textColor = '#F0D74B',
  textSize = 30,
}: Props) => {
  const [review, setReview] = useState<string>();
  const [rating, setRating] = useState<number>(0);

  let reviewsArray: string[] = [];

  if (reviews) {
    reviewsArray = reviews;
  } else {
    reviewsArray = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];
  }

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
        {reviewsArray.map((_, idx) => (
          <Pressable
            key={idx}
            disabled={readOnly}
            onPress={() => handleChange(idx)}>
            <Icon
              name={rating >= idx ? 'star' : `star-outline`}
              size={size}
              color={iconColor}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};
