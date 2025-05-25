import { useTheme } from 'next-themes';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useSound } from './SoundProvider';
import { useCallback } from 'react';

const ThemeMode = () => {
    const { muted } = useSound();
    const {theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const playLightSwitch = useCallback(() => {
        if (muted) return;
        const audio = new Audio('/light-switch.mp3');
        audio.play();
    }, [muted]);

    return (
        <button
            onClick={() => {
                setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                playLightSwitch();
            }}
            className="pl-3 pr-1 py-1 rounded"
            >
            {currentTheme === 'dark' ? <BedtimeIcon/> : < WbSunnyIcon/>}
        </button>
    )
}
export default ThemeMode;