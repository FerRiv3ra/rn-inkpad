import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

type Props = {
  backgroundColor?: string;
  defaultText?: string;
  fontSize?: number;
  image?: ImageSourcePropType;
  size?: number;
  textColor?: string;
};

export const CircleAvatar = ({
  backgroundColor = '#373099',
  defaultText = 'AA',
  fontSize = 20,
  image,
  size = 50,
  textColor = '#FFFFFF',
}: Props) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: backgroundColor,
        borderRadius: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!!image ? (
        <Image
          style={{height: size, width: size, borderRadius: size}}
          source={image}
        />
      ) : (
        <Text style={{color: textColor, fontSize, fontWeight: '600'}}>
          {defaultText}
        </Text>
      )}
    </View>
  );
};
