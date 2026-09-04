import {CreditCard, PackageCheck, Truck, User} from 'lucide-react-native';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Stepper} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const steps = [
  {label: 'Account', icon: User},
  {label: 'Payment', icon: CreditCard},
  {label: 'Shipping', icon: Truck},
  {label: 'Done', icon: PackageCheck},
];

export const StepperDemo = () => {
  const [current, setCurrent] = useState(1);

  return (
    <>
      <Section title="Horizontal with icons">
        <Stepper steps={steps} current={current} onStepPress={setCurrent} />
        <View style={styles.actions}>
          <Button
            text="Back"
            buttonType="outline"
            buttonColor={palette.navy}
            disabled={current === 0}
            onPress={() => setCurrent(current - 1)}
          />
          <Button
            text="Next"
            buttonColor={palette.navy}
            disabled={current === steps.length - 1}
            onPress={() => setCurrent(current + 1)}
          />
        </View>
      </Section>
      <Section title="Vertical with numbers">
        <Stepper
          orientation="vertical"
          steps={[
            {label: 'Create project'},
            {label: 'Add components'},
            {label: 'Ship it'},
          ]}
          current={1}
          activeColor={palette.red}
        />
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});
