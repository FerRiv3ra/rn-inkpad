import {useState} from 'react';
import {StarRating} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const StarRatingDemo = () => {
  const [value, setValue] = useState(3);
  const color =
    value <= 2 ? palette.red : value <= 4 ? palette.gold : palette.green;

  return (
    <>
      <Section title="Interactive with reviews">
        <StarRating
          defaultRating={3}
          iconColor={color}
          onChange={setValue}
          reviews={[
            'Terrible',
            'Poor',
            'Fair',
            'Good',
            'Excellent',
            'Fabulous',
          ]}
          size={40}
          textColor={color}
          textSize={28}
        />
        <Result label={`Rating: ${value}`} />
      </Section>
      <Section title="Just rating, read only">
        <StarRating defaultRating={4} justRating readOnly size={28} />
      </Section>
    </>
  );
};
