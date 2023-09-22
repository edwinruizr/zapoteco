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
  {
    zapoteco: "begupa",
    translation: <Translate id="armadillo" />,
    img: require("@site/static/img/armadillo.svg").default,
    // audio: require("@site/static/audio/begupa.mp3").default,
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
    // audio: require("@site/static/audio/bllinyixa.mp3").default,
  },
  {
    zapoteco: "bsia",
    translation: <Translate id="eagle" />,
    img: require("@site/static/img/eagle.svg").default,
    // audio: require("@site/static/audio/bsia.mp3").default,
  },
  {
    zapoteco: "bisha'", // Bisha'
    translation: <Translate id="grasshopper" />,
    img: require("@site/static/img/grasshopper.svg").default,
    // audio: require("@site/static/audio/bisha.mp3").default,
  },
  {
    zapoteco: "bgug",
    translation: <Translate id="dove" />,
    img: require("@site/static/img/dove.svg").default,
    // audio: require("@site/static/audio/bgug.mp3").default,
  },
  {
    zapoteco: "beit",
    translation: <Translate id="skunk" />,
    img: require("@site/static/img/skunk.svg").default,
    // audio: require("@site/static/audio/beit.mp3").default,
  },
  {
    zapoteco: "bechhez",
    translation: <Translate id="squirrel" />,
    img: require("@site/static/img/squirrel.svg").default,
    // audio: require("@site/static/audio/bechhez.mp3").default,
  },
  {
    zapoteco: "btau",
    translation: <Translate id="quail" />,
    img: require("@site/static/img/quail.svg").default,
    // audio: require("@site/static/audio/btau.mp3").default,
  },
  {
    zapoteco: "bechhjxig",
    translation: <Translate id="chachalaca" />,
    // img: require("@site/static/img/chachalaca.svg").default,
    // audio: require("@site/static/audio/bechhjxig.mp3").default,
  },
  {
    zapoteco: "bexhchhusha'",
    translation: <Translate id="hummingbird" />,
    img: require("@site/static/img/hummingbird.svg").default,
    // audio: require("@site/static/audio/bexhchhusha.mp3").default,
  },
  {
    zapoteco: "bez",
    translation: <Translate id="fox" />,
    img: require("@site/static/img/fox.svg").default,
    // audio: require("@site/static/audio/bez.mp3").default,
  },
  {
    zapoteco: "bel",
    translation: <Translate id="fish" />,
    img: require("@site/static/img/fish.svg").default,
    // audio: require("@site/static/audio/bel.mp3").default,
  },
  {
    zapoteco: "chube'",
    translation: <Translate id="crab" />,
    img: require("@site/static/img/crab.svg").default,
    // audio: require("@site/static/audio/chube.mp3").default,
  },
  {
    zapoteco: "blull",
    translation: <Translate id="toad" />,
    img: require("@site/static/img/toad.svg").default,
    // audio: require("@site/static/audio/blull.mp3").default,
  },
  {
    zapoteco: "bechhj",
    translation: <Translate id="turkey" />,
    img: require("@site/static/img/turkey.svg").default,
    // audio: require("@site/static/audio/bechhj.mp3").default,
  },
  {
    zapoteco: "byin",
    translation: <Translate id="bird" />,
    img: require("@site/static/img/bird.svg").default,
    // audio: require("@site/static/audio/byin.mp3").default,
  },
  {
    zapoteco: "bel",
    translation: <Translate id="snake" />,
    img: require("@site/static/img/snake.svg").default,
    // audio: require("@site/static/audio/bel.mp3").default,
  },
  {
    zapoteco: "baad",
    translation: <Translate id="duck" />,
    img: require("@site/static/img/duck.svg").default,
    // audio: require("@site/static/audio/baad.mp3").default,
  },
  {
    zapoteco: "wexhib",
    translation: <Translate id="roadrunner" />,
    // img: require("@site/static/img/roadrunner.svg").default,
    // audio: require("@site/static/audio/wexhib.mp3").default,
  },
  {
    zapoteco: "washa",
    translation: <Translate id="lizard" />,
    img: require("@site/static/img/lizard.svg").default,
    // audio: require("@site/static/audio/washa.mp3").default,
  },
  {
    zapoteco: "gun",
    translation: <Translate id="bull" />,
    img: require("@site/static/img/bull.svg").default,
    // audio: require("@site/static/audio/gun.mp3").default,
  },
  {
    zapoteco: "beku",
    translation: <Translate id="dog" />,
    img: require("@site/static/img/dog.svg").default,
    // audio: require("@site/static/audio/beku.mp3").default,
  },
  {
    zapoteco: "beshjia",
    translation: <Translate id="hare" />,
    img: require("@site/static/img/hare.svg").default,
    // audio: require("@site/static/audio/beshjia.mp3").default,
  },
  {
    zapoteco: "bell",
    translation: <Translate id="cougar" />,
    img: require("@site/static/img/cougar.svg").default,
    // audio: require("@site/static/audio/bell.mp3").default,
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
