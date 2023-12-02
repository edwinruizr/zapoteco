import Translate from "@docusaurus/Translate";
import React from "react";
import { Word } from "@site/src/components/word";
import { VerbTenses } from "@site/src/components/verbs";
import {
  bdil,
  bxonhj,
  bzad,
  bzi,
  bzoj,
  chhaw,
  chhbell,
  chhehilh,
  chhenda,
  chhxhita,
  guz,
  jgazh,
  weteis,
  wexhill,
  weya,
  wezad,
  witj,
  xullia,
} from "@site/src/const/audio";

export const verbs: Word[] = [
  {
    zapoteco: "chhenda",
    word: <Translate id={"want"} />, // querer
    img: require("@site/static/img/want.svg").default,
    audio: chhenda,
  },
  {
    zapoteco: "chhaw",
    word: <Translate id={"eat"} />, // comer
    img: require("@site/static/img/eat.svg").default,
    audio: chhaw,
  },
  {
    zapoteco: "chhya'",
    word: <Translate id={"dance"} />, // bailar
    img: require("@site/static/img/dance.svg").default,
    audio: weya,
  },
  {
    zapoteco: "chhbell",
    word: <Translate id={"cry"} />, // llorar
    img: require("@site/static/img/cry.svg").default,
    audio: chhbell,
  },
  {
    zapoteco: "chhxhita",
    word: <Translate id={"jump"} />, // brincar
    img: require("@site/static/img/jump.svg").default,
    audio: chhxhita,
  },
  {
    zapoteco: "chhxhill",
    word: <Translate id={"laugh"} />, // reir
    img: require("@site/static/img/laugh.svg").default,
    audio: wexhill,
  },
  {
    zapoteco: "chhazj",
    word: <Translate id={"shower"} />, // bañar
    img: require("@site/static/img/shower.svg").default,
    audio: jgazh,
  },
  {
    zapoteco: "chhaz",
    word: <Translate id={"sow"} />, // sembrar
    img: require("@site/static/img/sow.svg").default,
    audio: guz,
  },
  {
    zapoteco: "chhitja",
    word: <Translate id={"play"} />, // jugar
    img: require("@site/static/img/play.svg").default,
    audio: witj,
  },
  {
    zapoteco: "chheisa",
    word: <Translate id={"sleep"} />, // dormir
    img: require("@site/static/img/sleep.svg").default,
    audio: weteis,
  },
  {
    zapoteco: "chhxhonja",
    word: <Translate id={"run"} />, // correr
    img: require("@site/static/img/run.svg").default,
    audio: bxonhj,
  },
  {
    zapoteco: "chhzoj",
    word: <Translate id={"write"} />, // escribir
    img: require("@site/static/img/write.svg").default,
    audio: bzoj,
  },
  {
    zapoteco: "chhxhia",
    word: <Translate id={"clean"} />, // limpiar
    img: require("@site/static/img/clean.svg").default,
    audio: bzi,
  },
  {
    zapoteco: "chhdila",
    word: <Translate id={"fight"} />, // pelear
    img: require("@site/static/img/fight.svg").default,
    audio: bdil,
  },
  {
    zapoteco: "chhsed",
    word: <Translate id={"practice"} />, // practicar
    img: require("@site/static/img/practice.svg").default,
    audio: wezad,
  },
  {
    zapoteco: "chhsed",
    word: <Translate id={"study"} />, // estudiar
    img: require("@site/static/img/study.svg").default,
    audio: bzad,
  },
  {
    zapoteco: "chheyilj",
    word: <Translate id={"search"} />, // buscar
    img: require("@site/static/img/look.svg").default,
    audio: chhehilh,
  },
  {
    zapoteco: "chhyua",
    word: <Translate id={"look"} />, // mirar
    img: require("@site/static/img/look.svg").default,
    audio: xullia,
  },
  {
    zapoteco: "chhezilhalla",
    word: <Translate id={"rest"} />, // descansar
    img: require("@site/static/img/rest.svg").default,
  },
];

