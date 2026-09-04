import {useEffect, useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Pressable, Text, View} from 'react-native';
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
  onChange?: (value: number) => void;
};

const DEFAULT_REVIEWS = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];

export const StarRating = ({
  defaultRating = 3,
  iconColor = '#FFD700',
  justRating,
  onChange,
  readOnly,
  reviews,
  size = 35,
  style,
  textColor = '#FFD700',
  textSize = 30,
}: Props) => {
  const [rating, setRating] = useState<number>(defaultRating - 1);

  const reviewsArray = reviews ?? DEFAULT_REVIEWS;
  // Derived, so a parent re-render never resets the selection.
  const review = reviewsArray[rating];

  useEffect(() => {
    setRating(defaultRating - 1);
  }, [defaultRating]);

  const handleChange = (index: number) => {
    setRating(index);
    onChange?.(index + 1);
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
