import Translate from "@docusaurus/Translate";
import React from "react";
import { Word } from "@site/src/components/word";
import { VerbTenses } from "@site/src/components/verbs";

export const verbs: Word[] = [
  {
    zapoteco: "chhenhe",
    word: <Translate id={"want"} />, // querer
  },
  {
    zapoteco: "chhaw",
    word: <Translate id={"eat"} />, // comer
  },
  {
    zapoteco: "weyá",
    word: <Translate id={"dance"} />, // bailar
    img: require("@site/static/img/dance.png").img,
  },
  {
    zapoteco: "chhbell",
    word: <Translate id={"cry"} />, // llorar
  },
  {
    zapoteco: "chhxhita",
    word: <Translate id={"jump"} />, // brincar
  },
  {
    zapoteco: "wexhill",
    word: <Translate id={"laugh"} />, // reir
  },
  {
    zapoteco: "guzj",
    word: <Translate id={"shower"} />, // bañar
  },
  {
    zapoteco: "guz", // TODO: ask about this
    word: <Translate id={"sow"} />, // sembrar
  },
  {
    zapoteco: "witj",
    word: <Translate id={"play"} />, // jugar
  },
  {
    zapoteco: "weteis",
    word: <Translate id={"sleep"} />, // dormir
  },
  // TODO: ask about these spelling
  {
    zapoteco: "bxonhj",
    word: <Translate id={"run"} />, // correr
  },
  {
    zapoteco: "bzoj",
    word: <Translate id={"write"} />, // escribir
  },
  {
    zapoteco: "bzi",
    word: <Translate id={"clean"} />, // limpiar
  },
  {
    zapoteco: "budil/bdil",
    word: <Translate id={"fight"} />, // pelear
  },
  {
    zapoteco: "wezad",
    word: <Translate id={"practice"} />, // practicar
  },
  {
    zapoteco: "bzad",
    word: <Translate id={"study"} />, // estudiar
  },
  {
    zapoteco: "chhehilh",
    word: <Translate id={"look"} />, // buscar
  },
  {
    zapoteco: "xullia",
    word: <Translate id={"look"} />, // mirar
  },
  {
    zapoteco: "jezilalla",
    word: <Translate id={"rest"} />, // descansar
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
        I: <Translate id={"i_wanted"}>I wanted</Translate>, // Yo me rei
        You: <Translate id={"you_wanted"}>You wanted</Translate>, // Tu te reiste
        he_she: <Translate id={"he_she_wanted"}>He/She wanted</Translate>, // El/Ella se rio
        We: <Translate id={"we_wanted"}>We wanted</Translate>, // Nosotros reimos
        You_all: <Translate id={"you_all_wanted"}>You all wanted</Translate>, // Ustedes se rieron
        They: <Translate id={"they_wanted"}>They wanted</Translate>, // Ellos se rieron
        Everyone: <Translate id={"everyone_wanted"}>Everyone wanted</Translate>, // Todos reimos
      },
      zapoteco: {
        I: "Nhed gunda",
        You: "Lhe gundu",
        he_she: "Leba guneba",
        We: "Chhaw gunechhu",
        You_all: "Lhe'e gunelhe",
        They: "Lekba gunkeba",
        Everyone: "Yugchhu gunechhu",
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
        he_she: "Leba chhenaba",
        We: "Chhaw chhenechhu",
        You_all: "Lhe'e chhennelhe",
        They: "Lekba chhenkeba",
        Everyone: "Yugchhu chhenechhu",
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
        I: "Nhed ganda",
        You: "Lhe gandu",
        he_she: "Leba geneba",
        We: "Chhaw genechhu",
        You_all: "Lhe'e genelhe",
        They: "Lekba genkeba",
        Everyone: "Yugchhu genechhu",
      },
    },
  },
  {
    verb: "kuez",
    past: {
      // De' Baude			Pasado
      translation: {
        I: <Translate id={"i_waited"}>I waited</Translate>, // Yo me rei
        You: <Translate id={"you_waited"}>You waited</Translate>, // Tu te reiste
        he_she: <Translate id={"he_she_waited"}>He/She waited</Translate>, // El/Ella se rio
        We: <Translate id={"we_waited"}>We waited</Translate>, // Nosotros reimos
        You_all: <Translate id={"you_all_waited"}>You all waited</Translate>, // Ustedes se rieron
        They: <Translate id={"they_waited"}>They waited</Translate>, // Ellos se rieron
        Everyone: <Translate id={"everyone_waited"}>Everyone waited</Translate>, // Todos reimos
      },
      zapoteco: {
        I: "Nhed blez",
        You: "Lhe blezu",
        he_she: "Leba blezba",
        We: "Chhaw blezchhu",
        You_all: "Lhe'e blezlhe",
        They: "Lekba blezekba",
        Everyone: "Yugchhu blezchhu",
      },
    },
    present: {
      // De' chhak			Presente
      translation: {
        I: <Translate id={"i_wait"}>I wait</Translate>, // Yo me rio
        You: <Translate id={"you_wait"}>You wait</Translate>, // Tu te reies
        he_she: <Translate id={"he_she_waits"}>He/She waits</Translate>, // El/Ella se rie
        We: <Translate id={"we_wait"}>We wait</Translate>, // Nosotros reimos
        You_all: <Translate id={"you_all_wait"}>You all wait</Translate>, // Ustedes se rein
        They: <Translate id={"they_wait"}>They wait</Translate>, // Ellos rein
        Everyone: <Translate id={"everyone_waits"}>Everyone waits</Translate>, // Todos nos reimos
      },
      zapoteco: {
        I: "Nhed shebz",
        You: "Lhe shebzu",
        he_she: "Leba shebzba",
        We: "Chhaw shebzchhu",
        You_all: "Lhe'e shebzlhe",
        They: "Lekba shebzekba",
        Everyone: "Yugchhu shebzchhu",
      },
    },
    future: {
      // De' ze gak			Futuro
      translation: {
        I: <Translate id={"i_will_wait"}>I will wait</Translate>, // Yo me voy a reir
        You: <Translate id={"you_will_wait"}>You will wait</Translate>, // Tu te vas a reir
        he_she: <Translate id={"he_she_will_wait"}>He/she will wait</Translate>, // El/ella se va a reir
        We: <Translate id={"we_will_wait"}>We will wait</Translate>, // Nosotros nos vamos a reir
        You_all: (
          <Translate id={"you_all_will_wait"}>You all will wait</Translate>
        ), // Ustedes se van a reir
        They: <Translate id={"they_will_wait"}>They will wait</Translate>, // Ellos se van a reir
        Everyone: (
          <Translate id={"everyone_will_wait"}>Everyone will wait</Translate>
        ), // Todos nos vamos a reir
      },
      zapoteco: {
        I: "Nhed kuez",
        You: "Lhe kuezu",
        he_she: "Leba kuezba",
        We: "Chhaw kuezchhu",
        You_all: "Lhe'e kuezlhe",
        They: "Lekba kuezekba",
        Everyone: "Yugchhu kuezchhu",
      },
    },
  },
];
