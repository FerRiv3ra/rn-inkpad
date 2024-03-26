import React from 'react';
import {View} from 'react-native';
import {CardImage} from './src';

export const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 15,
      }}>
      {/* <Card
        buttons={[
          {text: 'Cancel', onPress: () => {}},
          {text: 'Ok', onPress: () => {}},
        ]}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget, fermentum ac tellus. Duis neque lorem, fermentum at suscipit ac, imperdiet vel sapien.'
        }
        icon={'key'}
        title={'Card'}
        theme={{
          themeColor: 'rgb(79, 70, 229)',
        }}
      /> */}
      <CardImage
        source={{
          uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
        }}
        text="Landscape"
      />
    </View>
  );
};
