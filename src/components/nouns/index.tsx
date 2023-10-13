import React, { ReactElement, useEffect, useState } from "react";
import { AudioCard } from "@site/src/components/audiocard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { TbSortAZ, TbSortZA } from "react-icons/tb";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Audio from "@site/src/components/Audio";
import TableContainer from "@mui/material/TableContainer";
import Translate from "@docusaurus/Translate";

export interface Noun {
  noun: ReactElement;
  zapoteco: string;
  audio?: any;
  img?: any;
}

export interface NounsProps {
  nouns?: Noun[];
}

export const Nouns: React.FC<NounsProps> = (props): ReactElement => {
  const { nouns, ...rest } = props;

  const [sortBy, setSortBy] = useState<string>("");
  const [items, setItems] = useState(
    nouns.reduce(
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
                body={props.noun}
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

export const Pronouns: React.FC<NounsProps> = (props): ReactElement => {
  const { nouns, ...rest } = props;

  return (
    <TableContainer component={Paper} className={"item shadow--tl"}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align={"center"}>
              <Translate id={"Pronoun"} />
            </TableCell>
            <TableCell align={"center"}>Zapoteco</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nouns.map((noun, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align={"center"}>
                {noun.noun}
              </TableCell>
              <TableCell align="center">
                {noun.zapoteco} {noun.audio && <Audio src={noun.audio} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
