import React, {useEffect, useState} from 'react';
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ActionSheet} from '../../types/actionSheetTypes';
import {Icon} from '../icon/Icon';

type Props = {
  action: ActionSheet;
  backgroundColor: string;
  marginTop?: number;
  radius?: 'all' | 'top' | 'bottom' | 'none';
  showIconOnIos?: boolean;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
};

export const ActionButton = ({
  action,
  backgroundColor,
  marginTop,
  radius = 'none',
  showIconOnIos,
  style,
  textColor,
}: Props) => {
  const [edges, setEdges] = useState<StyleProp<ViewStyle>>({});
  const isIos = Platform.OS === 'ios';

  const {text, icon, iconColor, textStyle, onPress} = action;

  useEffect(() => {
    setEdges(border());
  }, [radius]);

  const border = (): StyleProp<ViewStyle> => {
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
        {...styles.buttonContainer, backgroundColor, marginTop},
        edges,
        style,
      ]}>
      {(!isIos || showIconOnIos) && icon && (
        <Icon
          name={icon}
          size={18}
          color={iconColor ?? textColor}
          style={{position: 'absolute', alignSelf: 'center', left: 15}}
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
    justifyContent: 'center',
    gap: 5,
  },
});
