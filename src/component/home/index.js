import React from "react";
import Data from "../../Temp";
import { ButtonComponent } from "../buttonComponent/index";
import { TextComponent } from "../textComponent/index";

function HomeComponent() {
  return (
    <>
      <div className="Container">
        <img id="imgArtist" src={Data.album.images[1].url} alt="" />
        <TextComponent />
        <ButtonComponent />
      </div>
    </>
  );
}

export { HomeComponent };
