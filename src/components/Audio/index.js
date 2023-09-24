import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaPlay, FaStop } from "react-icons/fa";
import useSound from "use-sound";

export default function Audio({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(src, {
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
