import {useEffect, useRef, useState} from 'react';
import type {ComponentRef} from 'react';
import type {TextInput} from 'react-native';
import {closeModal, subscribeToModalChange} from '../helpers/subscribers';
import type {AlertData, PromptData} from '../types/alertTypes';

export const useAlertContainer = () => {
  const [prompt, setPrompt] = useState<AlertData | PromptData>();
  const [isAlert, setIsAlert] = useState(false);
  const [textInput, setTextInput] = useState('');

  const inputRef = useRef<ComponentRef<typeof TextInput>>(null);

  useEffect(() => {
    // Subscribe once; the returned function removes the listener on unmount.
    return subscribeToModalChange((data, alert) => {
      setPrompt(data);
      setIsAlert(!!alert);
      setTextInput(alert ? '' : (data?.defaultValue ?? ''));
    });
  }, []);

  useEffect(() => {
    if (prompt && !isAlert) {
      inputRef.current?.focus();
    }
  }, [prompt, isAlert]);

  const handlePress = (cancel = false, callback?: () => void) => {
    if (!isAlert) {
      closeModal(cancel ? undefined : {title: textInput});
      return;
    }

    if (callback) {
      callback();
      closeModal(undefined);
    } else {
      closeModal(cancel ? undefined : prompt);
    }
  };

  return {
    prompt,
    isAlert,
    textInput,
    setTextInput,
    handlePress,
    inputRef,
  };
};
