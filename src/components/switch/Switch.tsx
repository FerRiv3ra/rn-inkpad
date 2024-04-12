import React, {useState} from 'react';
import {Platform, Switch as RNSwitch, Text, View} from 'react-native';
import {SwitchProps} from '../../types';

export const Switch = ({
  backgrounColor = '#1DFF56',
  border,
  borderColor,
  isOn,
  fullWidth,
  justifyContent,
  onChange,
  textStyle,
  text,
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (!!onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <View
      style={{
        width: fullWidth ? '100%' : 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent,
      }}>
      {text && <Text style={textStyle}>{text}</Text>}

      <View
        style={{
          borderWidth: border ? 2 : 0,
          borderColor,
          borderRadius: 16,
        }}>
        <RNSwitch
          trackColor={{false: '#D9D9DB', true: backgrounColor}}
          thumbColor={Platform.OS === 'android' ? backgrounColor : ''}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
