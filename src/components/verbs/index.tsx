import React, { ReactElement, useState } from "react";
import { AudioCard } from "@site/src/components/audiocard";
import { Word } from "@site/src/components/word";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Translate from "@docusaurus/Translate";
import Audio from "@site/src/components/Audio";
import styles from "./styles.module.css";

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

export interface VerbConjugation {
  I: ReactElement | string;
  You: ReactElement | string;
  he_she: ReactElement | string;
  We: ReactElement | string;
  You_all: ReactElement | string;
  They: ReactElement | string;
  Everyone: ReactElement | string;
}

export interface VerbTenses {
  verb: string;
  past: {
    translation: VerbConjugation;
    zapoteco: VerbConjugation;
  };
  present: {
    translation: VerbConjugation;
    zapoteco: VerbConjugation;
  };
  future: {
    translation: VerbConjugation;
    zapoteco: VerbConjugation;
  };
}
export interface VerbConjugationProps {
  verbs: VerbTenses[];
}

export const VerbConjugationTable: React.FC<VerbConjugationProps> = (
  props,
): ReactElement => {
  const { verbs, ...rest } = props;

  return (
    <>
      {verbs.map((verb, idx) => (
        <>
          <h2>{verb.verb}</h2>
          <TableContainer component={Paper} className={"item shadow--tl"}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align={"center"}>
                    <Translate id={"Past tense"} />
                  </TableCell>
                  <TableCell
                    className={styles.tableRightBorder}
                    align={"center"}
                  >
                    De' baude
                  </TableCell>
                  <TableCell align={"center"}>
                    <Translate id={"Present tense"} />
                  </TableCell>
                  <TableCell
                    className={styles.tableRightBorder}
                    align={"center"}
                  >
                    De' chhak
                  </TableCell>
                  <TableCell align={"center"}>
                    <Translate id={"Future tense"} />
                  </TableCell>
                  <TableCell align={"center"}>De' ze gak</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.I}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.I}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.I}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.I}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.I}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.I}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.You}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.You}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.You}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.You}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.You}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.You}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.he_she}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.he_she}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.he_she}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.he_she}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.he_she}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.he_she}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.We}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.We}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.We}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.We}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.We}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.We}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.You_all}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.You_all}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.You_all}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.You_all}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.You_all}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.You_all}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.They}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.They}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.They}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.They}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.They}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.They}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.past?.translation?.Everyone}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.past?.zapoteco?.Everyone}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.present?.translation?.Everyone}
                  </TableCell>
                  <TableCell className={styles.tableRightBorder} align="center">
                    {verb.present?.zapoteco?.Everyone}
                  </TableCell>

                  <TableCell component="th" scope="row" align={"center"}>
                    {verb.future?.translation?.Everyone}
                  </TableCell>
                  <TableCell align="center">
                    {verb.future?.zapoteco?.Everyone}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ))}
    </>
  );
};
