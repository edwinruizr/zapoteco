import { ReactElement } from "react";

export interface Word {
  word: ReactElement; // Ex: <Translate id="english_translation"/>
  zapoteco: string;
  audio?: any;
  img?: any;
}
