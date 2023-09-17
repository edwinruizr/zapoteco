import React from "react";
import styles from "@site/src/components/herbalcard/styles.module.css";
import Chip from "@mui/material/Chip";
import Stack, { StackProps } from "@mui/material/Stack";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";

export interface FilterProps extends StackProps {
  filters: string[];
  onDelete: (tag: string) => void;
}

export const Filter: React.FC<FilterProps> = (props) => {
  const { filters, onDelete, ...rest } = props;

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0.5}
      {...rest}
    >
      <b>
        <Translate id="filter">Filters:</Translate>
      </b>
      {filters?.map((val: string) => {
        return (
          <Chip
            className={"margin-left--xs"}
            variant="outlined"
            label={val}
            onDelete={() => onDelete(val)}
          />
        );
      })}
    </Stack>
  );
};
