'use client';

import Link from 'next/link';
import BeautyButton from '@/components/BeautyButton';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback} from 'react';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Contact from '@/components/Contact';
import {useSound} from '@/components/SoundProvider';
import { useAtom} from 'jotai';
import {isOpenState} from '@/Store/globalState';
import MuteButton from '../components/SoundButton';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { muted } = useSound();

  const [isOpen, setIsOpen] = useAtom(isOpenState);

  useEffect(() => {
    setMounted(true);
  }, []);
  const playClick = useCallback(() => {

    if (muted) return;
    const audio = new Audio('/mouse-click.mp3');
    audio.play();
  }, [muted]);

  if (!mounted) return null; // avoid hydration mismatch

  const currentTheme = resolvedTheme || 'light';


  return (
    <>
    {!isOpen && (
    <div>
      <div className="lg:h-screen relative mb-10">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-20 lg:mb-0">
          <div className="lg:w-11/20 mt-12 relative flex flex-col z-10" >
            <div className="absolute top-3/4 left-0 -translate-y-1/2 -translate-x-1/2 w-[32vw] h-[27vh] bg-gradient-to-bl from-sky-400 via-blue-500 to-indigo-50 blur-[130px] rounded-full pointer-events-none z-20 opacity-0 fade-in-50" style={{"animationDelay": "0.5s"}}></div>
            {/* Text and Button */}
            <div className="relative text-xl z-10 opacity-0 fade-in" style={{"animationDelay": "1.5s"}}>
              <p className="text-xl leading-relaxed">
                <span className="opacity-70">Hello! I am</span>
                <span className="text-3xl font-bold block mt-4">Roger Xu</span>
                <span className="text-pink-600 block my-4">
                  Software Engineer <FiberManualRecordIcon fontSize="inherit" /> Systems Developer
                </span>
                I&#39;m a passionate Software Engineer based in Toronto, Canada, with a background that blends business and technology. I focus on building practical, user-focused software and applications that solve real-world problems and deliver meaningful impact. In my free time, I enjoy exploring new technologies and tools, and occasionally contribute to open-source projects.
                I&#39;m currently seeking new opportunities to apply my skills and contribute to impactful work in the tech industry. If you&#39;re interested in connecting or collaborating, feel free to reach out!
              </p>

              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='no-underline'><BeautyButton theme={currentTheme} text="Get my resume"/></a>
            </div>
          </div>  

          <div className="lg:w-9/20 flex justify-center items-center mt-16 relative">
            <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 blur-[160px] pointer-events-none z-0 opacity-0 fade-in-35" style={{"animationDelay": "0.5s"}}></div>
            <Image
              src="/Roger.jpeg"
              alt="Roger's Photo"
              width={330}
              height={500}
              className="relative object-cover transform z-10 border-rounded-lg shadow-lg shadow-blue-300 transition-transform duration-300 hover:scale-105 opacity-0 fade-in" style={{"animationDelay": "1.5s"}}
            />
          </div>
        </div>
        <div className="hidden absolute bottom-[5vh] left-0 right-0 lg:block">      
          <div className="text-pink-600 flex items-center text-4xl justify-center mt-10">
            <div className="relative inline-block group">
              <div className="absolute inset-0 rounded-full blur-md bg-pink-600 opacity-0 group-hover:opacity-30 transition duration-300 z-0"></div>
              <a href="#about" className="relative z-10" onClick={() => playClick()}>
                <MouseOutlinedIcon fontSize="inherit" />
              </a>
            </div>
          </div>
          <div className="text-pink-600 text-5xl animate-bounce flex flex-col items-center">
            <div className="relative inline-block group">
              <div className="absolute inset-2 rounded-full blur-lg bg-pink-600 opacity-0 group-hover:opacity-30 transition duration-300 z-0"></div>
              <a href="#about" className="relative z-10" onClick={() => playClick()}>
                <KeyboardDoubleArrowDownIcon fontSize='inherit'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="scroll-mt-28">
        <About />
      </section>
      <section id="skills" className="scroll-mt-28">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>
      <section className="scroll-mt-28">
        <Footer />
      </section>
    </div>
    )}
    {isOpen && (
      <div className="fixed top-20 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md z-50 flex flex-col items-start p-6 gap-4 transition-transform duration-300">
        <Link href="#about" onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                  }}
        >
          About
        </Link>
        <Link href="#skills" onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                  }}
        >
          Skills
        </Link>        
        <Link href="#projects" onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                  }}
        >
          Projects
        </Link>        
        <Link href="#contact" onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                  }}
        >
          Contact
        </Link>
        <Link href="/Resume.pdf" onClick={() => {
                                    playClick();
                                    setIsOpen(false);
                                  }}
        >
          Resume
        </Link>
        <div><MuteButton/></div>
      </div>
    )}
  </>
  );
}
