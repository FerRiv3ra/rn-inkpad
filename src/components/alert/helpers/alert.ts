import {AlertData, PromptData} from '../types/alertTypes';
import {
  notifySubscribers,
  subscribeToModalChange,
  subscribers,
} from './subscribers';

export namespace Alert {
  export function alert(params: AlertData): Promise<boolean>;
  export function alert(
    title: string,
    description: string,
    onPress?: () => void,
  ): Promise<boolean>;
  export function alert(
    param1: AlertData | string,
    param2?: string,
  ): Promise<boolean> {
    let data: AlertData;
    if (typeof param1 === 'string') {
      data = {title: param1, description: param2!};
    } else {
      data = param1;
    }
    notifySubscribers(data, true);

    return new Promise(res => {
      subscribeToModalChange(data => {
        subscribers.shift();
        res(!!data);
        notifySubscribers(undefined);
      });
    });
  }

  export function prompt(params: PromptData): Promise<string>;
  export function prompt(
    title: string,
    description?: string,
    onPress?: () => void,
  ): Promise<string>;
  export function prompt(
    param1: PromptData | string,
    param2?: string,
  ): Promise<string> {
    let data: PromptData;
    if (typeof param1 === 'string') {
      data = {title: param1, description: param2};
    } else {
      data = param1;
    }
    notifySubscribers(data);

    return new Promise(res => {
      subscribeToModalChange(data => {
        subscribers.shift();
        res(data?.title!);
        notifySubscribers(undefined);
      });
    });
  }
}
