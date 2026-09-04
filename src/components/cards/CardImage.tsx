import {useEffect, useState} from 'react';
import type {ImageSourcePropType} from 'react-native';
import {ImageBackground, Text, View} from 'react-native';
import {cardImageStyles, cardStyles} from '../../theme';
import type {imageCardTheme} from '../../types';

type Props = {
  source: ImageSourcePropType;
  loadTime?: number;
  text?: string;
  theme?: imageCardTheme;
};

export const CardImage = ({source, loadTime = 1500, text, theme}: Props) => {
  const {backgroundColor, fontColor, fontSize, fontWeight, shadow, radius} =
    theme || {};

  const [blur, setBlur] = useState(10);

  // Primitive key so an inline `source` object does not restart the effect.
  const sourceKey =
    typeof source === 'object' && !Array.isArray(source) && 'uri' in source
      ? source.uri
      : source;

  useEffect(() => {
    setBlur(10);
    const interval = setInterval(() => {
      setBlur(prevBlur => {
        if (prevBlur === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevBlur - 1;
      });
    }, loadTime / 10);

    return () => clearInterval(interval);
  }, [loadTime, sourceKey]);

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
            borderTopLeftRadius: radius ?? 15,
            borderTopRightRadius: radius ?? 15,
          },
          !text && {
            borderBottomLeftRadius: radius ?? 15,
            borderBottomRightRadius: radius ?? 15,
          },
        ]}
        blurRadius={blur}
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
