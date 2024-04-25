import {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {
  notifySubscribers,
  subscribeToModalChange,
} from '../helpers/subscribers';
import {AlertData, PromptData} from '../types/alertTypes';

export const useAlertContainer = () => {
  const [prompt, setPrompt] = useState<AlertData | PromptData>();
  const [isAlert, setIsAlert] = useState(false);
  const [textInput, setTextInput] = useState('');

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    subscribeToModalChange((data, alert) => {
      setPrompt(data);
      setIsAlert(!!alert);
      setTextInput('');
    });
  }, [prompt]);

  useEffect(() => {
    if (!isAlert) {
      inputRef.current?.focus();
    }
  }, [prompt]);

  const handlePress = (cancel = false, callback?: () => void) => {
    if (!isAlert) {
      notifySubscribers(
        cancel
          ? undefined
          : {
              title: textInput,
            },
      );
    } else {
      if (!!callback) {
        callback();
        notifySubscribers(undefined);
      } else {
        notifySubscribers(cancel ? undefined : prompt);
      }
    }
  };

  return {
    prompt,
    isAlert,
    setTextInput,
    handlePress,
    inputRef,
  };
};
