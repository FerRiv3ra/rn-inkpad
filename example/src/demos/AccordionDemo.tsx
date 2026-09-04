import {CircleHelp, Shield, Wallet} from 'lucide-react-native';
import {useState} from 'react';
import {Text} from 'react-native';
import {Accordion, Button} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

const faq = [
  {
    title: 'What is rn-inkpad?',
    icon: CircleHelp,
    content:
      'A lightweight, dependency-free UI kit for React Native, iOS, Android and web.',
  },
  {
    title: 'Is it free?',
    icon: Wallet,
    content: 'Yes. MIT licensed.',
  },
  {
    title: 'Custom content',
    icon: Shield,
    content: (
      <>
        <Text style={{marginBottom: 8}}>Any React node works here.</Text>
        <Button text="Action inside" buttonColor={palette.red} />
      </>
    ),
  },
  {title: 'Disabled item', content: 'Never shown', disabled: true},
];

export const AccordionDemo = () => {
  const [open, setOpen] = useState<number[]>([0]);

  return (
    <>
      <Section title="Single open (uncontrolled)">
        <Accordion items={faq} defaultExpanded={[0]} />
      </Section>
      <Section title="Multiple open (controlled)">
        <Accordion
          items={faq.slice(0, 3)}
          multiple
          expanded={open}
          onChange={setOpen}
          color={palette.navy}
        />
        <Result
          label={`Open: ${open.length ? open.map(i => i + 1).join(', ') : 'none'}`}
        />
      </Section>
    </>
  );
};
