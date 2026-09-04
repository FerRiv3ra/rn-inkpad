import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {palette} from './theme';

type Props = PropsWithChildren<{
  title: string;
  description?: string;
  /** Renders children in a row with wrapping instead of a column. */
  row?: boolean;
}>;

/** Small titled block used by every demo screen. */
export const Section = ({title, description, row, children}: Props) => (
  <View style={styles.section}>
    <Text style={styles.title}>{title}</Text>
    {!!description && <Text style={styles.description}>{description}</Text>}
    <View style={[styles.body, row && styles.row]}>{children}</View>
  </View>
);

/** Plain label used to echo state (selected value, callbacks, etc). */
export const Result = ({label}: {label: string}) => (
  <Text style={styles.result}>{label}</Text>
);

const styles = StyleSheet.create({
  section: {
    backgroundColor: palette.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: palette.text,
  },
  description: {
    marginTop: 2,
    fontSize: 13,
    color: palette.muted,
  },
  body: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 12,
  },
  result: {
    marginTop: 12,
    textAlign: 'center',
    fontWeight: '600',
    color: palette.navy,
  },
});
