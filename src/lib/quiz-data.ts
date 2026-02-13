/**
 * Quiz configuration for Page 4 — Anti-Impostor Quiz.
 * Each option has label, outcome message (shown after selection), and points delta.
 */

export interface QuizOption {
  id: "A" | "B" | "C" | "D";
  label: string;
  outcomeMessage: string;
  delta: number;
}

export interface QuizQuestion {
  note: string;
  question: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    note: "Let's start where it all began!",
    question: "Where was I born?",
    options: [
      {
        id: "A",
        label: "Nepal",
        outcomeMessage: "I was born in India! You definitely seem like an impostor. | -10 points",
        delta: -10,
      },
      {
        id: "B",
        label: "Jhankaria Hospital",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "C",
        label: "Dholkawala Hospital",
        outcomeMessage: "Right! I knew you were my T-rex. | +10 points",
        delta: 10,
      },
      {
        id: "D",
        label: "Saifee Hospital",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
    ],
  },
  {
    note: "Let's see how well you know me.",
    question: "How many phones have I broken/changed until now?",
    options: [
      {
        id: "A",
        label: "1",
        outcomeMessage: "Seriously, there is no way you are my T-Rex. | -10 points",
        delta: -10,
      },
      {
        id: "B",
        label: "3",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "C",
        label: "4",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "D",
        label: "5",
        outcomeMessage: "Right! I knew you were my T-rex. | +10 points",
        delta: 10,
      },
    ],
  },
  {
    note: "Let's see if you know what I groove to.",
    question: "Who was my top Spotify artist for 2025?",
    options: [
      {
        id: "A",
        label: "Taylor Swift",
        outcomeMessage: "I never doubted you for a second my beloved T-rex. | +10 points",
        delta: 10,
      },
      {
        id: "B",
        label: "Gracie Abrams",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "C",
        label: "Kanye West",
        outcomeMessage: "I am pretty sure you are an impostor. | -10 points",
        delta: -10,
      },
      {
        id: "D",
        label: "Griff",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
    ],
  },
  {
    note: "Let's get a little serious, shall we.",
    question: "What is the name of the book I am currently reading?",
    options: [
      {
        id: "A",
        label: "Too Good to be Real",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "B",
        label: "Too Good to be True",
        outcomeMessage: "Right! My T-Rex knows me so well. | +10 points",
        delta: 10,
      },
      {
        id: "C",
        label: "Too Good to Exist",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "D",
        label: "Too Good to Last",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
    ],
  },
  {
    note: "This is your final chance to prove your innocence!",
    question: "When was the first time I called you T-rex?",
    options: [
      {
        id: "A",
        label: "4th Jan",
        outcomeMessage: "I knew you were the imposter :( | -10 points",
        delta: -10,
      },
      {
        id: "B",
        label: "4th Feb",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
      {
        id: "C",
        label: "7th February",
        outcomeMessage: "Right! My beloved T-rex, I knew it was you. | +10 points",
        delta: 10,
      },
      {
        id: "D",
        label: "10th February",
        outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
        delta: -5,
      },
    ],
  },
];

/** Timeout outcome when 30s countdown reaches 0 */
export const TIMEOUT_MESSAGE = "Time's up! My T-rex needs to be faster. | -5 points";
export const TIMEOUT_DELTA = -5;
