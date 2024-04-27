import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {TabControlProps} from '../../types';

export const TabControl = ({
  values,
  selectedIndex = 0,
  label,
  labelStyle,
  backgroundTabColor = '#CCCCCC',
  tabTintColor = '#FFFFFF',
  textColor = '#000000',
  selectedTextColor = '#000000',
  containerStyle,
  style,
}: TabControlProps) => {
  const [selected, setSelected] = useState(selectedIndex);

  const handlePress = (idx: number) => {
    setSelected(idx);
  };

  const Component = values[selected].renderItem;

  return (
    <View style={style}>
      {!!label && <Text style={labelStyle}>{label}</Text>}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 2,
          paddingLeft: 1,
          paddingRight: 1,
          backgroundColor: backgroundTabColor,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 5,
        }}>
        {values.map((value, index) => (
          <Pressable
            onPress={() => handlePress(index)}
            key={index}
            style={{
              flex: 1,
              backgroundColor:
                selected === index ? tabTintColor : backgroundTabColor,
              paddingVertical: 5,
              borderTopLeftRadius: index === 0 ? 5 : 0,
              borderTopRightRadius: index === values.length - 1 ? 5 : 0,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                color: selected === index ? selectedTextColor : textColor,
                fontSize: 16,
              }}>
              {value.key}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={[{paddingBottom: 5}, containerStyle]}>
        <Component />
      </View>
    </View>
  );
};
