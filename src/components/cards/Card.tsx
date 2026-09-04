import type {A11yProps} from '../../types';
import {Text, View} from 'react-native';

import {cardStyles} from '../../theme';
import {renderIcon} from '../../helpers/renderIcon';
import type {ButtonType, cardTheme, IconProp} from '../../types';
import {CardButton} from './CardButton';

type Props = A11yProps & {
  buttons: ButtonType[];
  description: string;
  icon?: IconProp;
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
        {!!icon && (
          <View style={cardStyles.icon}>
            {renderIcon(icon, {
              size: iconSize ?? 25,
              color: themeColor ?? '#000000',
            })}
          </View>
        )}
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
