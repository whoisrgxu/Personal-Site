export default function BeautyButton({text}) {
    return (
        <div className="relative inline-block mt-5 bg-inherit">
            <div className="absolute z-1 inset-0 bg-pink-600 transition-transform duration-300"></div>
            <button
                className={`relative z-10 border-2 border-pink-600 text-pink-600 bg-white hover:translate-x-[-6px] hover:translate-y-[-6px] font-bold py-2 px-4 transition duration-300 hover:bg-white`}
            >
                {text}
            </button>
        </div>
    );
}