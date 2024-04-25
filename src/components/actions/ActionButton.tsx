import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {ActionSheet, ValidTheme} from '../../types/actionSheetTypes';
import {Icon} from '../icon/Icon';

type Props = {
  action: ActionSheet;
  backgroundColor: string;
  marginTop?: number;
  radius?: 'all' | 'top' | 'bottom' | 'none';
  showIconOnIos?: boolean;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  theme: ValidTheme;
};

export const ActionButton = ({
  action,
  backgroundColor,
  marginTop,
  radius = 'none',
  showIconOnIos,
  style,
  textColor,
  theme,
}: Props) => {
  const [edges, setEdges] = useState<StyleProp<ViewStyle>>({});
  const isIos = theme === 'cupertino';

  const {text, icon, iconColor, textStyle, onPress} = action;

  useEffect(() => {
    setEdges(border());
  }, [radius]);

  const border = (): StyleProp<ViewStyle> => {
    if (!isIos) {
      return {};
    }

    if (radius === 'all') {
      return {
        borderRadius: 10,
      };
    }

    if (radius === 'top') {
      return {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      };
    }

    if (radius === 'bottom') {
      return {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      };
    }

    return {};
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          ...styles.buttonContainer,
          justifyContent: theme === 'cupertino' ? 'center' : 'flex-start',
          backgroundColor,
          marginTop,
        },
        edges,
        style,
      ]}>
      {(!isIos || showIconOnIos) && icon && (
        <Icon
          name={icon}
          size={18}
          color={
            iconColor
              ? iconColor
              : theme === 'cupertino'
              ? textColor
              : '#757575'
          }
          style={isIos && styles.cupertinoIcon}
        />
      )}
      <Text style={[{color: textColor, fontWeight: '500'}, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    gap: 25,
  },
  cupertinoIcon: {
    position: 'absolute',
    alignSelf: 'center',
    left: 15,
  },
});
