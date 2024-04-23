import React from 'react';
import {Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ActionButton} from './ActionButton';

type Props = {
  cancelText?: string;
  dark?: boolean;
  showCancelButton?: boolean;
  subTitle?: string;
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const ActionSheet = ({
  cancelText,
  dark,
  showCancelButton,
  subTitle,
  title,
  visible,
  setVisible,
}: Props) => (
  <Modal visible={visible} transparent>
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        {title && (
          <Text
            style={{
              ...styles.title,
              color: '#FFFFFF',
              marginBottom: !!subTitle ? 0 : 10,
            }}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text style={{...styles.subTitle, color: '#FFFFFF'}}>{subTitle}</Text>
        )}
        <SafeAreaView>
          {showCancelButton && (
            <ActionButton
              text={cancelText ?? 'Cancel'}
              onPress={() => setVisible(false)}
              backgroundColor={dark ? '#242625' : '#FFFFFF'}
            />
          )}
        </SafeAreaView>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  controlsContainer: {
    backgroundColor: '#171717',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: '3%',
    paddingTop: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 13,
  },
});
