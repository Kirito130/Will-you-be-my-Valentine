/**
 * Normalizes user input for the gate password (T-Rex variants).
 * - trim, lowercase, remove all whitespace, remove punctuation/underscores.
 * Accept if normalized result equals "trex".
 */
export function normalizePassword(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export const GATE_ANSWER_NORMALIZED = "trex";

export function isCorrectPassword(input: string): boolean {
  return normalizePassword(input) === GATE_ANSWER_NORMALIZED;
}
