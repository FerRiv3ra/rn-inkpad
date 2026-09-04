import {useEffect, useState} from 'react';
import {
  Platform,
  Switch as RNSwitch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {warnDeprecated} from '../../helpers/deprecate';
import type {SwitchProps} from '../../types';

export const Switch = ({
  backgroundColor,
  backgrounColor,
  border,
  borderColor,
  borderWidth = 2,
  isOn = false,
  fullWidth,
  justifyContent,
  onChange,
  textStyle,
  text,
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const isWeb = Platform.OS === 'web';

  if (backgrounColor !== undefined) {
    warnDeprecated(
      'Switch: `backgrounColor` is deprecated, use `backgroundColor` instead.',
    );
  }
  const onColor = backgroundColor ?? backgrounColor ?? '#1DFF56';

  // Keep the internal state in sync when used as a controlled component.
  useEffect(() => {
    setIsEnabled(isOn);
  }, [isOn]);

  const toggleSwitch = () => {
    const next = !isEnabled;
    setIsEnabled(next);
    onChange?.(next);
  };

  return (
    <View
      style={[
        styles.row,
        {width: fullWidth ? '100%' : 'auto', justifyContent},
      ]}>
      {!!text && <Text style={textStyle}>{text}</Text>}

      {isWeb ? (
        <TouchableOpacity
          accessibilityRole="switch"
          accessibilityState={{checked: isEnabled}}
          onPress={toggleSwitch}
          style={[
            styles.switchContainer,
            {borderWidth: border ? borderWidth : 0, borderColor},
            {backgroundColor: isEnabled ? onColor : '#D9D9DB'},
          ]}>
          <View
            style={[
              styles.thumb,
              {alignSelf: isEnabled ? 'flex-end' : 'flex-start'},
            ]}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            borderWidth: border ? borderWidth : 0,
            borderColor,
            borderRadius: 16,
          }}>
          <RNSwitch
            trackColor={{false: '#D9D9DB', true: onColor}}
            thumbColor={Platform.OS === 'android' ? onColor : undefined}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 5,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
});
