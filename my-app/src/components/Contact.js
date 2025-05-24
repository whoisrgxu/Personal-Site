 export default function Contact() {
    return (
        <div id="contact" className="relative flex flex-col mt-30 items-center">
            <h2 className="text-7xl mb-16">Want To</h2>
            <div className="absolute top-3/4 left-0 -translate-y-1/2 -translate-x-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 opacity-50 blur-[130px] rounded-full pointer-events-none z-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:place-items-center">
                <div data-aos="fade-right">
                    <div className="text-3xl text-center text-pink-600">Offer job opportunity</div>
                    <div className="p-4 text-center text-lg">I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects.If you have a project or role in mind, feel free to reach out and let&#39;s discuss!</div>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                    <div className="text-3xl text-center text-pink-600" >Connect</div>
                    <div className="p-4 text-center text-lg">Networking is key in the tech industry, and I&#39;m always looking to meet new people and expand my professional circle. Whether you&#39;re a fellow developer, designer, or entrepreneur, I&#39;d love to chat and learn more about your work. Let&#39;s grab a virtual coffee and see where the conversation takes us!</div>
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <div className="text-3xl text-center text-pink-600" >Build something </div>
                    <div className="p-4 text-center text-lg">I have a passion for developing innovative web applications that solve complex problems. Whether it&#39;s building a custom e-commerce platform or a cutting-edge web app, I&#39;m always ready for a new challenge. Let&#39;s create something amazing together!</div>
                </div>
            </div>
            <div 
                className="mt-10 mb-5 lg:mt-15 lg:mb-20 text-md md:text-xl lg:text-3xl flex justify-center space-x-4 md:space-x-10 lg:space-x-20"
                data-aos="fade-right"
                data-aos-delay="700"
            > 
                <a href="mailto:roxu1927@outlook.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a href="https://github.com/whoisrgxu" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/rogerxuprofile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
        )
}
