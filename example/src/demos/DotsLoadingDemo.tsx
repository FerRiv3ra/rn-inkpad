import {DotsLoading} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const DotsLoadingDemo = () => (
  <>
    <Section title="Default">
      <DotsLoading />
    </Section>
    <Section title="Custom size, color, count and speed" row>
      <DotsLoading size={6} color={palette.red} dotCount={5} speed={400} />
      <DotsLoading size={14} color={palette.navy} dotCount={3} speed={900} />
    </Section>
  </>
);
