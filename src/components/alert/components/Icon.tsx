import {StyleSheet, View} from 'react-native';
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
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[
        styles.container,
        ios ? styles.ios : styles.android,
        {borderColor: color},
      ]}>
      {renderIcon(icon, {size: 18, color})}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  ios: {marginLeft: 5, position: 'absolute'},
  android: {marginLeft: 0, position: 'relative'},
});
