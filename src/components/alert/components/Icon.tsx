import {View} from 'react-native';
import {renderIcon} from '../../../helpers/renderIcon';
import type {IconProp} from '../../../types';

type Props = {
  icon: IconProp;
  iconColor?: string;
  ios?: boolean;
};

export const Icon = ({icon, iconColor, ios}: Props) => {
  const color = iconColor ?? (ios ? '#4F87FF' : '#00d982');

  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: color,
        borderRadius: 50,
        borderWidth: 2,
        height: 30,
        marginLeft: ios ? 5 : 0,
        justifyContent: 'center',
        position: ios ? 'absolute' : 'relative',
        width: 30,
      }}>
      {renderIcon(icon, {size: 18, color})}
    </View>
  );
};
