import React, { ReactElement, useState } from "react";
import useSound from "use-sound";
import styles from "@site/src/components/herbalcard/styles.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import Stack from "@mui/material/Stack";
import { FaPlay, FaStop } from "react-icons/fa";
export interface AudioCardProps {
  title: string;
  body: any;
  footer?: any;
  audio?: string;
  img?: string;
}

export const AudioCard: React.FC<AudioCardProps> = (props): ReactElement => {
  const { title, body, footer, audio, img, ...rest } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(audio, {
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

  return (
    <div className="card-demo margin--md col">
      <div className="card shadow--tl">
        <div className="card__image">
          {img && <img src={img} alt={img} title="Logo Title Text 1" />}
        </div>
        <div className="card__body">
          <Stack direction="row" spacing={1}>
            <h2>{title}</h2>
            {audio && (
              <h2>
                {isPlaying ? (
                  <FaStop className={styles.audio} onClick={toggle} />
                ) : (
                  <FaPlay className={styles.audio} onClick={toggle} />
                )}
              </h2>
            )}
          </Stack>
          <h5>{body}</h5>
        </div>
        {footer && (
          <div className="card__footer">
            <small>{footer}</small>
          </div>
        )}
      </div>
    </div>
  );
};
