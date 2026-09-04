import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigation} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const DrawerNavigationDemo = () => {
  const [screen, setScreen] = useState('Home');

  return (
    <Section title="Drawer with groups" description="Tap the menu icon.">
      <View style={styles.stage}>
        <View style={styles.content}>
          <Text style={styles.screen}>{screen}</Text>
        </View>
        <DrawerNavigation
          backgroundColor="#BEF0F3"
          image={require('../../assets/icon.png')}
          items={[
            {icon: 'home', text: 'Home', onPress: () => setScreen('Home')},
            {
              text: 'User',
              icon: 'person',
              items: [
                {
                  icon: 'person',
                  text: 'Profile',
                  onPress: () => setScreen('Profile'),
                },
                {
                  icon: 'time',
                  text: 'History',
                  onPress: () => setScreen('History'),
                },
                {
                  icon: 'star',
                  text: 'Starred',
                  onPress: () => setScreen('Starred'),
                },
              ],
            },
            {
              icon: 'cog',
              text: 'Settings',
              onPress: () => setScreen('Settings'),
            },
          ]}
        />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  stage: {
    height: 420,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: palette.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    fontSize: 22,
    fontWeight: '700',
    color: palette.navy,
  },
});
