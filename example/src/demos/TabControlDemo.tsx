import {StyleSheet, Text, View} from 'react-native';
import {TabControl} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const Tab = ({label}: {label: string}) => (
  <View style={styles.tab}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const First = () => <Tab label="First tab content" />;
const Second = () => <Tab label="Second tab content" />;
const Third = () => <Tab label="Third tab content" />;

export const TabControlDemo = () => (
  <>
    <Section title="Basic">
      <TabControl
        values={[
          {key: 'First', renderItem: First},
          {key: 'Second', renderItem: Second},
          {key: 'Third', renderItem: Third},
        ]}
      />
    </Section>
    <Section title="Custom colors">
      <TabControl
        label="Tabs"
        selectedIndex={1}
        backgroundTabColor={palette.mint}
        tabTintColor={palette.navy}
        textColor={palette.navy}
        selectedTextColor="#FFF"
        values={[
          {key: 'First', renderItem: First},
          {key: 'Second', renderItem: Second},
        ]}
      />
    </Section>
  </>
);

const styles = StyleSheet.create({
  tab: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    color: palette.navy,
  },
});
