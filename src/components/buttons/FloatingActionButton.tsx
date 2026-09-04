import {useState} from 'react';
import {View} from 'react-native';

import type {FabProps} from '../../types';
import {CloseGlyph, PlusGlyph} from '../glyphs/Glyphs';
import {ActionButton} from './ActionButton';

export const FloatingActionButton = ({
  accessibilityHint,
  accessibilityLabel,
  actions,
  backgroundColor,
  marginHorizontal = 20,
  marginVertical = 30,
  icon,
  openIcon,
  closeIcon,
  iconColor,
  iconSize,
  onPress,
  align = 'bottom-right',
  size = 50,
  testID,
}: FabProps) => {
  const [showActions, setShowActions] = useState(false);

  const position = {
    bottom: align.includes('bottom') ? marginVertical : undefined,
    top: align.includes('top') ? marginVertical : undefined,
    right: align.includes('right') ? marginHorizontal : undefined,
    left: align.includes('left') ? marginHorizontal : undefined,
  };

  const handlePress = () => {
    if (actions?.length) {
      setShowActions(!showActions);
    }
    onPress?.();
  };

  return (
    <View
      style={[
        {
          position: 'absolute',
          alignItems: align.includes('left') ? 'flex-start' : 'flex-end',
          flexDirection: align.includes('top') ? 'column-reverse' : 'column',
        },
        position,
      ]}>
      {showActions &&
        actions?.map((action, index) => (
          <ActionButton
            align={align.includes('left') ? 'left' : 'right'}
            backgroundColor={backgroundColor}
            icon={action.icon}
            iconColor={iconColor}
            iconSize={(iconSize ?? 22) - 4}
            margin={5}
            onPress={action.onPress}
            size={size - 10}
            text={action.text}
            key={action.text ?? index}
            testID={testID ? `${testID}-action-${index}` : undefined}
          />
        ))}
      <ActionButton
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityState={
          actions?.length ? {expanded: showActions} : undefined
        }
        testID={testID}
        onPress={handlePress}
        backgroundColor={backgroundColor}
        icon={
          showActions
            ? (closeIcon ?? icon ?? CloseGlyph)
            : (openIcon ?? icon ?? PlusGlyph)
        }
        iconColor={iconColor}
        size={size}
        iconSize={iconSize}
      />
    </View>
  );
};
