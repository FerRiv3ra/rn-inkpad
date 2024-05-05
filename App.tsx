import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from './src';

export const App = () => {
  const [checked, setIsChecked] = useState(false);
  // const [value, setValue] = useState(0);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        // paddingHorizontal: 15,
        // backgroundColor: '#eef2ff',
      }}>
      {/* <View style={{paddingHorizontal: 15}}> */}
      {/* <Card
        buttons={[
          {text: 'Cancel', onPress: () => {}},
          {text: 'Ok', onPress: () => {}},
        ]}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget, fermentum ac tellus. Duis neque lorem, fermentum at suscipit ac, imperdiet vel sapien.'
        }
        icon={'book-sharp'}
        title={'Card'}
        theme={{
          backgroundColor: '#EEE',
          iconSize: 30,
          themeColor: '#DB504A',
          titleColor: '#21295C',
          titleSize: 18,
          shadow: true,
        }}
      /> */}
      {/* <CardImage
        source={{
          uri: 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1',
        }}
        text="Landscape"
        loadTime={1500}
        theme={{
          backgroundColor: '#EEEEEE',
          fontSize: 16,
          fontColor: '#DB504A',
          fontWeight: '700',
          shadow: true,
          radius: 0,
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
        icon="apps"
        backgroundColor="#DB504A"
        onPress={() => console.log('Hola mundo')}
      />
      <FloatingActionButton
        align="bottom-left"
        backgroundColor="#21295C"
        actions={[
          {
            icon: 'alert',
            text: 'Alert',
            onPress: () => console.log('Alert'),
          },
          {
            icon: 'warning',
            onPress: () => console.log('Warning'),
          },
          {
            icon: 'bag-add',
            text: 'Shopping',
            onPress: () => console.log('Shopping'),
          },
        ]}
      />
      <CircleAvatar size={80} defaultText="JHF" fontSize={28} />
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
          text="Green solid button"
          icon="alert-circle"
          color="#000"
          onPress={() => console.log('Press')}
          buttonColor="#7EE081"
          style={{marginBottom: 10}}
        />
        <Button
          text="Clear right icon button"
          icon="save"
          onPress={() => console.log('Press')}
          buttonType="clear"
          iconPosition="right"
          color="#576DEC"
          style={{marginBottom: 10}}
        />
        <Button
          text="Purple "
          icon="save"
          loading
          onPress={() => console.log('Press')}
          // buttonType="outline"
          buttonColor="#C3F3C0"
          style={{marginBottom: 10}}
          // color="red"
        />
        <Button
          text="Blue outline rounded button"
          icon="airplane"
          onPress={() => console.log('Press')}
          buttonType="outline"
          buttonColor="#576DEC"
          rounded
          style={{marginBottom: 10}}
        /> */}
      {/* <Button
          text="Clear right icon button"
          icon="save"
          full
          onPress={() => console.log('Press')}
          iconPosition="right"
          style={{marginBottom: 10}}
        /> */}
      {/* <LongPressButton
        backgroundColor="#21295C"
        text="Press and Hold"
        borderRadius={10}
        progressColor="#60a5fa"
        icon="add-circle-outline"
        onFinish={() => {
          setIsExecuted(true);
          setTimeout(() => {
            setIsExecuted(false);
          }, 1500);
        }}
      />
      <LongPressButton
        backgroundColor="#DB504A"
        text="Press and Hold"
        progressColor="rgba(0,0,0,0.5)"
        iconPosition="right"
        behavior="center-to-ends"
        icon="add-circle-outline"
        style={{marginTop: 10}}
        onFinish={() => {
          setIsExecuted(true);
          setTimeout(() => {
            setIsExecuted(false);
          }, 1500);
        }}
      />
      <LongPressButton
        backgroundColor="#7EE081"
        text="Press and Hold"
        progressColor="#C3F3C0"
        iconPosition="right"
        textColor="#000"
        borderRadius={0}
        behavior="right-to-left"
        icon="add-circle-outline"
        style={{marginTop: 10}}
        onFinish={() => {
          setIsExecuted(true);
          setTimeout(() => {
            setIsExecuted(false);
          }, 1500);
        }}
      />

      <Text style={{marginTop: 15}}>
        {isExecuted ? 'Executed' : 'Long press to execute!'}
      </Text> */}
      {/* <RadioButtons
        // iconPosition="right"
        // orientation="horizontal"
        // defaultChecked={0}
        // fullWidth
        border
        // disabled
        // onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        iconPosition="bottom"
        orientation="horizontal"
        defaultChecked={1}
        gapHorizontal={80}
        iconColor="#DB504A"
        // disabled
        // onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        iconPosition="right"
        // orientation="horizontal"
        defaultChecked={0}
        fullWidth
        iconColor="#7EE081"
        borderColor="#7EE081"
        border
        // disabled
        // onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        iconPosition="top"
        orientation="horizontal"
        defaultChecked={0}
        border
        borderColor="#DB504A"
        iconColor="#DB504A"
        // disabled
        // onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        disabled
        border
        iconSize={30}
        // onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      /> */}
      {/* <CheckBox
        checked={checked}
        iconColor={'#DB504A'}
        iconSize={25}
        textStyle={{fontSize: 20}}
        onChange={setIsChecked}
        title={'Item 1'}
      />

      <Text style={{marginTop: 10, fontWeight: '700'}}>
        {checked ? 'Checked' : 'Unchecked'}
      </Text> */}
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
          // actions={[
          //   {
          //     text: 'Change profile picture',
          //     icon: 'ear',
          //     onPress: () => console.log('Change profile picture'),
          //   },
          //   {
          //     text: 'View profile picture',
          //     icon: 'eye',
          //     onPress: () => console.log('View profile picture'),
          //   },
          //   {
          //     text: 'View status',
          //     icon: 'bandage',
          //     onPress: () => console.log('View status'),
          //   },
          // ]}
          // theme={{theme: 'material'}}
          // showIconOnIos
          setVisible={setIsVisible}
          // showCancelButton
          // showCloseButton
          // description="Select any action below to proceed"
          // title="Select an action"
          visible={isVisible}
        /> */}
      {/* <AlertContainer theme="android" /> */}
      {/* <Button /> */}
      {/* </View> */}
      {/* <Image
        source={{
          uri: isExecuted
            ? 'https://static.vecteezy.com/system/resources/previews/030/465/953/large_2x/idyllic-retreat-tropical-beach-palm-tree-crystal-sea-nature-s-paradise-on-an-island-vertical-mobile-wallpaper-ai-generated-free-photo.jpg'
            : 'https://i.ebayimg.com/images/g/WzwAAOSwA39hFZ5W/s-l1200.webp',
        }}
        style={{width: '100%', height: '100%'}}
      />
      <FloatingActionCard
        title="Maldives hotel"
        icon="star"
        description="Lorem ipsum dolor"
        image={{
          uri: 'https://st3.depositphotos.com/1875497/12876/i/950/depositphotos_128766962-stock-photo-beautiful-tropical-maldives-resort-hotel.jpg',
        }}
        rating={5}
        onPress={() => setIsExecuted(!isExecuted)}
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

      {/* <DrawerNavigation
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
      /> */}
      <Icon name="airplane" size={28} />
    </View>
  );
};
