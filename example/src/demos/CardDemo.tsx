import {BookMarked} from 'lucide-react-native';
import {Card} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellesque eget, fermentum ac tellus.';

export const CardDemo = () => (
  <>
    <Section title="Basic">
      <Card
        title="Card"
        icon={BookMarked}
        description={lorem}
        buttons={[
          {text: 'Cancel', onPress: () => {}},
          {text: 'Ok', onPress: () => {}},
        ]}
      />
    </Section>
    <Section title="Themed with shadow">
      <Card
        title="Themed card"
        icon={BookMarked}
        description={lorem}
        buttons={[
          {text: 'Cancel', onPress: () => {}},
          {text: 'Ok', onPress: () => {}},
        ]}
        theme={{
          backgroundColor: '#EEE',
          iconSize: 30,
          themeColor: palette.red,
          titleColor: palette.navy,
          titleSize: 18,
          shadow: true,
        }}
      />
    </Section>
  </>
);
