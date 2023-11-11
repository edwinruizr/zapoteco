import React, { ReactElement } from "react";
import { Divider, Grid } from "@mui/material";

export interface VerticallyDividedContentProps {
  leftContent: ReactElement;
  rightContent: ReactElement;
}

export const VerticallyDividedContent: React.FC<
  VerticallyDividedContentProps
> = (props): ReactElement => {
  const { leftContent, rightContent, ...rest } = props;

  return (
    <Grid container>
      <Grid
        item
        xs
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
      >
        {leftContent}
      </Grid>
      <Divider orientation="vertical" variant={"middle"} flexItem></Divider>
      <Grid
        item
        xs
        justifyContent="center"
        alignItems="center"
        textAlign={"center"}
      >
        {rightContent}
      </Grid>
    </Grid>
  );
};
