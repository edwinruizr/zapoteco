import React, { ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Audio from "@site/src/components/Audio";
import {
  shi_gayua,
  shinhu_gayua_tuchhua,
  tugalj_gayua_taplhalj_shiin_shun,
} from "@site/src/const/audio";

const zapotecoNumbers = [
  "", // 0
  "tu", // 1 etc.
  "chup",
  "shun",
  "tap",
  "gay",
  "xhup",
  "gall",
  "xun",
  "ga",
  "shi",
  "shnhej",
  "shillin",
  "shiin",
  "shda",
  "shinhu",
  "shiin tú",
  "shiin chup",
  "shin shun",
  "tu galj",
  "galj",
  "tu chhua",
  "chup echhua",
  "shun echhua",
  "tap echhua",
  "gay echhua",
  "xhup echhua",
  "gall echhua",
  "xun echhua",
  "ga chhua",
  "shi chhua",
  "shnjej echhua",
  "shillin echhua",
  "shiin chhua",
  "shda chhua",
  "shunhu chhua",
  "shiin tú chhua",
  "shiinchup echhua",
  "shinshun echhua",
  "tugalj echhua",
  "chua",
  "tu yun",
  "chup eyun",
  "shun eyun",
  "tap eyun",
  "gay eyun",
  "xhup eyun",
  "gall eyun",
  "xunh eyun",
  "ga yun",
  "shi yun",
  "shnhej eyun",
  "shillin eyun",
  "shiin eyun",
  "shda yun",
  "shinhu yun",
  "shin tu yun",
  "shiin chup eyun",
  "shiin shun eyun",
  "tu galj eyun",
  "gayún",
  "gayun tu",
  "gayun chup",
  "gayun shun",
  "gayun tap",
  "gayun gay",
  "gayun xhup",
  "gayun gall",
  "gayun xun",
  "gayun ga",
  "gayun shi",
  "gayun shnhej",
  "gayun shillin",
  "gayun shiin",
  "gayun shda",
  "gayun shinhu",
  "gayun shiin tú",
  "gayun shiin shup",
  "gayun shiin shun",
  "gayun tu galj",
  "taplhalj",
  "taplhalj tu",
  "taplhalj chup",
  "taplhalj shun",
  "taplhalj tap",
  "taplhalj gay",
  "taplhalj shup",
  "taplhalj gash",
  "taplhalj xuun",
  "taplhalj gaa",
  "taplhalj shii",
  "taplhalj shnej",
  "taplhalj shishin",
  "taplhalj shiin",
  "taplhalj shdaa",
  "taplhalj shiinu",
  "taplhalj shiin tú",
  "taplhalj shiin chup",
  "taplhalj shiin shun",
  "taplhalj tu galj",
  "tu gayua", // 100
];

export interface NumbersData {
  number: string;
  zapoteco: string;
  audio?: any;
}

export interface NumbersTableProps {}

export const NumbersTable: React.FC<NumbersTableProps> = (
  props,
): ReactElement => {
  const { ...rest } = props;

  let data = numbers();

  return (
    <div className="flex">
      <div className="row">
        {data.map((val) => (
          <div className="col margin--md">
            <TableContainer component={Paper} className={"item shadow--tl"}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="right">Zapoteco</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {val.map((row) => (
                    <TableRow
                      key={row.number}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.number}
                      </TableCell>
                      <TableCell align="right">
                        {row.zapoteco} {row.audio && <Audio src={row.audio} />}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

function numbers() {
  let d: NumbersData[][] = [[], [], [], [], []];
  for (let i = 1; i <= 100; i++) {
    let index = Math.floor((i - 1) / 20);
    d[index].push({
      number: i.toString(),
      audio: require("@site/static/audio/" + i + ".mp3").default,
      zapoteco: zapotecoNumbers[i],
    });
  }

  d[5] = [
    {
      number: "1000",
      zapoteco: "shi gayua",
      audio: shi_gayua,
    },
    {
      number: "1521",
      zapoteco: "shinhu gayua tuchhua",
      audio: shinhu_gayua_tuchhua,
    },
    {
      number: "1998",
      zapoteco: "tugalj gayua taplhalj shiin shun",
      audio: tugalj_gayua_taplhalj_shiin_shun,
    },
  ];

  return d;
}
