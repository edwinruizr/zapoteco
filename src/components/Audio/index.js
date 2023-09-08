import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import useSound from 'use-sound';
import axh from '@site/static/audio/axh.mp3';

export default function Audio({audiosrc}) {
    let audioSrc = ""
    switch (audiosrc) {
        case 'axh':
            audioSrc = axh
    }

    const [play, {stop, isPlaying}] = useSound(audioSrc, {interrupt: false});
    const toggle = () => {
        isPlaying ? stop(): play()
    }
  return <AiFillPlayCircle onClick={toggle}/>;
}
