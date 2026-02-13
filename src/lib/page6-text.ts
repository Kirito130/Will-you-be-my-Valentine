/**
 * Page 6 copy: countdown stages and final messages.
 */

/** Stage labels for the initial flow (4s per stage). Stage 8 is final with timer. */
export const PAGE6_STAGES = [
  "Hiii",
  "My T-Rex",
  "This is not the end",
  "There is another surprise waiting for you",
  "But not so soon",
  "You will have to wait just a bit longer",
  "Come back to this page for your surprise",
  "Your surprise coming in: ", // suffix is the timer; full string built in component
] as const;

/** Message shown when countdown reaches 0 (8 PM IST). */
export const PAGE6_RELEASED_MESSAGE =
  "You did well my T-Rex! All the wait is now over!";

/** Headline for the burst celebration. */
export const PAGE6_BURST_HEADLINE = "Happy Valentines Day!";
