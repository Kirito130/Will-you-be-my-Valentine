"use client";

import { useEffect, useRef, useState } from "react";

/** Path to background song (Ravyn Lenae - Love Me Not). Place your audio file at public/music/love-me-not.MP3 */
const MUSIC_SRC = "/music/love-me-not.MP3";

/**
 * Background music that plays in a loop. Unmuted by default.
 * Starts after allowPlay is true (e.g. after the intro). Resets and plays from the start
 * on every load/refresh. If the browser blocks autoplay, retries on first user interaction.
 */
export function BackgroundMusic({ allowPlay = false }: { allowPlay?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoaded(true);
    audio.addEventListener("canplaythrough", handleCanPlay);
    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (allowPlay && !isMuted && isLoaded) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        const retry = () => {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          document.removeEventListener("click", retry);
          document.removeEventListener("touchstart", retry);
          document.removeEventListener("keydown", retry);
        };
        document.addEventListener("click", retry, { once: true });
        document.addEventListener("touchstart", retry, { once: true });
        document.addEventListener("keydown", retry, { once: true });
      });
    } else {
      audio.pause();
    }
  }, [allowPlay, isMuted, isLoaded]);

  const handleClick = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && audioRef.current && allowPlay) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg border border-valentine-pink/40 text-valentine-deep hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-valentine-rose"
        aria-label={isMuted ? "Play background music" : "Mute background music"}
        title={isMuted ? "Play background music (Ravyn Lenae - Love Me Not)" : "Mute music"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </>
  );
}
