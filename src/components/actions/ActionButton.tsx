import React, {useEffect, useState} from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {IconName} from '../../types';
import {Icon} from '../icon/Icon';

type Props = {
  backgroundColor: string;
  icon?: IconName;
  marginTop?: number;
  radius?: 'all' | 'top' | 'bottom';
  text: string;
  textColor?: string;
  onPress?: () => void;
};

export const ActionButton = ({
  backgroundColor,
  icon,
  marginTop,
  radius = 'all',
  text,
  onPress,
}: Props) => {
  const [edges, setEdges] = useState<StyleProp<ViewStyle>>({});

  useEffect(() => {
    setEdges(border());
  }, [radius]);

  const border = (): StyleProp<ViewStyle> => {
    if (radius === 'all') {
      return {
        borderRadius: 10,
      };
    } else if (radius === 'top') {
      return {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      };
    } else {
      return {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      };
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={[{...styles.buttonContainer, backgroundColor, marginTop}, edges]}>
      {icon && <Icon name={icon} />}
      <Text style={{color: '#FFFFFF', fontWeight: '500'}}>{text}</Text>
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
