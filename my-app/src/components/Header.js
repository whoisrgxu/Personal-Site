'use client';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState, useCallback} from 'react';
import '../app/globals.css';
import MuteButton from './SoundButton';
import { useSound } from './SoundProvider';
import MenuIcon from '@mui/icons-material/Menu';
import {isOpenState} from '@/Store/globalState';
import CloseIcon from '@mui/icons-material/Close';
import ThemeMode from './ThemeMode';

const Header = () => {

  const [mounted, setMounted] = useState(false);

  const { muted } = useSound();
  const [isOpen, setIsOpen] = useAtom(isOpenState);

  useEffect(() => {
    setMounted(true); // prevent mismatch between server and client render
  }, []);

  const playClick = useCallback(() => {
      if (muted) return;
      const audio = new Audio('/mouse-click.mp3');
      audio.play();
  }, [muted]);


  if (!mounted) return null; // avoid hydration mismatch
  return (
    <header className="mt-5 sticky top-0 z-50 fade-in">
      <nav className="flex items-center justify-between">
        <ul className="w-4/5 md:w-1/3 flex items-center gap-4 justify-between list-none">
          <li className="font-bold text-lg shrink-0">Rong Gang (Roger) Xu</li>
        </ul>
        <div className="md:hidden flex items-center">
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => playClick()}
          >
            {isOpen? <CloseIcon className="text-gray-800 dark:text-gray-200"/> : <MenuIcon className="text-gray-800 dark:text-gray-200" />}
          </button>
        </div>
        {!isOpen && (
        <ul className="hidden md:w-2/3 lg:w-3/5 xl:w-1/2 md:flex items-center gap-4 justify-between list-none">
          {/* <li className="font-bold basis-1/2 text-lg shrink-0">Rong Gang (Roger) Xu</li> */}
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <Link href="#about" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>About
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <Link href="#skills" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Skills
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <Link href="#projects" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Projects
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <Link href="#contact" className="relative z-10 no-underline visited:text-inherit hover:cursor-default" onClick={() => playClick()}>Contact
              </Link>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-100 transition duration-300 z-0 "></div>
              <button onClick={() => playClick()} className="z-10">
                <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 no-underline visited:text-inherit hover:cursor-default">Resume</Link>
              </button>
            </div>
          </li>
          <li>
            <div className="relative inline-block group">
              <div className="absolute left-[-0.3rem] right-[-0.3rem] top-1/2 h-[0.3em] -translate-y-1/2 rounded-full blur-xs bg-pink-600 opacity-0 group-hover:opacity-50 transition duration-300 z-0 pointer-events-none"></div>
              <ThemeMode/>
              <MuteButton/>
            </div>
          </li>
        </ul>)}
      </nav>
    </header>
  );
};

export default Header;
