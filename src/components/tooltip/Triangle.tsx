import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  color?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  height?: number;
  style?: StyleProp<ViewStyle>;
  width?: number;
};

export const Triangle = ({
  color = 'rgba(0,0,0,0.7)',
  direction = 'up',
  height = 12,
  style,
  width = 20,
}: Props) => {
  const getBorderStyle = () => {
    switch (direction) {
      case 'up':
        return {
          borderBottomWidth: height,
          borderBottomColor: color,
          borderLeftWidth: width / 2,
          borderLeftColor: 'transparent',
          borderRightWidth: width / 2,
          borderRightColor: 'transparent',
        };
      case 'down':
        return {
          borderTopWidth: height,
          borderTopColor: color,
          borderLeftWidth: width / 2,
          borderLeftColor: 'transparent',
          borderRightWidth: width / 2,
          borderRightColor: 'transparent',
        };
      case 'left':
        return {
          borderRightWidth: height,
          borderRightColor: color,
          borderTopWidth: width / 2,
          borderTopColor: 'transparent',
          borderBottomWidth: width / 2,
          borderBottomColor: 'transparent',
        };
      case 'right':
        return {
          borderLeftWidth: height,
          borderLeftColor: color,
          borderTopWidth: width / 2,
          borderTopColor: 'transparent',
          borderBottomWidth: width / 2,
          borderBottomColor: 'transparent',
        };
    }
  };

  return <View style={[styles.triangle, getBorderStyle(), style]} />;
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
});
