import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaPlay, FaStop } from "react-icons/fa";
import useSound from "use-sound";
import _1 from "@site/static/audio/1.mp3";
import _2 from "@site/static/audio/2.mp3";
import _3 from "@site/static/audio/3.mp3";
import _4 from "@site/static/audio/4.mp3";
import _5 from "@site/static/audio/5.mp3";
import _6 from "@site/static/audio/6.mp3";
import _7 from "@site/static/audio/7.mp3";
import _8 from "@site/static/audio/8.mp3";
import _9 from "@site/static/audio/9.mp3";
import _10 from "@site/static/audio/10.mp3";
import _11 from "@site/static/audio/11.mp3";
import _12 from "@site/static/audio/12.mp3";
import _13 from "@site/static/audio/13.mp3";
import _14 from "@site/static/audio/14.mp3";
import _15 from "@site/static/audio/15.mp3";
import _16 from "@site/static/audio/16.mp3";
import _17 from "@site/static/audio/17.mp3";
import _18 from "@site/static/audio/18.mp3";
import _19 from "@site/static/audio/19.mp3";
import _20 from "@site/static/audio/20.mp3";
import _21 from "@site/static/audio/21.mp3";
import _22 from "@site/static/audio/22.mp3";
import _23 from "@site/static/audio/23.mp3";
import _24 from "@site/static/audio/24.mp3";
import _25 from "@site/static/audio/25.mp3";
import _26 from "@site/static/audio/26.mp3";
import _27 from "@site/static/audio/27.mp3";
import _28 from "@site/static/audio/28.mp3";
import _29 from "@site/static/audio/29.mp3";
import _30 from "@site/static/audio/30.mp3";
import _31 from "@site/static/audio/31.mp3";
import _32 from "@site/static/audio/32.mp3";
import _33 from "@site/static/audio/33.mp3";
import _34 from "@site/static/audio/34.mp3";
import _35 from "@site/static/audio/35.mp3";
import _36 from "@site/static/audio/36.mp3";
import _37 from "@site/static/audio/37.mp3";
import _38 from "@site/static/audio/38.mp3";
import _39 from "@site/static/audio/39.mp3";
import _40 from "@site/static/audio/40.mp3";
import _41 from "@site/static/audio/41.mp3";
import _42 from "@site/static/audio/42.mp3";
import _43 from "@site/static/audio/43.mp3";
import _44 from "@site/static/audio/44.mp3";
import _45 from "@site/static/audio/45.mp3";
import _46 from "@site/static/audio/46.mp3";
import _47 from "@site/static/audio/47.mp3";
import _48 from "@site/static/audio/48.mp3";
import _49 from "@site/static/audio/49.mp3";
import _50 from "@site/static/audio/50.mp3";
import _51 from "@site/static/audio/51.mp3";
import _52 from "@site/static/audio/52.mp3";
import _53 from "@site/static/audio/53.mp3";
import _54 from "@site/static/audio/54.mp3";
import _55 from "@site/static/audio/55.mp3";
import _56 from "@site/static/audio/56.mp3";
import _57 from "@site/static/audio/57.mp3";
import _58 from "@site/static/audio/58.mp3";
import _59 from "@site/static/audio/59.mp3";
import _60 from "@site/static/audio/60.mp3";
import _61 from "@site/static/audio/61.mp3";
import _62 from "@site/static/audio/62.mp3";
import _63 from "@site/static/audio/63.mp3";
import _64 from "@site/static/audio/64.mp3";
import _65 from "@site/static/audio/65.mp3";
import _66 from "@site/static/audio/66.mp3";
import _67 from "@site/static/audio/67.mp3";
import _68 from "@site/static/audio/68.mp3";
import _69 from "@site/static/audio/69.mp3";
import _70 from "@site/static/audio/70.mp3";
import _71 from "@site/static/audio/71.mp3";
import _72 from "@site/static/audio/72.mp3";
import _73 from "@site/static/audio/73.mp3";
import _74 from "@site/static/audio/74.mp3";
import _75 from "@site/static/audio/75.mp3";
import _76 from "@site/static/audio/76.mp3";
import _77 from "@site/static/audio/77.mp3";
import _78 from "@site/static/audio/78.mp3";
import _79 from "@site/static/audio/79.mp3";
import _80 from "@site/static/audio/80.mp3";
import _81 from "@site/static/audio/81.mp3";
import _82 from "@site/static/audio/82.mp3";
import _83 from "@site/static/audio/83.mp3";
import _84 from "@site/static/audio/84.mp3";
import _85 from "@site/static/audio/85.mp3";
import _86 from "@site/static/audio/86.mp3";
import _87 from "@site/static/audio/87.mp3";
import _88 from "@site/static/audio/88.mp3";
import _89 from "@site/static/audio/89.mp3";
import _90 from "@site/static/audio/90.mp3";
import _91 from "@site/static/audio/91.mp3";
import _92 from "@site/static/audio/92.mp3";
import _93 from "@site/static/audio/93.mp3";
import _94 from "@site/static/audio/94.mp3";
import _95 from "@site/static/audio/95.mp3";
import _96 from "@site/static/audio/96.mp3";
import _97 from "@site/static/audio/97.mp3";
import _98 from "@site/static/audio/98.mp3";
import _99 from "@site/static/audio/99.mp3";
import _100 from "@site/static/audio/100.mp3";

