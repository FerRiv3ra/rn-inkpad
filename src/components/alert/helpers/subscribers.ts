import {AlertData, PromptData} from '../types/alertTypes';

export const subscribers: ((
  data?: PromptData | AlertData,
  alert?: boolean,
) => void)[] = [];

export function notifySubscribers(
  data?: PromptData | AlertData,
  alert?: boolean,
) {
  subscribers.forEach(subscriber => subscriber(data, alert));
}

export function subscribeToModalChange(
  callback: (data?: PromptData | AlertData, alert?: boolean) => void,
) {
  subscribers.push(callback);
}
