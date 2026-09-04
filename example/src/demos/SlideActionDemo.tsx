import {useState} from 'react';
import {ArrowRight, Check, Lock, LockOpen} from 'lucide-react-native';
import {SlideAction} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const SlideActionDemo = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <Section title="Slide to confirm">
        <SlideAction
          icon={LockOpen}
          iconOnCompleted={Lock}
          text="Slide to confirm"
          textOnCompleted="Confirmed"
          onCompleted={() => setConfirmed(true)}
        />
        <Result label={confirmed ? 'Confirmed' : 'Not confirmed'} />
      </Section>
      <Section title="Custom colors, text at the ends">
        <SlideAction
          icon={ArrowRight}
          iconOnCompleted={Check}
          text="Slide"
          textOnCompleted="Done"
          textPosition="ends"
          tintColor={palette.mint}
          tintCompletedColor={palette.green}
          thumbColor={palette.navy}
          thumbCompletedColor={palette.navy}
          iconColor="#FFF"
          iconCompletedColor="#FFF"
        />
      </Section>
    </>
  );
};
