import React, { ReactElement, useState } from "react";
import useSound from "use-sound";
import styles from "@site/src/components/audiocard/styles.module.css";
import Stack from "@mui/material/Stack";
import { FaPlay, FaStop } from "react-icons/fa";
import clsx from "clsx";
export interface AudioCardProps {
  title: string;
  body: any;
  footer?: any;
  audio?: string;
  img?: string;
  Svg?: any;
}

export const AudioCard: React.FC<AudioCardProps> = (props): ReactElement => {
  const { title, body, footer, audio, img, Svg, ...rest } = props;

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
    <div className={clsx("card-demo", "margin--md", "col", styles.customcard)}>
      <div className="card shadow--tl">
        {img && (
          <div className={clsx("card__image", styles.featureSvg)}>
            <img src={img} alt={title} title={title} />
          </div>
        )}
        {Svg && (
          <div className={clsx("card__image", styles.imageDiv)}>
            <Svg
              className={clsx("card__image", styles.featureSvg)}
              role="img"
            />
          </div>
        )}
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
