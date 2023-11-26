import { Noun } from "@site/src/components/nouns";
import Translate from "@docusaurus/Translate";
import React from "react";

export const pronouns: Noun[] = [
  {
    zapoteco: "nheed",
    noun: <Translate id={"me"} />,
  },
  {
    zapoteco: "lhee",
    noun: <Translate id={"you"} />,
  },
  {
    zapoteco: "lheba",
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
    zapoteco: "chha'w",
    noun: <Translate id={"us (includes person you are talking to)"} />,
  },
  {
    zapoteco: "nhetu",
    noun: <Translate id={"us (excluding person you are talking to)"} />,
  },
  {
    zapoteco: "lhe'e",
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
  },
  {
    zapoteco: "xna'",
    noun: <Translate id={"mother"} />,
    img: require("@site/static/img/mother.svg").default,
  },
  {
    zapoteco: "xhína",
    noun: <Translate id={"son/daughter"} />,
    img: require("@site/static/img/son_daughter.svg").default,
  },
  {
    zapoteco: "bizan",
    noun: <Translate id={"sibling"} />,
    img: require("@site/static/img/sibling.svg").default,
  },
  {
    zapoteco: "bibilh",
    noun: <Translate id={"sister"} />,
    img: require("@site/static/img/sister.svg").default,
  },
  {
    zapoteco: "bibisha",
    noun: <Translate id={"brother"} />,
    img: require("@site/static/img/brother.svg").default,
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"aunt"} />,
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"uncle"} />,
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"nephew"} />, // sobrino
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"niece"} />, // sobrina
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"grandson"} />, // nieto
  },
  {
    zapoteco: "", // TODO: ask about this
    noun: <Translate id={"granddaughter"} />, // nieta
  },
  {
    zapoteco: "gen", // TODO: ask about this
    noun: <Translate id={"newborn"} />,
    img: require("@site/static/img/newborn.svg").default,
  },
  {
    zapoteco: "bdaw", // TODO: ask about this
    noun: <Translate id={"baby"} />,
    img: require("@site/static/img/baby.svg").default,
  },
  {
    zapoteco: "bedaw",
    noun: <Translate id={"child"} />,
  },
  {
    zapoteco: "bejueg",
    noun: <Translate id={"young_man"} />,
  },
  {
    zapoteco: "nuljueg",
    noun: <Translate id={"young_lady"} />,
  },
  {
    zapoteco: "tawa",
    noun: <Translate id={"grandmother"} />,
    img: require("@site/static/img/grandmother.svg").default,
  },
  {
    zapoteco: "xtawa",
    noun: <Translate id={"grandfather"} />,
    img: require("@site/static/img/grandfather.svg").default,
  },
  {
    zapoteco: "tawgucha",
    noun: <Translate id={"great grandmother"} />,
    img: require("@site/static/img/great_grandmother.svg").default,
  },
  {
    zapoteco: "xtawagucha",
    noun: <Translate id={"great grandfather"} />,
    img: require("@site/static/img/great_grandfather.svg").default,
  },
];
