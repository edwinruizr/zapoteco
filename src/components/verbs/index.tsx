import React, { ReactElement, useEffect, useState } from "react";
import { AudioCard } from "@site/src/components/audiocard";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Audio from "@site/src/components/Audio";
import TableContainer from "@mui/material/TableContainer";
import Translate from "@docusaurus/Translate";
import { Word } from "@site/src/components/word";

export interface VerbsProps {
  verbs?: Word[];
}

export const Verbs: React.FC<VerbsProps> = (props): ReactElement => {
  const { verbs, ...rest } = props;

  const [sortBy, setSortBy] = useState<string>("");
  const [items, setItems] = useState(
    verbs.reduce(
      (arr, item, idx) => (arr[(idx / 2) | 0] ??= []).push(item) && arr,
      [],
    ),
  );

  return (
    <div className="container">
      {items?.map((data) => {
        return (
          <div className="row">
            {data?.map((props) => (
              <AudioCard
                title={props.zapoteco}
                body={props.word}
                audio={props.audio}
                Svg={props.img}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
