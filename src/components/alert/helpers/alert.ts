import type {AlertData, PromptData} from '../types/alertTypes';
import {closeModal, hasPendingModal, openModal} from './subscribers';

export namespace Alert {
  /**
   * Shows an alert and resolves `true` when confirmed, `false` when cancelled.
   * Requires an `<AlertContainer />` mounted somewhere in the tree.
   */
  export function alert(params: AlertData): Promise<boolean>;
  export function alert(
    title: string,
    description?: string,
    onPress?: () => void,
  ): Promise<boolean>;
  export async function alert(
    param1: AlertData | string,
    param2?: string,
    onPress?: () => void,
  ): Promise<boolean> {
    const data: AlertData =
      typeof param1 === 'string'
        ? {title: param1, description: param2}
        : param1;

    const result = await openModal(data, true);
    const confirmed = !!result;

    if (confirmed && onPress) {
      onPress();
    }

    return confirmed;
  }

  /**
   * Shows a prompt and resolves with the typed text, or `undefined` when
   * cancelled.
   */
  export function prompt(params: PromptData): Promise<string | undefined>;
  export function prompt(
    title: string,
    description?: string,
    onPress?: (value: string) => void,
  ): Promise<string | undefined>;
  export async function prompt(
    param1: PromptData | string,
    param2?: string,
    onPress?: (value: string) => void,
  ): Promise<string | undefined> {
    const data: PromptData =
      typeof param1 === 'string'
        ? {title: param1, description: param2}
        : param1;

    const result = await openModal(data, false);
    const value = result?.title;

    if (value !== undefined && onPress) {
      onPress(value);
    }

    return value;
  }

  /**
   * Closes the alert or prompt currently shown, if any.
   * The pending promise resolves as cancelled (`false` / `undefined`).
   */
  export function dismiss() {
    if (hasPendingModal()) {
      closeModal(undefined);
    }
  }
}