// Dill de chhak, de' baude, de' ze gak			Los tres tiempor verbales, presente, pasado y futuro
export const verbConjugations: VerbTenses[] = [
  {
    verb: "bxhill",
    past: {
      // De' Baude			Pasado
      translation: {
        I: <Translate id={"i_laughed"}>I laughed</Translate>, // Yo me rei
        You: <Translate id={"you_laughed"}>You laughed</Translate>, // Tu te reiste
        he_she: <Translate id={"he_she_laughed"}>He/She laughed</Translate>, // El/Ella se rio
        We: <Translate id={"we_laughed"}>We laughed</Translate>, // Nosotros reimos
        You_all: <Translate id={"you_all_laughed"}>You all laughed</Translate>, // Ustedes se rieron
        They: <Translate id={"they_laughed"}>They laughed</Translate>, // Ellos se rieron
        Everyone: (
          <Translate id={"everyone_laughed"}>Everyone laughed</Translate>
        ), // Todos reimos
      },
      zapoteco: {
        I: "Nhed bxhill",
        You: "Lhe bxhillu",
        he_she: "Leba bxhillba",
        We: "Chhaw bxhillchhu",
        You_all: "Lhe'e bxhill'lhe",
        They: "Lekba bxhillkba",
        Everyone: "Yugchhu bxhillchhu",
      },
    },
    present: {
      // De' chhak			Presente
      translation: {
        I: <Translate id={"i_laugh"}>I laugh</Translate>, // Yo me rio
        You: <Translate id={"you_laugh"}>You laugh</Translate>, // Tu te reies
        he_she: <Translate id={"he_she_laughs"}>He/She laughs</Translate>, // El/Ella se rie
        We: <Translate id={"we_laugh"}>We laugh</Translate>, // Nosotros reimos
        You_all: <Translate id={"you_all_laugh"}>You all laugh</Translate>, // Ustedes se rein
        They: <Translate id={"they_laugh"}>They laugh</Translate>, // Ellos rein
        Everyone: <Translate id={"everyone_laughs"}>Everyone laughs</Translate>, // Todos nos reimos
      },
      zapoteco: {
        I: "Nhed chhxhill",
        You: "Lhe chhxhillu",
        he_she: "Leba chhxhillba",
        We: "Chhaw chhxhillchhu",
        You_all: "Lhe'e chhxhill'lhe",
        They: "Lekba chhxhillkba",
        Everyone: "Yugchhu chhxhillchhu",
      },
    },
    future: {
      // De' ze gak			Futuro
      translation: {
        I: <Translate id={"i_will_laugh"}>I will laugh</Translate>, // Yo me voy a reir
        You: <Translate id={"you_will_laugh"}>You will laugh</Translate>, // Tu te vas a reir
        he_she: (
          <Translate id={"he_she_will_laugh"}>He/she will laugh</Translate>
        ), // El/ella se va a reir
        We: <Translate id={"we_will_laugh"}>We will laugh</Translate>, // Nosotros nos vamos a reir
        You_all: (
          <Translate id={"you_all_will_laugh"}>You all will laugh</Translate>
        ), // Ustedes se van a reir
        They: <Translate id={"they_will_laugh"}>They will laugh</Translate>, // Ellos se van a reir
        Everyone: (
          <Translate id={"everyone_will_laugh"}>Everyone will laugh</Translate>
        ), // Todos nos vamos a reir
      },
      zapoteco: {
        I: "Nhed Uxhill",
        You: "Lhe uxhillu",
        he_she: "Leba uxhilba",
        We: "Chhaw uxhillchhu",
        You_all: "Lhe'e uxhill'lhe",
        They: "Lekba uxhillkba",
        Everyone: "Yugchhu uxhillchhu",
      },
    },
  },
  {
    verb: "chhenda",
    past: {
      // De' Baude			Pasado
      translation: {
        I: <Translate id={"i_wanted"}>I wanted</Translate>,
        You: <Translate id={"you_wanted"}>You wanted</Translate>,
        he_she: <Translate id={"he_she_wanted"}>He/She wanted</Translate>,
        We: <Translate id={"we_wanted"}>We wanted</Translate>,
        You_all: <Translate id={"you_all_wanted"}>You all wanted</Translate>,
        They: <Translate id={"they_wanted"}>They wanted</Translate>,
        Everyone: <Translate id={"everyone_wanted"}>Everyone wanted</Translate>,
      },
      zapoteco: {
        I: "Nhed gunda",
        You: "Lhe gundu",
        he_she: "Leba gunheba",
        We: "Chhaw gunhechhu",
        You_all: "Lhe'e gunhelhe",
        They: "Lekba gunkeba",
        Everyone: "Yugchhu gunhechhu",
      },
    },
    present: {
      // De' chhak			Presente
      translation: {
        I: <Translate id={"i_want"}>I want</Translate>,
        You: <Translate id={"you_want"}>You want</Translate>,
        he_she: <Translate id={"he_she_wants"}>He/She wants</Translate>,
        We: <Translate id={"we_want"}>We want</Translate>,
        You_all: <Translate id={"you_all_want"}>You all want</Translate>,
        They: <Translate id={"they_want"}>They want</Translate>,
        Everyone: <Translate id={"everyone_wants"}>Everyone wants</Translate>,
      },
      zapoteco: {
        I: "Nhed chhenda",
        You: "Lhe chhendu",
        he_she: "Leba chhenheba",
        We: "Chhaw chhenhechhu",
        You_all: "Lhe'e chhenhelhe",
        They: "Lekba chhenkeba",
        Everyone: "Yugchhu chhenhechhu",
      },
    },
    future: {
      // De' ze gak			Futuro
      translation: {
        I: <Translate id={"i_will_want"}>I will want</Translate>,
        You: <Translate id={"you_will_want"}>You will want</Translate>,
        he_she: <Translate id={"he_she_will_want"}>He/she will want</Translate>,
        We: <Translate id={"we_will_want"}>We will want</Translate>,
        You_all: (
          <Translate id={"you_all_will_want"}>You all will want</Translate>
        ),
        They: <Translate id={"they_will_want"}>They will want</Translate>,
        Everyone: (
          <Translate id={"everyone_will_want"}>Everyone will want</Translate>
        ),
      },
      zapoteco: {
        I: "Nhed genda",
        You: "Lhe gendu",
        he_she: "Leba genheba",
        We: "Chhaw genhechhu",
        You_all: "Lhe'e genhelhe",
        They: "Lekba genkeba",
        Everyone: "Yugchhu genhechhu",
      },
    },
  },
  {
    verb: "kuez",
    past: {
      // De' Baude			Pasado
      translation: {
        I: <Translate id={"i_waited"}>I waited</Translate>,
        You: <Translate id={"you_waited"}>You waited</Translate>,
        he_she: <Translate id={"he_she_waited"}>He/She waited</Translate>,
        We: <Translate id={"we_waited"}>We waited</Translate>,
        You_all: <Translate id={"you_all_waited"}>You all waited</Translate>,
        They: <Translate id={"they_waited"}>They waited</Translate>,
        Everyone: <Translate id={"everyone_waited"}>Everyone waited</Translate>,
      },
      zapoteco: {
        I: "Nhed wlhez",
        You: "Lhe wlhezu",
        he_she: "Leba wlhezba",
        We: "Chhaw wlhezchhu",
        You_all: "Lhe'e wlhezlhe",
        They: "Lekba wlhezkba",
        Everyone: "Yugchhu wlhezchhu",
      },
    },
    present: {
      // De' chhak			Presente
      translation: {
        I: <Translate id={"i_wait"}>I wait</Translate>,
        You: <Translate id={"you_wait"}>You wait</Translate>,
        he_she: <Translate id={"he_she_waits"}>He/She waits</Translate>,
        We: <Translate id={"we_wait"}>We wait</Translate>,
        You_all: <Translate id={"you_all_wait"}>You all wait</Translate>,
        They: <Translate id={"they_wait"}>They wait</Translate>,
        Everyone: <Translate id={"everyone_waits"}>Everyone waits</Translate>,
      },
      zapoteco: {
        I: "Nhed chhbez",
        You: "Lhe chhbezu",
        he_she: "Leba chhbezba",
        We: "Chhaw chhbezchhu",
        You_all: "Lhe'e chhbezlhe",
        They: "Lekba chhesebezkba",
        Everyone: "Yugchhu chhbezchhu",
      },
    },
    future: {
      // De' ze gak			Futuro
      translation: {
        I: <Translate id={"i_will_wait"}>I will wait</Translate>,
        You: <Translate id={"you_will_wait"}>You will wait</Translate>,
        he_she: <Translate id={"he_she_will_wait"}>He/she will wait</Translate>,
        We: <Translate id={"we_will_wait"}>We will wait</Translate>,
        You_all: (
          <Translate id={"you_all_will_wait"}>You all will wait</Translate>
        ),
        They: <Translate id={"they_will_wait"}>They will wait</Translate>,
        Everyone: (
          <Translate id={"everyone_will_wait"}>Everyone will wait</Translate>
        ),
      },
      zapoteco: {
        I: "Nhed kuez",
        You: "Lhe kuezu",
        he_she: "Leba kuezba",
        We: "Chhaw kuezchhu",
        You_all: "Lhe'e kuezlhe",
        They: "Lekba kuezkba",
        Everyone: "Yugchhu kuezchhu",
      },
    },
  },
];
