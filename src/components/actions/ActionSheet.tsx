import {Modal, Pressable, SafeAreaView, Text} from 'react-native';
import {useActionSheet} from '../../hooks';
import {actionSheetStyles} from '../../theme/actionSheetStyles';
import type {ActionSheetProps} from '../../types/actionSheetTypes';
import {Icon} from '../icon/Icon';
import {ActionSheetButton} from './ActionSheetButton';

export const ActionSheet = ({
  actions,
  cancelText,
  setVisible,
  showCancelButton,
  showIconOnIos,
  showCloseButton,
  description,
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
    theme,
  } = useActionSheet(actions?.length ?? 0, userTheme);

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => setVisible(false)}>
      <Pressable
        style={actionSheetStyles.container}
        onPress={() => setVisible(false)}
        accessibilityLabel="Close action sheet">
        <Pressable
          onPress={() => {}}
          style={[
            theme === 'cupertino'
              ? actionSheetStyles.controlsCupertino
              : actionSheetStyles.controlsMaterial,
            {backgroundColor},
          ]}>
          {showCloseButton && (
            <Pressable
              style={{
                ...actionSheetStyles.closeButton,
                backgroundColor: closeBackgroundColor,
              }}
              onPress={() => setVisible(false)}>
              <Icon name="close" color={closeIconColor} size={18} />
            </Pressable>
          )}
          {title && (
            <Text
              style={[
                {
                  ...actionSheetStyles.title,
                  color: textColor!,
                  marginBottom: description ? 0 : 10,
                },
                theme === 'cupertino'
                  ? actionSheetStyles.textCenter
                  : actionSheetStyles.textLeft,
              ]}>
              {title}
            </Text>
          )}
          {description && (
            <Text
              style={[
                {...actionSheetStyles.subTitle, color: textColor!},
                theme === 'cupertino'
                  ? actionSheetStyles.textCenter
                  : actionSheetStyles.textLeft,
              ]}>
              {description}
            </Text>
          )}
          <SafeAreaView>
            {actions &&
              actions.map((action, idx) => (
                <ActionSheetButton
                  action={action}
                  backgroundColor={buttonColor!}
                  radius={getBorder(idx)}
                  showIconOnIos={showIconOnIos}
                  textColor={textColor}
                  theme={theme!}
                  style={
                    idx !== 0
                      ? {
                          borderTopWidth: theme === 'cupertino' ? 1 : 0,
                          borderTopColor: separatorColor,
                        }
                      : undefined
                  }
                  key={idx}
                />
              ))}
            {(!actions || showCancelButton) && (
              <ActionSheetButton
                action={{
                  icon: 'close',
                  text: cancelText ?? 'Cancel',
                  onPress: () => setVisible(false),
                }}
                backgroundColor={buttonColor!}
                marginTop={theme === 'cupertino' ? 10 : 0}
                radius="all"
                showIconOnIos={showIconOnIos}
                textColor={textColor}
                theme={theme!}
              />
            )}
          </SafeAreaView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
