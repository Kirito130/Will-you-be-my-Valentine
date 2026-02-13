/**
 * Public URLs for assets in public/Photos/Assets.
 * Use encodeURIComponent for filenames with spaces/special chars in paths.
 */
const BASE = "/Photos/Assets";

function asset(name: string): string {
  return `${BASE}/${encodeURIComponent(name)}`;
}

export const assets = {
  /** Cute T-Rex character (main dino for gate) - Dino1.png */
  cuteDino: asset("Dino1.png"),
  /** Cartoon 3D dino rendering */
  dinoCartoon: asset("—Pngtree—a cartoon-style 3d rendering of_21141951.png"),
  /** 3D illustration dino */
  dinoIllustration: asset("—Pngtree—isolated 3d illustration of a_5795749.jpg"),
  /** Hearts and love */
  twoHearts: asset("two hearts.png"),
  heartWithWingsFront: asset("heart with wings (front).png"),
  heartWithWingsAngle: asset("heart with wings (angle).png"),
  heartWithLove: asset("heart with love.png"),
  heartWithArrow: asset("heart with arrow.png"),
  heartLock: asset("heart lock.png"),
  handWithLove: asset("hand with love.png"),
  /** Gifts / romance */
  gift: asset("gift.png"),
  chocolateFront: asset("chocolate (front).png"),
  envelopeFront: asset("envelope (front).png"),
  ring: asset("ring.png"),
  boxWithRingFront: asset("box with ring (front).png"),
  lockWithHeart: asset("lock with heart.png"),
  airBalloon: asset("air balloon.png"),
  airBalloonClouds: asset("air balloon with clouds.png"),
  /** Misc */
  bowWithArrow: asset("bow with arrow.png"),
  brokenHeart: asset("broken heart.png"),
  iLoveYou1: asset("i love you #1.png"),
  iLoveYou2: asset("i love you #2.png"),
} as const;
