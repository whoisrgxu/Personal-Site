'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../app/globals.css';

const Header = () => {
  const {theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // prevent mismatch between server and client render
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mounted) return null; // avoid hydration mismatch
  return (
    <header className="mt-5 sticky top-0 z-50 fade-in">
      <nav>
        <ul className="flex items-center gap-4 justify-between list-none">
          <li className="font-bold basis-1/2 text-lg shrink-0">Rong Gang (Roger) Xu</li>
          <li><Link href="#about" className="no-underline hover:underline visited:text-inherit">About</Link></li>
          <li><Link href="#skills" className="no-underline hover:underline visited:text-inherit">Skills</Link></li>
          <li><Link href="#projects" className="no-underline hover:underline visited:text-inherit">Projects</Link></li>
          <li><Link href="#contact" className="no-underline hover:underline visited:text-inherit">Contact</Link></li>
          <li><Link href="/Resume" className="no-underline hover:underline visited:text-inherit">Resume</Link></li>
          <li>
              <button
                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                className="px-3 py-1 rounded"
              >
                {currentTheme === 'dark' ? <WbSunnyIcon/>: <BedtimeIcon/>}
              </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
