import React, {useState} from 'react';
import styles from './styles.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdStopCircle } from 'react-icons/md';
import useSound from 'use-sound';
import Translate from "@docusaurus/Translate";
import wbill from '@site/static/audio/wbill.mp3';

const Herbs = [{
    zapoteco: "Kuan Orhegano",
    translation: <Translate id="oregano">Oregano</Translate>,
    description: <Translate id="oregano.description">It is prepared in tea and is used for menstruation cramps.</Translate>,
    audio: wbill, //TODO: correct audio
    img: "oregano.jpeg", //TODO: update with bigger image
    tags: ["tea", "menstruation", "cramps"]
},
    {
        zapoteco: "Romher",
        translation: <Translate id="rosemary">Rosemary</Translate>,
        description: <Translate id="rosemary.description">It is used for high blood pressure. Prepare a cup of water, once the water is boiling, add two tips of rosemary, turn it off and serve.</Translate>,
        audio: wbill, //TODO: correct audio
        img: "rosemary.jpeg",
        tags: ["tea", "high blood pressure"]
    },
    {
        zapoteco: "Manzaniy",
        translation: <Translate id="chamomile">Chamomile</Translate>,
        description: <Translate id="chamomile.description">For stomach pain and irritated eyes.</Translate>,
        audio: wbill, //TODO: correct audio
        img: "rosemary.jpeg", //TODO: update with correct image
        tags: ["tea", "stomachache", "eyes"]
    },
    {
        zapoteco: "Yej Bumbil",
        translation: <Translate id="boganvilla.flower">Boganvilla flower</Translate>,
        description: <Translate id="boganvilla.flower.description">It is used for coughs, taken in tea with eucalyptus and garlic.</Translate>,
        audio: wbill, //TODO: correct audio
        img: "rosemary.jpeg", //TODO: update with correct image
        tags: ["tea", "cough"]
    }
];

function HerbalCard({zapoteco, translation, description, audio, img, tags}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {stop}] = useSound(audio, {interrupt: true,
        onend: () => {
            setIsPlaying(false)
        },
    });
    const toggle = () => {
        if (isPlaying) {
            stop();
            setIsPlaying(false)
        } else {
            play()
            setIsPlaying(true)
        }
    }

    return (
        <div className="card-demo margin--md col">
            <div className="card shadow--tl">
                <div className="card__image">
                    <img
                        src={require('@site/static/img/' + img).default}
                        alt={img}
                    />
                </div>
                <div className="card__body">
                    <h4>{isPlaying ?
                        <MdStopCircle className={styles.audio} onClick={toggle}/>:
                        <AiFillPlayCircle className={styles.audio} onClick={toggle}/>}
                         {zapoteco}</h4>
                    <h5>{translation}</h5>
                    <small>
                        {description}
                    </small>
                </div>
                <div className="card__footer">
                    {tags.map((val) =>
                        <span className="badge badge--secondary margin--xs">{val}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function HerbalCards() {
    const h = Herbs.reduce((arr, item, idx) => (arr[idx / 2 |0] ??= []).push(item) && arr, []);

    return (
            <div className="container">
                {h?.map((data) => {
                    return <div className="row">
                        {data?.map((props, idx) => (
                            <HerbalCard key={idx} {...props} />
                        ))}
                    </div>
                })}
            </div>
    );
};
