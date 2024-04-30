import React, {useState} from 'react';
import {View} from 'react-native';
import {CardImage, DrawerNavigation} from './src';

import Logo from './src/assets/rn-logo.png';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [value, setValue] = useState(0);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#EEEEEE',
      }}>
      <View style={{paddingHorizontal: 15}}>
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
          loadTime={1500}
        />
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
        </ScrollView> */}

        {/* <FloatingActionButton
        // onPress={() => console.log('Hola mundo')}
        // align="top-right"
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
      <Rating icon="heart" color="red" size={45} total={5} rating={3.5} /> */}
        {/* <Button
        text="Press!"
        icon="save"
        rounded
        onPress={() => console.log('Press')}
        // buttonType="outline"
        // buttonColor="red"
        // color="red"
      /> */}
        {/* <LongPressButton
        text="Press and Hold"
        icon="add-circle-outline"
        onFinish={() => console.log('Press')}
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
        {/* <CheckBox title="Checkbox"  /> */}
        {/* <Input
        title="Search"
        icon="airplane"
        type="outlined"
        borderRadius={10}
        // iconColor="red"
        borderColor="green"
        onPress={() => console.log('Press')}
        onChangeText={value => console.log(value)}
      /> */}
        {/* <ProgressBar
        value={60}
        rounded
        // progressColor="red"
        // textColor="white"
        showPercent
      /> */}
        {/* <Switch
        text="Texto del Switch"
        fullWidth
        justifyContent="space-between"
      /> */}
        {/* <Text style={{fontSize: 20}}>
        Information{' '}
        <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget, fermentum ac tellus. Duis neque lorem, fermentum at suscipit ac, imperdiet vel sapien.">
        <Icon name="information-circle" size={20} />
        </Tooltip>
      </Text> */}
        {/* <Toast
        visible={isVisible}
        text="Toast information"
        // duration={5000}
        icon="information-circle-outline"
        onHide={setIsVisible}
        />
        <Pressable onPress={() => setIsVisible(true)}>
        <Text>Show toast</Text>
      </Pressable> */}
        {/* <SlideAction
        icon="lock-open"
        iconOnCompleted="lock-closed"
        text="Slide to confirm"
        textOnCompleted="Confirmed"
      /> */}
        {/* <Slider value={value} onChange={setValue} />

<Text style={{marginTop: 20, fontSize: 18, fontWeight: '600'}}>
{value}
</Text> */}
        {/* <ActionSheet
        actions={[
          {
            text: 'Change profile picture',
            icon: 'ear',
            onPress: () => console.log('Change profile picture'),
          },
          {
            text: 'View profile picture',
            icon: 'eye',
            onPress: () => console.log('View profile picture'),
          },
          {
            text: 'View status',
            icon: 'bandage',
            onPress: () => console.log('View status'),
          },
        ]}
        theme={{appearance: 'dark', theme: 'material'}}
        showIconOnIos
        setVisible={setIsVisible}
        showCancelButton
        showCloseButton
        subTitle="Select any action below to proceed"
        title="Select an action"
        visible={isVisible}
      /> */}
        {/* <AlertContainer theme="android" />
      <Button
      text="Show"
      style={{marginTop: 10}}
      onPress={() =>
        Alert.alert({
          title: 'Error',
          description: 'Error message!',
          icon: 'airplane',
          // showCancelButton: true,
        })
      }
    /> */}
      </View>
      {/* <FloatingActionCard
        title="Maldivas hotel"
        icon="star"
        description="Lorem ipsum dolor"
        image={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/arrival-jetty-dusit-thani-maldives-royalty-free-image-1655669825.jpg?crop=0.668xw:1.00xh;0.0850xw,0&resize=980:*',
        }}
        rating={5}
        onPress={() => console.log('Press')}
      /> */}
      {/* <BottomTabNavigation
        selectedIndex={0}
        highlightedIconColor="#FFF"
        values={[
          {icon: 'home', text: 'Home', onPress: () => console.log('Home')},
          {
            icon: 'search',
            text: 'Search',
            onPress: () => console.log('Search'),
          },
          {
            icon: 'add',
            text: 'Add',
            highlighted: true,
            onPress: () => console.log('Add'),
          },
          {
            icon: 'notifications',
            text: 'Alerts',
            onPress: () => console.log('Alerts'),
          },
          {
            icon: 'cog',
            text: 'Settings',
            onPress: () => console.log('Settings'),
          },
        ]}
      /> */}

      <DrawerNavigation
        backgroundColor="#BEF0F3"
        image={Logo}
        items={[
          {icon: 'home', text: 'Home', onPress: () => console.log('Home')},
          {
            text: 'User',
            icon: 'person',
            items: [
              {
                icon: 'person',
                text: 'Profile',
                onPress: () => console.log('Profile'),
              },
              {
                icon: 'time',
                text: 'History',
                onPress: () => console.log('History'),
              },
              {
                icon: 'star',
                text: 'Starred',
                onPress: () => console.log('Starred'),
              },
            ],
          },
          {
            icon: 'cog',
            text: 'Settings',
            onPress: () => console.log('Settings'),
          },
        ]}
      />
    </View>
  );
};
