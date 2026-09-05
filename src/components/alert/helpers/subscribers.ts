import type {AlertData, PromptData} from '../types/alertTypes';

export type ModalData = PromptData | AlertData;
export type ModalListener = (data?: ModalData, alert?: boolean) => void;

/** Containers (AlertContainer) listening for open/close events. */
const listeners = new Set<ModalListener>();

/** Resolver of the request currently shown, if any. */
let pending: ((result?: ModalData) => void) | null = null;

/**
 * Subscribe a container to modal changes.
 * Returns the unsubscribe function so the container can clean up on unmount.
 */
export function subscribeToModalChange(listener: ModalListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function notifySubscribers(data?: ModalData, alert?: boolean) {
  listeners.forEach(listener => listener(data, alert));
}

/**
 * Show a modal and wait for the container to close it.
 * If another request is still open it is resolved as cancelled first.
 */
export function openModal(
  data: ModalData,
  alert: boolean,
): Promise<ModalData | undefined> {
  if (pending) {
    pending(undefined);
  }

  return new Promise(resolve => {
    pending = resolve;
    notifySubscribers(data, alert);
  });
}

/** Called by the container when the user confirms or cancels. */
export function closeModal(result?: ModalData) {
  const resolve = pending;
  pending = null;
  notifySubscribers(undefined);
  resolve?.(result);
}

/** Whether a request is currently shown. */
export function hasPendingModal() {
  return pending !== null;
}

/** Number of active containers. Exposed for tests. */
export function getListenerCount() {
  return listeners.size;
}
