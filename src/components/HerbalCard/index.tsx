import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdStopCircle } from 'react-icons/md';
import useSound from 'use-sound';
import Translate from "@docusaurus/Translate";
import TagsListInline from '@theme/TagsListInline';
import Tag from '@theme/Tag';
import Link from "@docusaurus/Link";
import clsx from "clsx";

interface HerbTag {
    label: string;
}

interface HerbalCardProps {
    zapoteco: string;
    translation: any;
    description: any;
    audio?: any;
    img: string;
    tags: HerbTag[];
}

const Herbs: HerbalCardProps[] = [{
    zapoteco: "Kuan Orhegano",
    translation: <Translate id="oregano">Oregano</Translate>,
    description: <Translate id="oregano.description">It is prepared in tea and is used for menstruation cramps.</Translate>,
    // audio: kuanorhegano, //TODO: correct audio
    img: "oregano.jpg",
    tags: [{label:"tea"},{label:"menstruation"}, {label:"cramps"}]
},
    {
        zapoteco: "Romher",
        translation: <Translate id="rosemary">Rosemary</Translate>,
        description: <Translate id="rosemary.description">It is used for high blood pressure. Prepare a cup of water, once the water is boiling, add two tips of rosemary, turn it off and serve.</Translate>,
        // audio: romher, //TODO: correct audio
        img: "rosemary.jpg",
        tags: [{label:"tea"}, {label:"high blood pressure"}]
    },
    {
        zapoteco: "Manzaniy",
        translation: <Translate id="chamomile">Chamomile</Translate>,
        description: <Translate id="chamomile.description">For stomach pain and irritated eyes.</Translate>,
        //audio: manzaniy, //TODO: correct audio
        img: "chamomile.jpg",
        tags: [{label:"tea"}, {label: "stomachache"}, {label: "eyes"}]
    },
    {
        zapoteco: "Yej Bumbil",
        translation: <Translate id="bougainvillea.flower">Bougainvillea flower</Translate>,
        description: <Translate id="bougainvillea.flower.description">It is used for coughs, taken in tea with eucalyptus and garlic.</Translate>,
        // audio: yejbumbil, //TODO: correct audio
        img: "bougainvillea.jpg",
        tags: [{label:"tea"}, {label: "cough"}]
    }
];


const HerbalCard: React.FC<HerbalCardProps> = props => {
    const {
        zapoteco,
        translation,
        description,
        audio,
        img,
        tags,
        ...rest
    } = props

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {stop}] = useSound(audio,
        {
            interrupt: true,
            onend: () => {setIsPlaying(false)},
        },
    );
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
                        audio && <MdStopCircle className={styles.audio} onClick={toggle}/>:
                        audio && <AiFillPlayCircle className={styles.audio} onClick={toggle}/>}
                         {zapoteco}</h4>
                    <h5>{translation}</h5>
                    <small>
                        {description}
                    </small>
                </div>
                <div className="card__footer">
                    <TagsListInline tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default function HerbalCards() {
    const [filters, setFilters] = useState<string[]>();
    const [h, setHerbElements] = useState(Herbs.reduce((arr, item, idx) => (arr[idx / 2 |0] ??= []).push(item) && arr, []));
    // const h = Herbs.reduce((arr, item, idx) => (arr[idx / 2 |0] ??= []).push(item) && arr, []);

    useEffect(()=>{
        try {
            let f = new URLSearchParams(window.location.search).getAll("filter")
            setFilters(f)
        } catch(e) {}
    },[])

    useEffect(()=>{
        let filtered
        if (filters === undefined || filters?.length < 1) {
            filtered = Herbs
        } else {
            filtered = Herbs.filter(p => filters.every((val) => {
                let pass = false
                p.tags.forEach((v) => pass = pass || String(v.label).toLowerCase() == String(val).toLowerCase())
                return pass
            }))
        }
        setHerbElements(filtered.reduce((arr, item, idx) => (arr[idx / 2 |0] ??= []).push(item) && arr, []));
    }, [filters])
    return (
            <div className="container">
                <Translate id={"herbs.blurb"} values={{link: <Link to="https://maps.app.goo.gl/X3x1AeKWidGkSEof8">San Francisco Cajonos</Link>}}>
                    {'Long ago, when humanity\'s connection to nature was profound, tribes began discovering the healing properties of herbs.\n' +
                    'Guided by intuition and observation, our ancestors noticed how certain plants could alleviate ailments and soothe\n' +
                    'discomfort. Through generations of trial and error, wisdom was passed down, and the art of herbal medicine blossomed\n' +
                    'within these close-knit communities. Herbs became a vital part of tribal life, symbolizing not only physical healing\n' +
                    'but also the profound bond between people and the natural world. This ancient tradition continues to thrive, reminding\n' +
                    'us of the enduring wisdom of our ancestors and the power of nature\'s remedies. The following were gathered from the\n' +
                    'musuem in {link}:'}
                </Translate>
                <ul className={clsx('padding--sm', 'margin-left--sm')}>
                    <b>
                        <Translate id="filter">
                            Filters:
                        </Translate>
                    </b>
                    {filters?.map((filter:string) => {
                        return <li className={styles.filtertag}>
                            <Tag permalink={""} label={filter}/>
                        </li>
                    })}
                </ul>
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
