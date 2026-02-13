"use client";

import React, { createContext, useContext, useCallback, useEffect, useState } from "react";

/**
 * Client-side persisted state for the Valentine flow.
 * Persists to sessionStorage under val_state so it survives route changes and refreshes.
 */
export type LastChoicePage2 = "yes" | "hell" | null;

export interface ValentinesState {
  points: number;
  lastChoicePage2: LastChoicePage2;
}

const STORAGE_KEY = "val_state";

function loadState(): ValentinesState {
  if (typeof window === "undefined") {
    return { points: 0, lastChoicePage2: null };
  }
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ValentinesState;
      return {
        points: typeof parsed.points === "number" ? parsed.points : 0,
        lastChoicePage2:
          parsed.lastChoicePage2 === "yes" || parsed.lastChoicePage2 === "hell"
            ? parsed.lastChoicePage2
            : null,
      };
    }
  } catch {
    // ignore
  }
  return { points: 0, lastChoicePage2: null };
}

function saveState(state: ValentinesState) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

interface ValentinesStoreContextValue {
  points: number;
  addPoints: (delta: number) => void;
  setPoints: (value: number) => void;
  lastChoicePage2: LastChoicePage2;
  setLastChoicePage2: (choice: LastChoicePage2) => void;
}

const ValentinesStoreContext = createContext<ValentinesStoreContextValue | null>(null);

/**
 * Provider that holds points and lastChoicePage2 and persists them to sessionStorage.
 * Wrap the app (or pages that need it) with this provider.
 */
export function ValentinesStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ValentinesState>({ points: 0, lastChoicePage2: null });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveState(state);
  }, [hydrated, state]);

  const addPoints = useCallback((delta: number) => {
    setState((prev) => ({ ...prev, points: prev.points + delta }));
  }, []);

  const setPoints = useCallback((value: number) => {
    setState((prev) => ({ ...prev, points: value }));
  }, []);

  const setLastChoicePage2 = useCallback((choice: LastChoicePage2) => {
    setState((prev) => ({ ...prev, lastChoicePage2: choice }));
  }, []);

  const value: ValentinesStoreContextValue = {
    points: state.points,
    addPoints,
    setPoints,
    lastChoicePage2: state.lastChoicePage2,
    setLastChoicePage2,
  };

  return (
    <ValentinesStoreContext.Provider value={value}>
      {children}
    </ValentinesStoreContext.Provider>
  );
}

export function useValentinesStore() {
  const ctx = useContext(ValentinesStoreContext);
  if (!ctx) {
    throw new Error("useValentinesStore must be used within ValentinesStoreProvider");
  }
  return ctx;
}
