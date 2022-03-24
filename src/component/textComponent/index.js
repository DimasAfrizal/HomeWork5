import React from "react";
import Data from "../../Temp";

function TextComponent() {
  return (
    <>
      <p id="nameArtis">{Data.artists[0].name}</p>
      <p id="songTitle">{Data.name}</p>
    </>
  );
}

export { TextComponent };
