import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>
        <Icon name="woman" />
      </Text>
    </View>
  );
};
