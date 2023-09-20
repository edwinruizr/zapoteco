import React, { useEffect, useState } from "react";
import Translate from "@docusaurus/Translate";
import { AudioCard } from "@site/src/components/audiocard";
import { TbSortAZ, TbSortZA } from "react-icons/tb";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Animal {
  zapoteco: string;
  translation: any;
  description?: any;
  audio?: any;
  img?: string;
  Svg?: any;
}

const animals: Animal[] = [
  {
    zapoteco: "riu",
    img: require("@site/static/img/cricket.svg").default,
    translation: <Translate id="cricket" />,
    audio: require("@site/static/audio/riu.mp3").default,
    Svg: require("@site/static/img/garlic.svg").default,
  },
  {
    zapoteco: "kush",
    img: require("@site/static/img/pig.svg").default,
    translation: <Translate id="pig" />,
    audio: require("@site/static/audio/kush.mp3").default,
  },
  {
    zapoteco: "bzin",
    img: require("@site/static/img/mouse.svg").default,
    translation: <Translate id="mouse" />,
    audio: require("@site/static/audio/bzin.mp3").default,
  },
  {
    zapoteco: "jeid",
    img: require("@site/static/img/chicken.svg").default,
    translation: <Translate id="chicken" />,
    audio: require("@site/static/audio/jeid.mp3").default,
  },
  {
    zapoteco: "xhid",
    img: require("@site/static/img/cat.svg").default,
    translation: <Translate id="cat" />,
    audio: require("@site/static/audio/xhid.mp3").default,
  },
];
export default function Animals() {
  const [sortBy, setSortBy] = useState<string>("");
  const [animalItems, setAnimalItems] = useState(
    animals.reduce(
      (arr, item, idx) => (arr[(idx / 2) | 0] ??= []).push(item) && arr,
      [],
    ),
  );

  useEffect(() => {
    let sorted = [...animals];
    if (sortBy == "up") {
      sorted = sorted.sort(ascending);
    } else if (sortBy == "down") {
      sorted = sorted.sort(descending);
    }

    setAnimalItems(
      sorted.reduce(
        (arr, item, idx) => (arr[(idx / 2) | 0] ??= []).push(item) && arr,
        [],
      ),
    );
  }, [sortBy]);
  return (
    <div className="container">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="sort"
          id="sort-select"
          value={sortBy}
          label="Sort"
          onChange={(event: SelectChangeEvent) => {
            setSortBy(event.target.value as string);
          }}
        >
          <MenuItem value={"up"}>
            <TbSortAZ />
          </MenuItem>
          <MenuItem value={"down"}>
            <TbSortZA />
          </MenuItem>
        </Select>
      </FormControl>
      {animalItems?.map((data) => {
        return (
          <div className="row">
            {data?.map((props, idx) => (
              <AudioCard
                title={props.zapoteco}
                body={props.translation}
                audio={props.audio}
                footer={props.description}
                Svg={props.img}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function ascending(a: Animal, b: Animal) {
  const nameA = a.zapoteco.toLowerCase(); // ignore upper and lowercase
  const nameB = b.zapoteco.toLowerCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

function descending(a: Animal, b: Animal) {
  const nameA = a.zapoteco.toLowerCase(); // ignore upper and lowercase
  const nameB = b.zapoteco.toLowerCase(); // ignore upper and lowercase
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
