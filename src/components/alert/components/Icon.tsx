import React from 'react';
import {View} from 'react-native';
import {Icon as CustomIcon} from '../../';
import {IconName} from '../../../types';

type Props = {
  icon: IconName;
  iconColor?: string;
  ios?: boolean;
};

export const Icon = ({icon, iconColor, ios}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: iconColor ? iconColor : ios ? '#4F87FF' : '#00d982',
        borderRadius: 50,
        borderWidth: 2,
        height: 30,
        marginLeft: ios ? 5 : 0,
        justifyContent: 'center',
        position: ios ? 'absolute' : 'relative',
        width: 30,
      }}>
      <CustomIcon
        name={icon}
        color={iconColor ? iconColor : ios ? '#4F87FF' : '#00d982'}
      />
    </View>
  );
};
