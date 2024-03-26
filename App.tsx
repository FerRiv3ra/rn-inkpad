import React from 'react';
import {ScrollView, View} from 'react-native';
import {CardImage, FloatingActionButton} from './src';

export const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        // alignItems: 'center',
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
      <ScrollView>
        <CardImage
          source={{
            uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
          }}
          text="Landscape"
        />
        <CardImage
          source={{
            uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
          }}
          text="Landscape"
        />
        <CardImage
          source={{
            uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
          }}
          text="Landscape"
        />
      </ScrollView>
      <FloatingActionButton
        // padding={18}
        actions={[
          {icon: 'alert', onPress: () => console.log('Alert')},
          {icon: 'warning', onPress: () => console.log('Warning')},
          {icon: 'bag-add', onPress: () => console.log('Help')},
        ]}
      />
    </View>
  );
};
