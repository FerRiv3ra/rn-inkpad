import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useActionSheet} from '../../hooks';
import {ActionSheetProps} from '../../types/actionSheetTypes';
import {Icon} from '../icon/Icon';
import {ActionButton} from './ActionButton';

export const ActionSheet = ({
  actions,
  cancelText,
  setVisible,
  showCancelButton,
  showIconOnIos,
  showCloseButton,
  subTitle,
  theme: userTheme,
  title,
  visible,
}: ActionSheetProps) => {
  const {
    backgroundColor,
    buttonColor,
    closeBackgroundColor,
    closeIconColor,
    getBorder,
    separatorColor,
    textColor,
  } = useActionSheet(actions?.length ?? 0, userTheme);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={{...styles.controlsContainer, backgroundColor}}>
          {showCloseButton && (
            <Pressable
              style={{
                ...styles.closeButton,
                backgroundColor: closeBackgroundColor,
              }}
              onPress={() => setVisible(false)}>
              <Icon name="close" color={closeIconColor} size={18} />
            </Pressable>
          )}
          {title && (
            <Text
              style={{
                ...styles.title,
                color: textColor!,
                marginBottom: !!subTitle ? 0 : 10,
              }}>
              {title}
            </Text>
          )}
          {subTitle && (
            <Text style={{...styles.subTitle, color: textColor!}}>
              {subTitle}
            </Text>
          )}
          <SafeAreaView>
            {actions &&
              actions.map((action, idx) => (
                <ActionButton
                  action={action}
                  backgroundColor={buttonColor!}
                  radius={getBorder(idx)}
                  showIconOnIos={showIconOnIos}
                  textColor={textColor}
                  textStyle={action.textStyle}
                  style={
                    idx !== 0
                      ? {
                          borderTopWidth: 1,
                          borderTopColor: separatorColor,
                        }
                      : undefined
                  }
                  key={idx}
                />
              ))}
            {showCancelButton && (
              <ActionButton
                action={{
                  icon: 'close',
                  iconColor: textColor,
                  text: cancelText ?? 'Cancel',
                  onPress: () => setVisible(false),
                }}
                backgroundColor={buttonColor!}
                marginTop={10}
                radius="all"
                showIconOnIos={showIconOnIos}
                textColor={textColor}
              />
            )}
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  closeButton: {
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 5,
  },
  controlsContainer: {
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
