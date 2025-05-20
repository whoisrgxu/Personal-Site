'use client';

import './page.module.css';
import BeautyButton from '@/components/BeautyButton';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState} from 'react';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Contact from '@/components/Contact';

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  const currentTheme = resolvedTheme || 'light';



  return (
    <div>
      <div className="lg:h-screen">
        <div className="flex justify-center items-center">
          <div className="w-11/20 mt-12 relative flex flex-col z-10" >
            <div className="absolute top-3/4 left-0 -translate-y-1/2 -translate-x-1/2 w-[32vw] h-[27vh] bg-gradient-to-bl from-sky-400 via-blue-500 to-indigo-50 blur-[130px] rounded-full pointer-events-none z-20 opacity-0 fade-in-50" style={{"animationDelay": "0.5s"}}></div>
            {/* Text and Button */}
            <div className="relative z-10 opacity-0 fade-in" style={{"animationDelay": "1.5s"}}>
              <p className="text-base leading-relaxed">
                <span className="opacity-70">Hello! I am</span><br />
                <span className="text-3xl font-bold">Roger Xu</span> <br />
                <span className="text-pink-600">
                  Software Engineer <FiberManualRecordIcon fontSize="inherit" /> Systems Developer
                </span>
                <br /><br />
                I&#39;m a passionate Software Engineer based in Toronto, Canada, with a background that blends business and technology. I focus on building practical, user-focused software and applications that solve real-world problems and deliver meaningful impact. In my free time, I enjoy exploring new technologies and tools, and occasionally contribute to open-source projects.
                I&#39;m currently seeking new opportunities to apply my skills and contribute to impactful work in the tech industry. If you&#39;re interested in connecting or collaborating, feel free to reach out!
              </p>

              <BeautyButton theme={currentTheme} text="Get my resume"/>
            </div>
          </div>  

          <div className="w-9/20 flex justify-center items-center mt-16 relative">
            <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 blur-[160px] pointer-events-none z-0 opacity-0 fade-in-35" style={{"animationDelay": "0.5s"}}></div>
            <Image
              src="/Roger.jpeg"
              alt="Roger's Photo"
              width={275}
              height={415}
              className="relative object-cover transform z-10 border-rounded-lg shadow-lg shadow-blue-300 transition-transform duration-300 hover:scale-105 opacity-0 fade-in" style={{"animationDelay": "1.5s"}}
            />
          </div>
        </div>
        <div className="hidden absolute bottom-20 left-0 right-0 lg:block">      
          <div className="text-pink-600 flex items-center text-4xl justify-center mt-10">
            <MouseOutlinedIcon fontSize='inherit'/>
          </div>
          <div className="text-pink-600 text-5xl animate-bounce flex flex-col items-center">
            <KeyboardDoubleArrowDownIcon fontSize='inherit'/>
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
  );
}
