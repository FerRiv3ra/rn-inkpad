import {useState} from 'react';
import {Bandage, Camera, Eye} from 'lucide-react-native';
import {ActionSheet, Button} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const ActionSheetDemo = () => {
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState(false);
  const [last, setLast] = useState('No action yet');

  const open = (useMaterial: boolean) => {
    setMaterial(useMaterial);
    setVisible(true);
  };

  return (
    <Section title="Cupertino and material themes">
      <Button
        text="Open cupertino sheet"
        buttonColor={palette.navy}
        onPress={() => open(false)}
      />
      <Button
        text="Open material sheet"
        buttonColor={palette.red}
        style={{marginTop: 12}}
        onPress={() => open(true)}
      />
      <Result label={last} />
      <ActionSheet
        actions={[
          {
            text: 'Change profile picture',
            icon: Camera,
            onPress: () => setLast('Change profile picture'),
          },
          {
            text: 'View profile picture',
            icon: Eye,
            onPress: () => setLast('View profile picture'),
          },
          {
            text: 'View status',
            icon: Bandage,
            onPress: () => setLast('View status'),
          },
        ]}
        theme={material ? {theme: 'material'} : undefined}
        showIconOnIos
        showCancelButton
        showCloseButton
        description="Select any action below to proceed"
        title="Select an action"
        visible={visible}
        setVisible={setVisible}
      />
    </Section>
  );
};
