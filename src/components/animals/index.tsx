import React, { useEffect, useState } from "react";
import Translate from "@docusaurus/Translate";
import { AudioCard } from "@site/src/components/audiocard";
import { TbSortAZ, TbSortZA } from "react-icons/tb";
import {
  begupa,
  beku,
  bllinyixa,
  bsia,
  bisha,
  bgug,
  beit,
  bechhez,
  btau,
  bechhjxig,
  bexhchhusha,
  bel,
  bel_snake,
  chube,
  blull,
  bechhj,
  byin,
  baad,
  bez,
  wexhib,
  gun,
  washa,
  beshjia,
  bell,
} from "@site/src/const/audio";
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
  {
    zapoteco: "begupa",
    translation: <Translate id="armadillo" />,
    img: require("@site/static/img/armadillo.svg").default,
    audio: begupa,
  },
  {
    zapoteco: "bew",
    translation: <Translate id="macaw" />,
    img: require("@site/static/img/macaw.svg").default,
    // audio: require("@site/static/audio/bew.mp3").default,
  },
  {
    zapoteco: "bllinyixa",
    translation: <Translate id="deer" />,
    img: require("@site/static/img/deer.svg").default,
    audio: bllinyixa,
  },
  {
    zapoteco: "bsia",
    translation: <Translate id="eagle" />,
    img: require("@site/static/img/eagle.svg").default,
    audio: bsia,
  },
  {
    zapoteco: "bisha'", // Bisha'
    translation: <Translate id="grasshopper" />,
    img: require("@site/static/img/grasshopper.svg").default,
    audio: bisha,
  },
  {
    zapoteco: "bgug",
    translation: <Translate id="dove" />,
    img: require("@site/static/img/dove.svg").default,
    audio: bgug,
  },
  {
    zapoteco: "beit",
    translation: <Translate id="skunk" />,
    img: require("@site/static/img/skunk.svg").default,
    audio: beit,
  },
  {
    zapoteco: "bechhez",
    translation: <Translate id="squirrel" />,
    img: require("@site/static/img/squirrel.svg").default,
    audio: bechhez,
  },
  {
    zapoteco: "btau",
    translation: <Translate id="quail" />,
    img: require("@site/static/img/quail.svg").default,
    audio: btau,
  },
  {
    zapoteco: "bechhjxig",
    translation: <Translate id="chachalaca" />,
    img: require("@site/static/img/chachalaca.svg").default,
    audio: bechhjxig,
  },
  {
    zapoteco: "bexhchhusha'",
    translation: <Translate id="hummingbird" />,
    img: require("@site/static/img/hummingbird.svg").default,
    audio: bexhchhusha,
  },
  {
    zapoteco: "bez",
    translation: <Translate id="fox" />,
    img: require("@site/static/img/fox.svg").default,
    audio: bez,
  },
  {
    zapoteco: "bel",
    translation: <Translate id="fish" />,
    img: require("@site/static/img/fish.svg").default,
    audio: bel,
  },
  {
    zapoteco: "chube'",
    translation: <Translate id="crab" />,
    img: require("@site/static/img/crab.svg").default,
    audio: chube,
  },
  {
    zapoteco: "blull",
    translation: <Translate id="toad" />,
    img: require("@site/static/img/toad.svg").default,
    audio: blull,
  },
  {
    zapoteco: "bechhj",
    translation: <Translate id="turkey" />,
    img: require("@site/static/img/turkey.svg").default,
    audio: bechhj,
  },
  {
    zapoteco: "byin",
    translation: <Translate id="bird" />,
    img: require("@site/static/img/bird.svg").default,
    audio: byin,
  },
  {
    zapoteco: "bel",
    translation: <Translate id="snake" />,
    img: require("@site/static/img/snake.svg").default,
    audio: bel_snake,
  },
  {
    zapoteco: "baad",
    translation: <Translate id="duck" />,
    img: require("@site/static/img/duck.svg").default,
    audio: baad,
  },
  {
    zapoteco: "wexhib",
    translation: <Translate id="roadrunner" />,
    img: require("@site/static/img/roadrunner.svg").default,
    audio: wexhib,
  },
  {
    zapoteco: "washa",
    translation: <Translate id="lizard" />,
    img: require("@site/static/img/lizard.svg").default,
    audio: washa,
  },
  {
    zapoteco: "gun",
    translation: <Translate id="bull" />,
    img: require("@site/static/img/bull.svg").default,
    audio: gun,
  },
  {
    zapoteco: "beku",
    translation: <Translate id="dog" />,
    img: require("@site/static/img/dog.svg").default,
    audio: beku,
  },
  {
    zapoteco: "beshjia",
    translation: <Translate id="hare" />,
    img: require("@site/static/img/hare.svg").default,
    audio: beshjia,
  },
  {
    zapoteco: "bell",
    translation: <Translate id="cougar" />,
    img: require("@site/static/img/cougar.svg").default,
    audio: bell,
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
