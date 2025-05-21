import { useSound } from './SoundProvider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useCallback } from 'react';

export default function MuteButton() {
  const { muted, toggleMute } = useSound();

  const playSwitchSound = useCallback(() => {
    let audio;
    if (muted) {
      audio = new Audio('/sound-on.mp3');
    }
    else audio = new Audio('/sound-off.wav');
    audio.play();
  }
  , [muted]);

  return (
    <button
    onClick={() => {
      toggleMute()
      playSwitchSound();
    }}
    className="px-3 py-1 rounded"
    >      
        {muted ?  <VolumeOffIcon/>: <VolumeUpIcon/>}    
    </button>
  );
}