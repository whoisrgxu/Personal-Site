'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


 export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // default animation duration
            once: true,     // animate only once when entering view
        });
    }, []);

    return (
        <div id="about" className="relative flex flex-col items-center">
            <h2 className="text-7xl mb-8">About My</h2>
            <div className="absolute top-3/4 left-0 -translate-y-1/2 -translate-x-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 opacity-50 blur-[130px] rounded-full pointer-events-none z-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:place-items-center">
                <div data-aos="fade-right">
                    <div className="text-3xl text-center text-pink-600">Past</div>
                    <div className="p-4 text-center text-lg"> My career path prior to programming was built upon financial and business sectors until I came across Python which brought me into the world of technologies. What began as a hobby quickly grew into a strong passion for programming. Over the years of studying computer programming, I have developed a diverse set of skills for solving real-world problems by combining my technical abilities with cross-sector business experience.</div>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                    <div className="text-3xl text-center text-pink-600">Present</div>
                    <div className="p-4 text-center text-lg">Building on the foundation of my passion and training, I recently completed a co-op as a System Developer at HOOPP, where I applied my skills in a real-world, enterprise-level environment.Now, I&#39;m actively seeking new opportunities where I can grow as a developer and contribute meaningfully to a team. In the meantime, I continue to expand my knowledge through self-directed learning, sharpening my technical expertise and staying current with modern development tools and practices.</div>
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <div className="text-3xl text-center text-pink-600">Future</div>
                    <div className="p-4 text-center text-lg">Looking ahead, I&#39;m excited about the future of programming and the endless opportunities it presents. I&#39;m confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.</div>
                </div>
            </div>
        </div>
        )
}
