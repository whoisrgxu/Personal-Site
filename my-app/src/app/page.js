'use client';

import './page.module.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  const currentTheme = resolvedTheme || 'light';

  return (
    <div className="lg:h-screen">
      <div className="flex justify-center items-center">
        <div className="w-11/20 mt-12 shadow-blue-300">
          <p>
            <span className='opacity-70'>Hello! I am</span><br />
            Roger Xu <br />
            <span className="text-blue-300">Software Engineer <FiberManualRecordIcon fontSize='inherit'/> Systems Developer</span><br />
            I'm a passionate Software Engineer based in Toronto, Canada. I have a strong background in computer science and software development, with a focus on building scalable and efficient systems. I enjoy working on challenging problems and continuously learning new technologies to improve my skills. In my free time, I like to explore new programming languages and frameworks, as well as contribute to open-source projects.
            I am currently looking for new opportunities to apply my skills and make a positive impact in the tech industry. If you are interested in collaborating or have any questions, feel free to reach out!
          </p>
          <div className="relative inline-block mt-5 bg-inherit group ">
            <div className="absolute z-1 inset-0 bg-blue-300 transition-transform duration-300"></div>
            <button
              className={`relative z-10 border-2 border-blue-300 text-blue-300 ${
                currentTheme === 'dark' ? 'bg-black' : 'bg-white'
              } hover:translate-x-[-6px] hover:translate-y-[-6px] font-bold py-2 px-4 transition duration-300 ${
                currentTheme === 'dark' ? 'hover:bg-black' : 'hover:bg-white'
              }`}
            >
              Get my resume
            </button>
          </div>
        </div>
        <div className="w-9/20 flex justify-center items-center mt-16 relative">
        <div class="absolute inset-0 -m-12 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 opacity-35 blur-[160px] pointer-events-none z-0"></div>
          <Image
            src="/Roger.jpeg"
            alt="Roger's Photo"
            width={275}
            height={415}
            className="relative object-cover transform z-10 border-rounded-lg shadow-lg shadow-blue-300 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="hidden absolute bottom-20 left-0 right-0 lg:block">      
        <div items-center className="text-blue-300 flex text-4xl justify-center mt-10">
          <MouseOutlinedIcon fontSize='inherit'/>
        </div>
        <div className="text-blue-300 text-5xl animate-bounce flex flex-col items-center">
          <KeyboardDoubleArrowDownIcon fontSize='inherit'/>
        </div>
      </div>
    </div>
  );
}
