const warned = new Set<string>();

/** Logs a deprecation warning once per message, only in development. */
export const warnDeprecated = (message: string) => {
  if (!__DEV__ || warned.has(message)) {
    return;
  }
  warned.add(message);
  console.warn(`[rn-inkpad] ${message}`);
};
