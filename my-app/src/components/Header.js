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
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0"></div>
              <Link href="#about" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>About
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0"></div>
              <Link href="#skills" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Skills
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0"></div>
              <Link href="#projects" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Projects
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0"></div>
              <Link href="#contact" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Contact
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0 "></div>
              <button onClick={() => playClick()} className="z-10">
                <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 no-underline visited:text-inherit hover:cursor-default">Resume</Link>
              </button>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0 pointer-events-none"></div>
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
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
