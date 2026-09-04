import type {A11yProps} from '../../types';
import {Text, View} from 'react-native';

import {cardStyles} from '../../theme';
import type {ButtonType, cardTheme, IconName} from '../../types';
import {Icon} from '../icon/Icon';
import {CardButton} from './CardButton';

type Props = A11yProps & {
  buttons: ButtonType[];
  description: string;
  icon: IconName;
  title: string;
  theme?: cardTheme;
};

export const Card = ({
  accessibilityLabel,
  buttons,
  description,
  icon,
  testID,
  title,
  theme,
}: Props) => {
  const {backgroundColor, iconSize, themeColor, titleColor, titleSize, shadow} =
    theme || {};

  return (
    <View
      accessibilityLabel={accessibilityLabel ?? title}
      testID={testID}
      style={[
        cardStyles.cardContainer,
        !!backgroundColor && {backgroundColor},
        !!shadow && cardStyles.shadow,
      ]}>
      <View style={cardStyles.cardContent}>
        <Icon
          name={icon}
          color={themeColor ?? '#000000'}
          style={cardStyles.icon}
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
          <Text style={cardStyles.description}>{description}</Text>
        </View>
      </View>
      <View style={cardStyles.buttonsContainer}>
        {buttons.map((button, idx) => (
          <CardButton
            style={cardStyles.button}
            color={themeColor}
            button={button}
            key={button.text ?? idx}
            testID={testID ? `${testID}-button-${idx}` : undefined}
          />
        ))}
      </View>
    </View>
  );
};
