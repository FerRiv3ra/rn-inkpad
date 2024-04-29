import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {Icon} from '..';
import Logo from '../../assets/rn-logo.png';

export const DrawerNavigation = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={{...styles.container, height}}>
      <SafeAreaView style={styles.content}>
        <View style={{...styles.drawer, width: width * 0.65}}>
          <Image
            source={Logo}
            style={{width: 100, height: 100, alignSelf: 'center'}}
          />
          <Pressable style={styles.item}>
            <Icon name="home" size={19} />
            <Text style={styles.itemText}>Home</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon name="person" size={19} />
            <Text style={styles.itemText}>Profile</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon name="star" size={19} />
            <Text style={styles.itemText}>Starred</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon name="time" size={19} />
            <Text style={styles.itemText}>Recent</Text>
          </Pressable>
          <Pressable style={styles.item}>
            <Icon name="cog" size={19} />
            <Text style={styles.itemText}>Settings</Text>
          </Pressable>
        </View>
        <Pressable style={{...styles.button, left: width * 0.65 + 15}}>
          <Icon name="menu" size={35} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
  },
  content: {
    backgroundColor: 'teal',
  },
  drawer: {
    height: '100%',
  },
  button: {
    position: 'absolute',
    top: 50,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
