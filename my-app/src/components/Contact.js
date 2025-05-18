 export default function Contact() {
    return (
        <div id="contact" className="relative flex flex-col items-center">
            <h2 className="text-7xl mb-8">Want To</h2>
            <div className="absolute top-3/4 left-0 -translate-y-1/2 -translate-x-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 opacity-50 blur-[130px] rounded-full pointer-events-none z-20"></div>
            <div className="grid grid-cols-3 gap-20">
                <div>
                    <div className="text-3xl text-center text-pink-600">Offer job opportunity</div>
                    <div className="p-4 text-center text-lg">Vam open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects.If you have a project or role in mind, feel free to reach out and let's discuss!</div>
                </div>
                <div>
                    <div className="text-3xl text-center text-pink-600">Connect</div>
                    <div className="p-4 text-center text-lg">Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!</div>
                </div>
                <div>
                    <div className="text-3xl text-center text-pink-600">Build something </div>
                    <div className="p-4 text-center text-lg">I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!</div>
                </div>
            </div>
        </div>
        )
}
