import {Rating} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const RatingDemo = () => (
  <>
    <Section title="Stars (read only)">
      <Rating rating={3.5} />
    </Section>
    <Section title="Hearts, custom color and size">
      <Rating color={palette.red} icon="heart" rating={4.5} size={32} />
    </Section>
    <Section title="Ten items">
      <Rating rating={7} total={10} size={18} color={palette.blue} />
    </Section>
  </>
);
