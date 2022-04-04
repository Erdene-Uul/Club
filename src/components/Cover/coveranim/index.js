import React from "react";
import style from "./style.module.css"

// cover effect animation od
const CoverAnim = () => {
  return (
    <div class="wrapper">
      <div id={style.stars}></div>
      <div id={style.stars2}></div>
      <div id={style.stars3}></div>
    </div>
  );
};

export default CoverAnim;
