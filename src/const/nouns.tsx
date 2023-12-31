import { Noun } from "@site/src/components/nouns";
import Translate from "@docusaurus/Translate";
import React from "react";
import {
  bdaw,
  bibilh,
  bibisha,
  bizan,
  gen,
  tawa,
  tawgucha,
  xa,
  xhina,
  xna,
  xtawa,
  xtawagucha,
} from "@site/src/const/audio";

export const pronouns: Noun[] = [
  {
    zapoteco: "nhed",
    noun: <Translate id={"me"} />,
  },
  {
    zapoteco: "lhe",
    noun: <Translate id={"you"} />,
  },
  {
    zapoteco: "leba",
    noun: <Translate id={"he"} />,
  },
  {
    zapoteco: "lhee'",
    noun: <Translate id={"she"} />,
  },
  {
    zapoteco: "lhekba'",
    noun: <Translate id={"them (at least one male)"} />,
  },
  {
    zapoteco: "lheke",
    noun: <Translate id={"them (all female)"} />,
  },
  {
    zapoteco: "chhaw",
    noun: <Translate id={"us (includes person you are talking to)"} />,
  },
  {
    zapoteco: "nhetu",
    noun: <Translate id={"us (excluding person you are talking to)"} />,
  },
  {
    zapoteco: "lhee",
    noun: <Translate id={"you all (excluding me)"} />,
  },
  {
    zapoteco: "yugchhu",
    noun: <Translate id={"everyone"} />,
  },
];
export const nouns: Noun[] = [
  {
    zapoteco: "xa'",
    noun: <Translate id={"father"} />,
    img: require("@site/static/img/father.svg").default,
    audio: xa,
  },
  {
    zapoteco: "xna'",
    noun: <Translate id={"mother"} />,
    img: require("@site/static/img/mother.svg").default,
    audio: xna,
  },
  {
    zapoteco: "xhína",
    noun: <Translate id={"son/daughter"} />,
    img: require("@site/static/img/son_daughter.svg").default,
    audio: xhina,
  },
  {
    zapoteco: "bizan",
    noun: <Translate id={"sibling"} />,
    img: require("@site/static/img/sibling.svg").default,
    audio: bizan,
  },
  {
    zapoteco: "bibilh",
    noun: <Translate id={"sister"} />,
    img: require("@site/static/img/sister.svg").default,
    audio: bibilh,
  },
  {
    zapoteco: "bibisha",
    noun: <Translate id={"brother"} />,
    img: require("@site/static/img/brother.svg").default,
    audio: bibisha,
  },
  {
    zapoteco: "xhesú",
    noun: <Translate id={"grandson/granddaughter"} />, // nieto/nieta
  },
  {
    zapoteco: "we'n",
    noun: <Translate id={"newborn"} />,
    img: require("@site/static/img/newborn.svg").default,
    audio: gen,
  },
  {
    zapoteco: "bdau",
    noun: <Translate id={"baby"} />,
    img: require("@site/static/img/baby.svg").default,
    audio: bdaw,
  },
  {
    zapoteco: "bidau",
    noun: <Translate id={"child"} />,
  },
  {
    zapoteco: "biwegw",
    noun: <Translate id={"young_man"}>young man</Translate>,
  },
  {
    zapoteco: "nhulhwegw",
    noun: <Translate id={"young_lady"}>young lady</Translate>,
  },
  {
    zapoteco: "tawa",
    noun: <Translate id={"grandmother"} />,
    img: require("@site/static/img/grandmother.svg").default,
    audio: tawa,
  },
  {
    zapoteco: "xtawa",
    noun: <Translate id={"grandfather"} />,
    img: require("@site/static/img/grandfather.svg").default,
    audio: xtawa,
  },
  {
    zapoteco: "tawgucha",
    noun: <Translate id={"great grandmother"} />,
    img: require("@site/static/img/great_grandmother.svg").default,
    audio: tawgucha,
  },
  {
    zapoteco: "xtawgucha",
    noun: <Translate id={"great grandfather"} />,
    img: require("@site/static/img/great_grandfather.svg").default,
    audio: xtawagucha,
  },
];
