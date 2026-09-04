import {useState} from 'react';
import {Slider} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const SliderDemo = () => {
  const [value, setValue] = useState(30);

  return (
    <>
      <Section title="Basic">
        <Slider value={value} onChange={setValue} />
        <Result label={`Value: ${Math.round(value)}`} />
      </Section>
      <Section title="Custom thumb and track">
        <Slider
          thumbStyles={{icon: 'analytics', iconColor: palette.red}}
          trackStyles={{
            height: 10,
            borderRadius: 5,
            trackCompletedColor: palette.red,
          }}
          minValue={0}
          maxValue={10}
          value={5}
        />
      </Section>
    </>
  );
};
