"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/music/Paper%20Rings.MP3";

/**
 * Background music for Page 6: Paper Rings on loop. Same pattern as other landing pages.
 */
export function Page6BackgroundMusic() {
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

  const tryPlay = (audio: HTMLAudioElement) => {
    if (isMuted) return;
    audio.currentTime = 0;
    const p = audio.play();
    if (p && typeof p.then === "function") {
      p.catch(() => {
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
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isMuted && isLoaded) tryPlay(audio);
    else audio.pause();
  }, [isMuted, isLoaded]);

  return (
    <button
      type="button"
      onClick={() => setIsMuted((m) => !m)}
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors"
      aria-label={isMuted ? "Play background music" : "Mute background music"}
      title={isMuted ? "Play music (Paper Rings)" : "Mute music"}
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
  );
}
