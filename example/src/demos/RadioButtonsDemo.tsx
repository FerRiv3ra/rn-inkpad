import {useState} from 'react';
import {Circle, CircleCheck} from 'lucide-react-native';
import {RadioButtons} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

const values = [
  {text: 'Option 1', value: 1},
  {text: 'Option 2', value: 2},
  {text: 'Option 3', value: 3},
];

export const RadioButtonsDemo = () => {
  const [selected, setSelected] = useState<string | number>('none');

  return (
    <>
      <Section title="Vertical with border">
        <RadioButtons border values={values} onChange={setSelected} />
        <Result label={`Selected: ${selected}`} />
      </Section>
      <Section title="Horizontal, icon at the bottom">
        <RadioButtons
          iconPosition="bottom"
          orientation="horizontal"
          defaultChecked={1}
          gapHorizontal={40}
          iconColor={palette.red}
          values={values}
        />
      </Section>
      <Section title="Full width, icon on the right">
        <RadioButtons
          iconPosition="right"
          defaultChecked={0}
          fullWidth
          iconColor={palette.green}
          borderColor={palette.green}
          border
          values={values}
        />
      </Section>
      <Section title="Custom icons (lucide)">
        <RadioButtons
          checkedIcon={CircleCheck}
          unCheckedIcon={Circle}
          iconColor={palette.blue}
          defaultChecked={0}
          values={values}
        />
      </Section>
      <Section title="Disabled">
        <RadioButtons disabled border iconSize={30} values={values} />
      </Section>
    </>
  );
};
