"use client";
import { useState, createContext, useContext, use } from 'react';

// Context to share mute state globally
const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => setMuted((prev) => !prev);

  return (
    <SoundContext.Provider value={{ muted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
}

// Hook to use mute state anywhere
export const useSound = () => useContext(SoundContext);
