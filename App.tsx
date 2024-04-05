import React from 'react';
import {View} from 'react-native';
import {Input} from './src';

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
      {/* <CardImage
        source={{
          uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
        }}
        text="Landscape"
        loadTime={1500}
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
      {/* <CircleAvatar size={80} defaultText="JHF" fontSize={28} />
      <View style={{height: 30}} />
      <CircleAvatar size={80} image={Avatar} /> */}
      {/* <StarRating
        // iconColor="red"
        // justRating
        // reviews={['Terrible', 'Mehh', 'OK', 'Good', 'Very', 'Fabolous']}
        defaultRating={3}
        size={40}
        // textColor="red"
        textSize={35}
      />
      <Rating icon="heart" color="red" size={45} total={5} rating={1.5} /> */}
      {/* <Button
        text="Press!"
        icon="save"
        rounded
        buttonType="outline"
        // buttonColor="red"
        // color="red"
      /> */}
      {/* <RadioButtons
        // iconPosition="right"
        // orientation="horizontal"
        defaultChecked={0}
        // fullWidth
        // border
        // disabled
        onChange={value => console.log(value)}
        values={[
          {text: 'One', value: 1},
          {text: 'Two', value: 'two'},
        ]}
      /> */}
      {/* <CheckBox /> */}
      <Input
        title="Search"
        icon="airplane"
        iconColor="red"
        borderColor="green"
        onPress={() => console.log('Press')}
        onChangeText={value => console.log(value)}
      />
    </View>
  );
};
