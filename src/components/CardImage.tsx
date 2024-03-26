import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {cardImageStyles, cardStyles} from '../theme';
import {imageCardTheme} from '../types';

type Props = {
  source: ImageSourcePropType;
  text?: string;
  theme?: imageCardTheme;
};

export const CardImage = ({source, text, theme}: Props) => {
  const {backgroundColor, fontColor, fontSize, fontWeight, shadow, radius} =
    theme || {};

  return (
    <View
      style={[
        {
          borderRadius: radius ?? 15,
          backgroundColor: backgroundColor ?? '#FFF',
        },
        !!shadow && cardStyles.shadow,
      ]}>
      <Image
        style={[
          cardImageStyles.container,
          {
            borderTopLeftRadius: radius ?? 15,
            borderTopRightRadius: radius ?? 15,
          },
          !text && {
            borderBottomLeftRadius: radius ?? 15,
            borderBottomRightRadius: radius ?? 15,
          },
        ]}
        source={source}
      />
      {!!text && (
        <Text
          style={[
            cardImageStyles.text,
            {
              color: fontColor ?? '#000',
              fontSize: fontSize ?? 15,
              fontWeight: fontWeight,
            },
          ]}>
          {text}
        </Text>
      )}
    </View>
  );
};
