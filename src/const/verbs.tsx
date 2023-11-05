import Translate from "@docusaurus/Translate";
import React from "react";
import { Word } from "@site/src/components/word";

// Yug de chhunchhu		Cosas que hacemos
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
//
// Conjugacion del verbo reir en los tres tiempos verbales
// De' chhak			Presente
// Nhed chhxhill			Yo me rio
// Lhe chhxhillu			Tu te reies
// Leba chhxhillba			El/Ella se rie
// Chhaw chhxhillchhu			Nosotros reimos
// Lhe'e chhxhill'lhe			Ustedes se rien
// Lekba chhxhillkba			Ellos rien
// Yugchhu chhxhillchhu			Todos nos reimos
//
// De' Baude			Pasado
// Nhed bxhill			Yo me rei
// Lhe bxhillu			Tu te reiste
// Leba bxhillba			El/Ella se rio
// Chhaw bxhillchhu			Nosotros reimos
// Lhe'e bxhill'lhe			Ustedes se rieron
// Lekba bxhillkba			Ellos se rieron
// Yugchhu bxhillchhu			Todos reimos
//
// De' ze gak			Futuro
// Nhed Uxhill			Yo me voy a reir
// Lhe uxhillu			Tu te vas a reir
// Leba uxhilba			El/Ella se va a reir
// Chhaw uxhillchhu			Nosotros nos vamos a reir
// Lhe'e uxhill'lhe			Ustedes se van a reir
// Lekba uxhillkba			Ellos se van a reir
// Yugchhu uxhillchhu			Todos nos vamos a reir
