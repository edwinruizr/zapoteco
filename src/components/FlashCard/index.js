import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useSpring, a } from '@react-spring/web'
import { AiFillPlayCircle } from 'react-icons/ai';
import { PiNumberCircleTwoFill, PiNumberCircleFourFill, PiNumberCircleEightFill } from 'react-icons/pi'
import useSound from 'use-sound';
import Translate from "@docusaurus/Translate";
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
import wbill from '@site/static/audio/wbill.mp3';
import xhid from '@site/static/audio/xhid.mp3';
import xun from '@site/static/audio/xun.mp3';
import yetj from '@site/static/audio/yetj.mp3';
import za from '@site/static/audio/za.mp3';
import zaa from '@site/static/audio/zaa.mp3';

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
    {
        title: "Chhua'a",
        Svg: require('@site/static/img/mouth.svg').default,
        translationId: 'mouth',
        sound: chhuaa,
    },
    {
        title: "Dub",
        Svg: require('@site/static/img/feather.svg').default,
        translationId: 'feather',
        sound: dub,
    },
    {
        title: "Eza",
        Svg: require('@site/static/img/cherry.svg').default,
        translationId: 'cherry',
        sound: eza,
    },
    {
        title: "Fok",
        Svg: require('@site/static/img/bulb.svg').default,
        translationId: 'bulb',
        sound: fok,
    },
    {
        title: "Gu",
        Svg: require('@site/static/img/potato.svg').default,
        translationId: 'potato',
        sound: gu,
    },
    {
        title: "Iz",
        Svg: require('@site/static/img/year.svg').default,
        translationId: 'year',
        sound: iz,
    },
    {
        title: "Jeid",
        Svg: require('@site/static/img/chicken.svg').default,
        translationId: 'chicken',
        sound: jeid,
    },
    {
        title: "Kush",
        Svg: require('@site/static/img/pig.svg').default,
        translationId: 'pig',
        sound: kush,
    },
    {
        title: "Lulla",
        Svg: require('@site/static/img/tongue.svg').default,
        translationId: 'tongue',
        sound: lulla,
    },
    {
        title: "Lhapa",
        Svg: require('@site/static/img/hat.svg').default,
        translationId: 'hat',
        sound: lhapa,
    },
    {
        title: "Llit",
        Svg: require('@site/static/img/egg.svg').default,
        translationId: 'egg',
        sound: llit,
    },
    {
        title: "Llit",
        Svg: require('@site/static/img/bone.svg').default,
        translationId: 'bone',
        sound: llit,
    },
    {
        title: "Mechh",
        Svg: require('@site/static/img/money.svg').default,
        translationId: 'money',
        sound: mechh,
    },
    {
        title: "Nia'a",
        Svg: require('@site/static/img/foot.svg').default,
        translationId: 'foot',
        sound: niaa,
    },
    {
        title: "Nhis",
        Svg: require('@site/static/img/water.svg').default,
        translationId: 'water',
        sound: nhis,
    },
    {
        title: "Ñeñen",
        Svg: require('@site/static/img/boogeyman.svg').default,
        translationId: 'boogeyman',
        sound: nenen,
    },
    {
        title: "On'o",
        translationId: 'yes',
        sound: ono,
    },
    {
        title: "Perh",
        Svg: require('@site/static/img/pear.svg').default,
        translationId: 'pear',
        sound: perh,
    },
    {
        title: "Riu",
        Svg: require('@site/static/img/cricket.svg').default,
        translationId: 'cricket',
        sound: riu,
    },
    {
        title: "Rhiz",
        Svg: require('@site/static/img/little.svg').default,
        translationId: 'little',
        sound: rhiz,
    },
    {
        title: "Sia",
        Svg: require('@site/static/img/delicious.svg').default,
        translationId: 'delicious',
        sound: sia,
    },
    {
        title: "Shi",
        Svg: require('@site/static/img/ten.svg').default,
        translationId: 'ten',
        sound: shi,
    },
    {
        title: "Tap",
        Svg: PiNumberCircleFourFill,
        translationId: 'four',
        sound: tap,
    },
    {
        title: "Wbill",
        Svg: require('@site/static/img/sun.svg').default,
        translationId: 'sun',
        sound: wbill,
    },
    {
        title: "Xun",
        Svg: PiNumberCircleEightFill,
        translationId: 'eight',
        sound: xun,
    },
    {
        title: "Xhid",
        Svg: require('@site/static/img/cat.svg').default,
        translationId: 'cat',
        sound: xhid,
    },
    {
        title: "Yetj",
        Svg: require('@site/static/img/sugarcane.svg').default,
        translationId: 'sugarcane',
        sound: yetj,
    },
    {
        title: "Za",
        Svg: require('@site/static/img/bean.svg').default,
        translationId: 'bean',
        sound: za,
    },
    {
        title: "Za'a",
        Svg: require('@site/static/img/corn.svg').default,
        translationId: 'corn',
        sound: zaa,
    },
];

function FlashCard({Svg, title, sound, translationId}) {
    const [play, {stop, isPlaying}] = useSound(sound, {interrupt: true, onend: () => {
    }});

    const [flipped, setFlipped] = useState(false);
    const [classNames, setClassNames] = useState("");
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    useEffect(()=>{
        Svg == undefined ? setClassNames(`${styles.cardText}`):setClassNames("")
    }, [Svg])


  return (
          <div className={clsx('card-demo', 'margin-top--md', 'col', 'col--6', `${styles.contenedor}`)}>
              <a.div onClick={() => {if (!flipped) { play()} else {stop()}; setFlipped(!flipped)}} className={clsx('card', 'item', 'shadow--tl')} style={{ opacity: opacity.to(o => 1 - o), transform }}>
                  <div className="card__image text--center" >
                      {Svg && <Svg className={styles.featureSvg} role="img" />}
                      <h2 className={classNames}>
                          <Translate id={translationId}/>
                      </h2>
                  </div>
              </a.div>
              <a.div
                  onClick={() => {if (!flipped) { play()} else {stop()}; setFlipped(!flipped)}}
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
 const [List, setList] = useState()
    useEffect(()=>{
        setList(shuffle(CardsList))
    }, [])

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {List?.map((props, idx) => (
            <FlashCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
