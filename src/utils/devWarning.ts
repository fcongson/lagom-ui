const warned = new Set<string>();

/**
 * Logs a console warning prefixed with "[lagom-ui]", once per message, outside
 * production builds only. Bundlers replace `process.env.NODE_ENV`; the
 * `typeof` check keeps it safe where they don't.
 */
export const devWarning = (message: string): void => {
  if (
    typeof process !== "undefined" &&
    process.env?.NODE_ENV === "production"
  ) {
    return;
  }
  if (warned.has(message)) return;
  warned.add(message);
  console.warn(`[lagom-ui] ${message}`);
};

/** For tests: forgets which warnings have been logged. */
export const resetDevWarnings = (): void => {
  warned.clear();
};
