import {useState} from 'react';
import {LongPressButton} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const LongPressButtonDemo = () => {
  const [executed, setExecuted] = useState(false);

  const onFinish = () => {
    setExecuted(true);
    setTimeout(() => setExecuted(false), 1500);
  };

  return (
    <>
      <Section title="Left to right (default)">
        <LongPressButton
          backgroundColor={palette.navy}
          text="Press and hold"
          borderRadius={10}
          progressColor="#60a5fa"
          icon="add-circle-outline"
          onFinish={onFinish}
        />
      </Section>
      <Section title="Center to ends">
        <LongPressButton
          backgroundColor={palette.red}
          text="Press and hold"
          progressColor="rgba(0,0,0,0.5)"
          iconPosition="right"
          behavior="center-to-ends"
          icon="add-circle-outline"
          onFinish={onFinish}
        />
      </Section>
      <Section title="Right to left, square">
        <LongPressButton
          backgroundColor={palette.green}
          text="Press and hold"
          progressColor={palette.mint}
          iconPosition="right"
          textColor="#000"
          borderRadius={0}
          behavior="right-to-left"
          icon="add-circle-outline"
          onFinish={onFinish}
        />
        <Result label={executed ? 'Executed!' : 'Long press to execute'} />
      </Section>
    </>
  );
};
