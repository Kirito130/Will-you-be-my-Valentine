/**
 * Countdown to February 14th 8:00 PM IST (Valentine's Day).
 * 8 PM IST = 14:30 UTC. Target is Feb 14 at 14:30 UTC; if that moment has passed this year, use next year.
 */

const FEB = 1; // Date month: February = 1 (0-indexed)
const FEB_14 = 14;
const IST_8PM_AS_UTC_HOUR = 14;
const IST_8PM_AS_UTC_MINUTE = 30;
const MS_PER_SEC = 1000;
const MS_PER_MIN = 60 * MS_PER_SEC;
const MS_PER_HOUR = 60 * MS_PER_MIN;

/**
 * Returns the UTC timestamp (ms) for Feb 14, 8 PM IST in the given year.
 * 8 PM IST = 14:30 UTC on the same calendar day.
 */
function getFeb14_8PM_IST_UtcMs(year: number): number {
  return Date.UTC(year, FEB, FEB_14, IST_8PM_AS_UTC_HOUR, IST_8PM_AS_UTC_MINUTE, 0, 0);
}

/**
 * Returns the UTC timestamp (ms) for the next Feb 14 8 PM IST.
 * If we're before that moment this year, target is this year; otherwise next year.
 */
export function getNext8PMISTUtcMs(): number {
  const now = Date.now();
  const y = new Date(now).getUTCFullYear();
  const thisYear = getFeb14_8PM_IST_UtcMs(y);
  if (now < thisYear) return thisYear;
  return getFeb14_8PM_IST_UtcMs(y + 1);
}

/**
 * Returns remaining milliseconds until Feb 14 8 PM IST (clamped to 0).
 */
export function getRemainingMs(): number {
  const target = getNext8PMISTUtcMs();
  return Math.max(0, target - Date.now());
}

/**
 * Formats remaining ms as "X hrs : Y min : Z sec".
 */
export function formatRemaining(ms: number): string {
  if (ms <= 0) return "0 hrs : 0 min : 0 sec";
  const hours = Math.floor(ms / MS_PER_HOUR);
  const restH = ms % MS_PER_HOUR;
  const minutes = Math.floor(restH / MS_PER_MIN);
  const restM = restH % MS_PER_MIN;
  const seconds = Math.floor(restM / MS_PER_SEC);
  return `${hours} hrs : ${minutes} min : ${seconds} sec`;
}
