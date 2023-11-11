import Translate from "@docusaurus/Translate";
import React, { ReactElement } from "react";

export interface Verse {
  zapoteco: ReactElement;
  translation: any;
}
export const Yelenban: Verse = {
  zapoteco: (
    <p>
      Nhed-lhe.
      <br />
      Blis jalhaguká yaba <br />
      bzu xhinhu yejtilh. <br />
      Bnhix nhis ya'a, nhis ban <br />
      chhalh yadau.
      <br />
      Bzenhag ka chhul-chhne byindauka <br />
      Bene nhawnha guxa: <br />
      E'chhakbedu, <br />
      dinha chhe: Yelenban.
    </p>
  ),
  translation: (
    <p>
      <Translate id={"yelenban-1"}>You and I</Translate> <br />
      <Translate id={"yelenban-2"}>Lift your gaze to the sky</Translate> <br />
      <Translate id={"yelenban-3"}>Smell the aroma of the lily</Translate>{" "}
      <br />
      <Translate id={"yelenban-4"}>Taste the fresh water that</Translate> <br />
      <Translate id={"yelenban-5"}>springs from the hill</Translate> <br />
      <Translate id={"yelenban-6"}>Listen to the chirping birds</Translate>{" "}
      <br />
      <Translate id={"yelenban-7"}>Give me your hands</Translate>
      <br />
      <Translate id={"yelenban-8"}>Do you realize</Translate>
      <br />
      <Translate id={"yelenban-9"}>this is life</Translate>
    </p>
  ),
};

export const TuzaGulja: Verse = {
  zapoteco: (
    <p>
      Tuz gulja, tuz geita <br />
      lao yeshliu daoni dega ni <br />
      ka uxhane nhed bibyukse blene <br />
      chhbell xnhadawa ni <br />
      Nul ka naku le <br />
      kata gakdu she tuzu gulju dani <br />
      Nul ka naku le <br />
      benzankse chhakse ga ni <br />
      Naka bi udashag, chhun yel we <br />
      Nachho gakdu nie chu le <br />
      Na chhun nhed xbab <br />
      tu shize kuej yichja le <br />
      juye benha leo chhakze bil jueshka <br />
      benzankse lle ka lé <br />
      Na chhun nhed xbab <br />
      tu shize kuej yichja le <br />
    </p>
  ),
  translation: (
    <p>
      <Translate id={"tuz_gulj-1"}>
        I was born by myself, by myself I will die
      </Translate>
      <br />
      <Translate id={"tuz_gulj-2"}>in this little land here</Translate>
      <br />
      <Translate id={"tuz_gulj-3"}>
        When she gave birth to me, she saw that I was a man,
      </Translate>
      <br />
      <Translate id={"tuz_gulj-4"}>my mom cried</Translate> <br />
      <Translate id={"tuz_gulj-5"}>women like you,</Translate> <br />
      <Translate id={"tuz_gulj-6"}>
        Don't think you're the only one who was born here.
      </Translate>
      <br />
      <Translate id={"tuz_gulj-7"}>women like you,</Translate> <br />
      <Translate id={"tuz_gulj-8"}>many exist here</Translate> <br />
      <Translate id={"tuz_gulj-9"}>I am a partyer, I am a drinker</Translate>
      <br />
      <Translate id={"tuz_gulj-10"}>don't think that for you</Translate> <br />
      <Translate id={"tuz_gulj-11"}>and I'm thinking</Translate> <br />
      <Translate id={"tuz_gulj-12"}>forgetting you forever</Translate> <br />
      <Translate id={"tuz_gulj-13"}>leave her my friends tell me</Translate>
      <br />
      <Translate id={"tuz_gulj-14"}>there are many like her</Translate> <br />
      <Translate id={"tuz_gulj-15"}>and I'm thinking,</Translate> <br />
      <Translate id={"tuz_gulj-16"}>forgetting you forever.</Translate> <br />
    </p>
  ),
};
