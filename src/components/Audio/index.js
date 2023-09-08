import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import useSound from 'use-sound';
import axh from '@site/static/audio/axh.mp3';
import bzin from '@site/static/audio/bzin.mp3';
import chup from '@site/static/audio/chup.mp3';
import chhuaa from '@site/static/audio/chhuaa.mp3';
import dub from '@site/static/audio/dub.mp3';
import eza from '@site/static/audio/eza.mp3';
import fok from '@site/static/audio/fok.mp3';
import gu from '@site/static/audio/gu.mp3';
import iz from '@site/static/audio/iz.mp3';
import jeid from '@site/static/audio/jeid.mp3';
import kush from '@site/static/audio/kush.mp3';
import lhapa from '@site/static/audio/lhapa.mp3';
import llit from '@site/static/audio/llit.mp3';
import lulla from '@site/static/audio/lulla.mp3';
import mechh from '@site/static/audio/mechh.mp3';
import nenen from '@site/static/audio/nenen.mp3';
import nhis from '@site/static/audio/nhis.mp3';
import niaa from '@site/static/audio/niaa.mp3';
import ono from '@site/static/audio/ono.mp3';
import perh from '@site/static/audio/perh.mp3';
import rhiz from '@site/static/audio/rhiz.mp3';
import riu from '@site/static/audio/riu.mp3';
import shi from '@site/static/audio/shi.mp3';
import sia from '@site/static/audio/sia.mp3';
import tap from '@site/static/audio/tap.mp3';
import u from '@site/static/audio/u.mp3';
import wbill from '@site/static/audio/wbill.mp3';
import xhid from '@site/static/audio/xhid.mp3';
import xun from '@site/static/audio/xun.mp3';
import yetj from '@site/static/audio/yetj.mp3';
import za from '@site/static/audio/za.mp3';
import zaa from '@site/static/audio/zaa.mp3';

export default function Audio({src}) {
    let audioSrc = ""
    switch (src) {
        case 'axh':
            audioSrc = axh
            break;
        case 'bzin':
            audioSrc = bzin
            break;
        case 'chup':
            audioSrc = chup
            break;
        case 'chhuaa':
            audioSrc = chhuaa
            break;
        case 'dub':
            audioSrc = dub
            break;
        case 'eza':
            audioSrc = eza
            break;
        case 'fok':
            audioSrc = fok
            break;
        case 'gu':
            audioSrc = gu
            break;
        case 'iz':
            audioSrc = iz
            break;
        case 'jeid':
            audioSrc = jeid
            break;
        case 'kush':
            audioSrc = kush
            break;
        case 'lhapa':
            audioSrc = lhapa
            break;
        case 'llit':
            audioSrc = llit
            break;
        case 'lulla':
            audioSrc = lulla
            break;
        case 'mechh':
            audioSrc = mechh
            break;
        case 'nenen':
            audioSrc = nenen
            break;
        case 'nhis':
            audioSrc = nhis
            break;
        case 'niaa':
            audioSrc = niaa
            break;
        case 'ono':
            audioSrc = ono
            break;
        case 'perh':
            audioSrc = perh
            break;
        case 'rhiz':
            audioSrc = rhiz
            break;
        case 'riu':
            audioSrc = riu
            break;
        case 'shi':
            audioSrc = shi
            break;
        case 'sia':
            audioSrc = sia
            break;
        case 'tap':
            audioSrc = tap
            break;
        case 'u':
            audioSrc = u
            break;
        case 'wbill':
            audioSrc = wbill
            break;
        case 'xhid':
            audioSrc = xhid
            break;
        case 'xun':
            audioSrc = xun
            break;
        case 'yetj':
            audioSrc = yetj
            break;
        case 'za':
            audioSrc = za
            break;
        case 'zaa':
            audioSrc = zaa
            break;
    }

    const [play, {stop, isPlaying}] = useSound(audioSrc, {interrupt: false});
    const toggle = () => {
        isPlaying ? stop(): play()
    }
  return <AiFillPlayCircle onClick={toggle}/>;
}
