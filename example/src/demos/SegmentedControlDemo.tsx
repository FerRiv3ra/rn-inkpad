import {useState} from 'react';
import {SegmentedControl} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

const values = [
  {key: 'Day', value: 'day'},
  {key: 'Week', value: 'week'},
  {key: 'Month', value: 'month'},
];

export const SegmentedControlDemo = () => {
  const [value, setValue] = useState('day');

  return (
    <>
      <Section title="Basic">
        <SegmentedControl values={values} onChange={setValue} />
        <Result label={`Value: ${value}`} />
      </Section>
      <Section title="Custom colors and label">
        <SegmentedControl
          label="Period"
          values={values}
          selectedIndex={1}
          backgroundColor={palette.mint}
          tintColor={palette.navy}
          textColor={palette.navy}
          selectedTextColor="#FFF"
          onChange={() => {}}
        />
      </Section>
    </>
  );
};
