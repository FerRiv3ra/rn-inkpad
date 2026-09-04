import {useState} from 'react';
import {CheckBox} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Section title="Basic">
        <CheckBox title="Item 1" />
      </Section>
      <Section title="Custom icon, color and size">
        <CheckBox
          checked={checked}
          iconColor={palette.red}
          iconSize={25}
          textStyle={{fontSize: 18}}
          onChange={setChecked}
          title="Accept terms and conditions"
        />
        <Result label={checked ? 'Checked' : 'Unchecked'} />
      </Section>
    </>
  );
};
