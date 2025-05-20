'use client';
import { useEffect, useState } from 'react';

export default function FancyCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border-1 border-pink-600 opacity-70 pointer-events-none transition-transform duration-0 ease-out flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`rounded-full bg-pink-600 transition-all duration-150 ${
          isClicking ? 'w-4 h-4' : 'w-1 h-1'
        }`}
      />
    </div>
  );
}
