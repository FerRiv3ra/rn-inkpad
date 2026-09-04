import {useState} from 'react';
import {Coffee, Info} from 'lucide-react-native';
import {Button, Toast} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const ToastDemo = () => {
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);

  return (
    <Section title="Top and bottom">
      <Toast
        visible={top}
        text="Toast top information"
        backgroundColor={palette.red}
        fontSize={16}
        icon={Info}
        setVisible={setTop}
      />
      <Toast
        visible={bottom}
        text="Toast bottom information"
        backgroundColor={palette.navy}
        fontSize={16}
        position="bottom"
        icon={Coffee}
        setVisible={setBottom}
      />
      <Button rounded full text="Show toast top" onPress={() => setTop(true)} />
      <Button
        rounded
        full
        style={{marginTop: 12}}
        buttonColor={palette.navy}
        text="Show toast bottom"
        onPress={() => setBottom(true)}
      />
    </Section>
  );
};
