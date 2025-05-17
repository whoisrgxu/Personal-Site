export default function About() {
    return (
        <div id="about" className="flex flex-col items-center">
            <h2 className="text-5xl mb-8">About My</h2>
            <div className="grid grid-cols-3 gap-20">
                <div>
                    <div className="text-3xl text-center text-blue-300">Past</div>
                    <div className="p-4 text-center">I discovered my passion for programming when I was just 14 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.</div>
                </div>
                <div>
                    <div className="text-3xl text-center text-blue-300">Present</div>
                    <div className="p-4 text-center">Currently, I am a software engineering student at Mutah University. I am also a Software Development Engineer intern at Amazon, where I gain valuable experience in a professional setting. Additionally, I am the founder of Arabic-Poetry.net, a platform dedicated to Arabic poetry.</div>
                </div>
                <div>
                    <div className="text-3xl text-center text-blue-300">Future</div>
                    <div className="p-4 text-center">Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.</div>
                </div>
            </div>
        </div>
        )
}
