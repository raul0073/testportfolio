import React from "react";
import {  useAtomValue } from "jotai";
import { themeNow } from "./../Atoms/Atoms";
import './../styles/topbar.scss'

export default function TopbarComp() {

  const theme = useAtomValue(themeNow);

  return (
    <section className="topbar">
      <div className="container">
        <div className={theme === "light" ? "logo" : "logo light"}>
          
        </div>
      </div>
    </section>
  );
}
