import React, {useEffect, useState} from 'react';
import {ImageBackground, ImageSourcePropType, Text, View} from 'react-native';
import {cardImageStyles, cardStyles} from '../../theme';
import {imageCardTheme} from '../../types';

type Props = {
  source: ImageSourcePropType;
  loadTime?: number;
  text?: string;
  theme?: imageCardTheme;
};

export const CardImage = ({source, loadTime = 1500, text, theme}: Props) => {
  const {backgroundColor, fontColor, fontSize, fontWeight, shadow, radius} =
    theme || {};

  const [blur, setBlur] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, loadTime);
  }, []);

  return (
    <View
      style={[
        {
          borderRadius: radius ?? 15,
          backgroundColor: backgroundColor ?? '#FFF',
        },
        !!shadow && cardStyles.shadow,
      ]}>
      <ImageBackground
        style={[cardImageStyles.container]}
        imageStyle={[
          {
            borderTopLeftRadius: 15,
            borderTopRightRadius: radius ?? 15,
          },
          !text && {
            borderBottomLeftRadius: radius ?? 15,
            borderBottomRightRadius: radius ?? 15,
          },
        ]}
        blurRadius={blur ? 10 : 0}
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
