import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigation} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const tabs = ['Home', 'Search', 'Add', 'Alerts', 'Settings'];

export const BottomTabNavigationDemo = () => {
  const [tab, setTab] = useState(0);

  return (
    <Section title="Highlighted center tab" description="Tap a tab.">
      <View style={styles.stage}>
        <View style={styles.content}>
          <Text style={styles.screen}>{tabs[tab]}</Text>
        </View>
        <BottomTabNavigation
          selectedIndex={0}
          highlightedIconColor="#FFF"
          values={[
            {icon: 'home', text: 'Home', onPress: () => setTab(0)},
            {icon: 'search', text: 'Search', onPress: () => setTab(1)},
            {
              icon: 'add',
              text: 'Add',
              highlighted: true,
              onPress: () => setTab(2),
            },
            {icon: 'notifications', text: 'Alerts', onPress: () => setTab(3)},
            {icon: 'cog', text: 'Settings', onPress: () => setTab(4)},
          ]}
        />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  stage: {
    height: 320,
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
