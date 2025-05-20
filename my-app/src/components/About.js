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
            <div className="grid grid-cols-3 gap-20">
                <div data-aos="slide-right">
                    <div className="text-3xl text-center text-pink-600">Past</div>
                    <div className="p-4 text-center text-lg">I discovered my passion for programming when I was just 14 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.</div>
                </div>
                <div data-aos="slide-right" data-aos-delay="150">
                    <div className="text-3xl text-center text-pink-600">Present</div>
                    <div className="p-4 text-center text-lg">Currently, I am a software engineering student at Mutah University. I am also a Software Development Engineer intern at Amazon, where I gain valuable experience in a professional setting. Additionally, I am the founder of Arabic-Poetry.net, a platform dedicated to Arabic poetry.</div>
                </div>
                <div data-aos="slide-right" data-aos-delay="300">
                    <div className="text-3xl text-center text-pink-600">Future</div>
                    <div className="p-4 text-center text-lg">Looking ahead, I&#39;m excited about the future of programming and the endless opportunities it presents. I&#39;m confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.</div>
                </div>
            </div>
        </div>
        )
}
