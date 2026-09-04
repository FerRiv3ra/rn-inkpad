import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, CircleAvatar, Skeleton} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const SkeletonDemo = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Section title="Loading placeholder">
        <View style={styles.row}>
          {loading ? (
            <Skeleton circle height={48} />
          ) : (
            <CircleAvatar size={48} defaultText="FR" />
          )}
          <View style={styles.text}>
            {loading ? (
              <Skeleton lines={3} height={12} />
            ) : (
              <>
                <Text style={styles.title}>Fernando Rivera</Text>
                <Text style={styles.subtitle}>
                  Content loaded from the network.
                </Text>
              </>
            )}
          </View>
        </View>
        <Button
          text={loading ? 'Finish loading' : 'Load again'}
          style={styles.button}
          buttonColor={palette.navy}
          onPress={() => setLoading(!loading)}
        />
      </Section>
      <Section title="Shapes">
        <Skeleton height={120} radius={12} />
        <Skeleton
          width="50%"
          height={20}
          style={styles.spaced}
          color={palette.mint}
        />
        <Skeleton animated={false} height={20} style={styles.spaced} />
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  subtitle: {
    color: palette.muted,
  },
  button: {
    marginTop: 16,
  },
  spaced: {
    marginTop: 12,
  },
});
