import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useSpring, a } from '@react-spring/web'
import axh from '@site/static/audio/axh.mp3';
import bzin from '@site/static/audio/bzin.mp3';
import chup from '@site/static/audio/chup.mp3';
import { AiFillPlayCircle } from 'react-icons/ai';
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import useSound from 'use-sound';
import Translate from "@docusaurus/Translate";

const CardsList = [
  {
    title: 'Axh',
    Svg: require('@site/static/img/garlic.svg').default,
    translationId: 'Garlic',
    sound: axh,
  },
  {
    title: 'Bzin',
    Svg: require('@site/static/img/mouse.svg').default,
    translationId: 'Mouse',
    sound: bzin,
  },
    {
        title: 'Chup',
        Svg: PiNumberCircleTwoFill,
        translationId: 'Two',
        sound: chup,
    },
];

function FlashCard({Svg, title, sound, translationId}) {
    const [play, {stop, isPlaying}] = useSound(sound, {interrupt: false, onend: () => {
    }});

    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

  return (
          <div onClick={() => {if (!flipped) { play()} else {stop()}; setFlipped(!flipped)}} className={clsx('card-demo', 'margin-top--md', 'col', 'col--6', `${styles.contenedor}`)}>
              <a.div className="card item shadow--tl" style={{ opacity: opacity.to(o => 1 - o), transform }}>
                  <div className="card__image text--center carta" >
                  <Svg className={styles.featureSvg} role="img" />
                      <h2>
                          <Translate id={translationId}/>
                      </h2>
                  </div>
              </a.div>
              <a.div
                  className={`card item shadow--tl ${styles.carta}`}
                  style={{
                      opacity,
                      transform,
                      rotateY: '180deg',
                  }}
              >
                  <div className="card__body text--center">
                      <h1>{title}</h1>
                      <h1><AiFillPlayCircle
                          onClick={(event) => {
                              if(flipped) {event.stopPropagation();
                              if (isPlaying){
                                  stop()
                              } else {
                                  play()
                              }
                              }
                          }}/></h1>
                  </div>
              </a.div>
          </div>
  );
}

export default function FlashCards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CardsList.map((props, idx) => (
            <FlashCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
