'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback} from 'react';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../app/globals.css';
import MuteButton from './SoundButton';
import { useSound } from './SoundProvider';


const Header = () => {
  const {theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { muted } = useSound();

  useEffect(() => {
    setMounted(true); // prevent mismatch between server and client render
  }, []);

  const playClick = useCallback(() => {
      if (muted) return;
      const audio = new Audio('/mouse-click.mp3');
      audio.play();
  }, [muted]);

  const playLightSwitch = useCallback(() => {
    if (muted) return;
    const audio = new Audio('/light-switch.mp3');
    audio.play();
  }, [muted]);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mounted) return null; // avoid hydration mismatch
  return (
    <header className="mt-5 sticky top-0 z-50 fade-in">
      <nav>
        <ul className="flex items-center gap-4 justify-between list-none">
          <li className="font-bold basis-1/2 text-lg shrink-0">Rong Gang (Roger) Xu</li>
          <li><Link href="#about" onClick={() => playClick()} className="no-underline hover:underline visited:text-inherit">About</Link></li>
          <li><Link href="#skills" onClick={() => playClick()} className="no-underline hover:underline visited:text-inherit">Skills</Link></li>
          <li><Link href="#projects" onClick={() => playClick()} className="no-underline hover:underline visited:text-inherit">Projects</Link></li>
          <li><Link href="#contact" onClick={() => playClick()} className="no-underline hover:underline visited:text-inherit">Contact</Link></li>
          <li><a href="/Resume.pdf" onClick={() => playClick()} className="no-underline hover:underline visited:text-inherit">Resume</a></li>
          <li>
              <button
                onClick={() => {
                  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                  playLightSwitch();
                }}
                className="px-3 py-1 rounded"
              >
                {currentTheme === 'dark' ? <BedtimeIcon/> : < WbSunnyIcon/>}
              </button>
              <MuteButton/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
