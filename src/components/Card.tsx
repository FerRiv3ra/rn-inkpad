import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {cardStyles} from '../theme';
import {ButtonType, cardTheme, IconName} from '../types';
import {Button} from './Button';

type Props = {
  buttons: ButtonType[];
  description: string;
  icon: IconName;
  title: string;
  theme?: cardTheme;
};

export const Card = ({buttons, description, icon, title, theme}: Props) => {
  const {backgroundColor, iconSize, themeColor, titleColor, titleSize, shadow} =
    theme || {};

  return (
    <View
      style={[
        cardStyles.cardContainer,
        !!backgroundColor && {backgroundColor},
        !!shadow && cardStyles.shadow,
      ]}>
      <View style={{...cardStyles.cardContent}}>
        <Icon
          name={icon}
          color={themeColor ?? '#000000'}
          style={{...cardStyles.icon}}
          size={iconSize ?? 25}
        />
        <View>
          <Text
            style={[
              cardStyles.title,
              {fontSize: titleSize ?? 16},
              !!titleColor && {color: titleColor},
            ]}>
            {title}
          </Text>
          <Text style={{...cardStyles.description}}>{description}</Text>
        </View>
      </View>
      <View style={{...cardStyles.buttonsContainer}}>
        {buttons.map((button, idx) => (
          <Button
            style={{...cardStyles.button}}
            color={themeColor}
            button={button}
            key={idx}
          />
        ))}
      </View>
    </View>
  );
};
