import React from 'react';
import {View} from 'react-native';
import {Rating, RbnbRating} from './src';

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
      {/* <ScrollView>
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
        onPress={() => console.log('Hola mundo')}
        actions={[
          {
            icon: 'alert',
            text: 'Alerta',
            onPress: () => console.log('Alert'),
          },
          {
            icon: 'warning',
            text: 'Advertencia',
            onPress: () => console.log('Warning'),
          },
          {
            icon: 'bag-add',
            text: 'Comprar',
            onPress: () => console.log('Help'),
          },
        ]}
      /> */}
      {/* <CircleAvatar size={70} defaultText="JH" fontSize={28} />
      <View style={{height: 30}} />
      <CircleAvatar size={70} image={Avatar} /> */}
      <RbnbRating
        icon="heart"
        iconColor="red"
        // justRating
        // reviews={['Terrible', 'Mehh', 'OK', 'Good', 'Very']}
        defaultRating={3}
        size={40}
        textColor="red"
        textSize={35}
        total={5}
      />
      <Rating icon="heart" color="red" size={45} total={5} rating={1.5} />
    </View>
  );
};
