import { useCallback } from 'react';


export default function BeautyButton({theme, text}) {

    const bgColor = theme === 'light' ? 'bg-white/50' : 'bg-black/50';

    const playClick = useCallback(() => {
        const audio = new Audio('/mouse-click.mp3');
        audio.play();
    }, []);
    return (
        <div className="relative inline-block mt-5 bg-inherit">
            <div className="absolute z-1 inset-0 bg-pink-600 transition-transform duration-300"></div>
            <button
                onClick={playClick}
                className={`relative z-10 border-2 border-pink-600 text-pink-600 ${bgColor} hover:translate-x-[-6px] hover:translate-y-[-6px] font-bold py-2 px-4 transition duration-300 hover:${bgColor}`}
            >
            {text}
            </button>
        </div>
    );
}