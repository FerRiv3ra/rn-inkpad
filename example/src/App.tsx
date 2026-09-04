import {useMemo, useState} from 'react';
import {
  Pressable,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Icon} from 'rn-inkpad';

import type {Demo} from './demos/registry';
import {demoCount, demoSections} from './demos/registry';
import {palette} from './ui/theme';

/**
 * Demo gallery: a list of every component; tapping one opens its demo screen.
 * Navigation is plain state so the example has no extra dependencies.
 */
const Gallery = () => {
  const insets = useSafeAreaInsets();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selected = useMemo(
    () =>
      demoSections
        .flatMap(section => section.data)
        .find(demo => demo.key === selectedKey) ?? null,
    [selectedKey],
  );

  return (
    <View style={[styles.root, {paddingTop: insets.top}]}>
      <StatusBar barStyle="dark-content" />
      {selected ? (
        <DemoScreen demo={selected} onBack={() => setSelectedKey(null)} />
      ) : (
        <DemoList onSelect={demo => setSelectedKey(demo.key)} />
      )}
    </View>
  );
};

type ListProps = {onSelect: (demo: Demo) => void};

const DemoList = ({onSelect}: ListProps) => (
  <SectionList
    sections={demoSections}
    keyExtractor={item => item.key}
    stickySectionHeadersEnabled={false}
    contentContainerStyle={styles.listContent}
    ListHeaderComponent={
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>RN Inkpad</Text>
        <Text style={styles.heroSubtitle}>{demoCount} components</Text>
      </View>
    }
    renderSectionHeader={({section}) => (
      <Text style={styles.sectionTitle}>{section.title}</Text>
    )}
    renderItem={({item}) => (
      <Pressable
        onPress={() => onSelect(item)}
        style={({pressed}) => [styles.item, pressed && styles.itemPressed]}>
        <View style={styles.itemIcon}>
          <Icon name={item.icon} size={22} color={palette.navy} />
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
        <Icon name="chevron-forward" size={18} color={palette.muted} />
      </Pressable>
    )}
  />
);

type ScreenProps = {demo: Demo; onBack: () => void};

const DemoScreen = ({demo, onBack}: ScreenProps) => {
  const insets = useSafeAreaInsets();
  const {Component} = demo;

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={12} style={styles.back}>
          <Icon name="chevron-back" size={24} color={palette.navy} />
          <Text style={styles.backText}>Components</Text>
        </Pressable>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {demo.title}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.screenContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        keyboardShouldPersistTaps="handled">
        <Component />
      </ScrollView>
    </View>
  );
};

export const App = () => (
  <SafeAreaProvider>
    <Gallery />
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: palette.background,
  },
  hero: {
    paddingHorizontal: 4,
    paddingTop: 16,
    paddingBottom: 8,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: palette.navy,
  },
  heroSubtitle: {
    marginTop: 2,
    fontSize: 14,
    color: palette.muted,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 4,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    color: palette.muted,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
  },
  itemPressed: {
    opacity: 0.7,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: palette.text,
  },
  itemDescription: {
    marginTop: 2,
    fontSize: 13,
    color: palette.muted,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: palette.card,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.border,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 120,
  },
  backText: {
    fontSize: 16,
    color: palette.navy,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: palette.text,
    marginRight: 120,
  },
  screenContent: {
    padding: 16,
  },
});