export default function Audio({ src }) {
  let audioSrc = src;
  switch (src) {
    case "1":
      audioSrc = _1;
      break;
    case "2":
      audioSrc = _2;
      break;
    case "3":
      audioSrc = _3;
      break;
    case "4":
      audioSrc = _4;
      break;
    case "5":
      audioSrc = _5;
      break;
    case "6":
      audioSrc = _6;
      break;
    case "7":
      audioSrc = _7;
      break;
    case "8":
      audioSrc = _8;
      break;
    case "9":
      audioSrc = _9;
      break;
    case "10":
      audioSrc = _10;
      break;
    case "11":
      audioSrc = _11;
      break;
    case "12":
      audioSrc = _12;
      break;
    case "13":
      audioSrc = _13;
      break;
    case "14":
      audioSrc = _14;
      break;
    case "15":
      audioSrc = _15;
      break;
    case "16":
      audioSrc = _16;
      break;
    case "17":
      audioSrc = _17;
      break;
    case "18":
      audioSrc = _18;
      break;
    case "19":
      audioSrc = _19;
      break;
    case "20":
      audioSrc = _20;
      break;
    case "21":
      audioSrc = _21;
      break;
    case "22":
      audioSrc = _22;
      break;
    case "23":
      audioSrc = _23;
      break;
    case "24":
      audioSrc = _24;
      break;
    case "25":
      audioSrc = _25;
      break;
    case "26":
      audioSrc = _26;
      break;
    case "27":
      audioSrc = _27;
      break;
    case "28":
      audioSrc = _28;
      break;
    case "29":
      audioSrc = _29;
      break;
    case "30":
      audioSrc = _30;
      break;
    case "31":
      audioSrc = _31;
      break;
    case "32":
      audioSrc = _32;
      break;
    case "33":
      audioSrc = _33;
      break;
    case "34":
      audioSrc = _34;
      break;
    case "35":
      audioSrc = _35;
      break;
    case "36":
      audioSrc = _36;
      break;
    case "37":
      audioSrc = _37;
      break;
    case "38":
      audioSrc = _38;
      break;
    case "39":
      audioSrc = _39;
      break;
    case "40":
      audioSrc = _40;
      break;
    case "41":
      audioSrc = _41;
      break;
    case "42":
      audioSrc = _42;
      break;
    case "43":
      audioSrc = _43;
      break;
    case "44":
      audioSrc = _44;
      break;
    case "45":
      audioSrc = _45;
      break;
    case "46":
      audioSrc = _46;
      break;
    case "47":
      audioSrc = _47;
      break;
    case "48":
      audioSrc = _48;
      break;
    case "49":
      audioSrc = _49;
      break;
    case "50":
      audioSrc = _50;
      break;
    case "51":
      audioSrc = _51;
      break;
    case "52":
      audioSrc = _52;
      break;
    case "53":
      audioSrc = _53;
      break;
    case "54":
      audioSrc = _54;
      break;
    case "55":
      audioSrc = _55;
      break;
    case "56":
      audioSrc = _56;
      break;
    case "57":
      audioSrc = _57;
      break;
    case "58":
      audioSrc = _58;
      break;
    case "59":
      audioSrc = _59;
      break;
    case "60":
      audioSrc = _60;
      break;
    case "61":
      audioSrc = _61;
      break;
    case "62":
      audioSrc = _62;
      break;
    case "63":
      audioSrc = _63;
      break;
    case "64":
      audioSrc = _64;
      break;
    case "65":
      audioSrc = _65;
      break;
    case "66":
      audioSrc = _66;
      break;
    case "67":
      audioSrc = _67;
      break;
    case "68":
      audioSrc = _68;
      break;
    case "69":
      audioSrc = _69;
      break;
    case "70":
      audioSrc = _70;
      break;
    case "71":
      audioSrc = _71;
      break;
    case "72":
      audioSrc = _72;
      break;
    case "73":
      audioSrc = _73;
      break;
    case "74":
      audioSrc = _74;
      break;
    case "75":
      audioSrc = _75;
      break;
    case "76":
      audioSrc = _76;
      break;
    case "77":
      audioSrc = _77;
      break;
    case "78":
      audioSrc = _78;
      break;
    case "79":
      audioSrc = _79;
      break;
    case "80":
      audioSrc = _80;
      break;
    case "81":
      audioSrc = _81;
      break;
    case "82":
      audioSrc = _82;
      break;
    case "83":
      audioSrc = _83;
      break;
    case "84":
      audioSrc = _84;
      break;
    case "85":
      audioSrc = _85;
      break;
    case "86":
      audioSrc = _86;
      break;
    case "87":
      audioSrc = _87;
      break;
    case "88":
      audioSrc = _88;
      break;
    case "89":
      audioSrc = _89;
      break;
    case "90":
      audioSrc = _90;
      break;
    case "91":
      audioSrc = _91;
      break;
    case "92":
      audioSrc = _92;
      break;
    case "93":
      audioSrc = _93;
      break;
    case "94":
      audioSrc = _94;
      break;
    case "95":
      audioSrc = _95;
      break;
    case "96":
      audioSrc = _96;
      break;
    case "97":
      audioSrc = _97;
      break;
    case "98":
      audioSrc = _98;
      break;
    case "99":
      audioSrc = _99;
      break;
    case "100":
      audioSrc = _100;
      break;
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(audioSrc, {
    interrupt: true,
    onend: () => {
      setIsPlaying(false);
    },
  });
  const toggle = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return isPlaying ? (
    <FaStop className={styles.audio} onClick={toggle} />
  ) : (
    <FaPlay className={styles.audio} onClick={toggle} />
  );
}
