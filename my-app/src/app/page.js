'use client';

import './page.module.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  const currentTheme = resolvedTheme || 'light';

  return (
    <div className="flex justify-center items-center p-4 m-4">
      <div className="w-3/5 mt-12">
        <p>
          Hello! I am<br />
          Software Engineer Systems Developer<br />
          I'm a passionate Software Engineer based in Toronto, Canada. I have a strong background in computer science and software development, with a focus on building scalable and efficient systems. I enjoy working on challenging problems and continuously learning new technologies to improve my skills. In my free time, I like to explore new programming languages and frameworks, as well as contribute to open-source projects.
          I am currently looking for new opportunities to apply my skills and make a positive impact in the tech industry. If you are interested in collaborating or have any questions, feel free to reach out!
        </p>
        <div className="relative inline-block mt-5 bg-inherit group">
          <div className="absolute z-1 inset-0 bg-red-500 transition-transform duration-300"></div>
          <button
            className={`relative z-10 border-2 border-red-500 text-red-500 ${
              currentTheme === 'dark' ? 'bg-black' : 'bg-white'
            } hover:translate-x-[-4px] hover:translate-y-[-4px] font-bold py-2 px-4 transition duration-300 ${
              currentTheme === 'dark' ? 'hover:bg-black' : 'hover:bg-white'
            }`}
          >
            Get my resume
          </button>
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center mt-16 relative">
        <Image
          src="/Roger.jpeg"
          alt="Roger's Photo"
          width={250}
          height={375}
          className="object-cover transform -rotate-1"
        />
      </div>
    </div>
  );
}
