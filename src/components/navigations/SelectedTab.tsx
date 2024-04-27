import React from 'react';
import {View} from 'react-native';

type Props = {
  height?: number;
  color?: string;
};

export const SelectedTab = ({height = 5, color = '#FF0000'}: Props) => {
  return (
    <View
      style={{
        borderTopColor: color,
        borderTopWidth: height,
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        top: 0,
      }}
    />
  );
};
