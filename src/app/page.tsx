// @ts-nocheck
"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import GrapesJS from "grapesjs";
import Parser from "grapesjs-parser-postcss";

import BaseReactComponent from "../grapesjs-core/base-react-component";
import ReactComponents from "../grapesjs-core/react-components";

export default function Home() {
  useEffect(() => {
    const e = GrapesJS.init({
      container: "#example-editor",
      fromElement: true,
      showOffsets: true,
      noticeOnUnload: false,
      storageManager: false,
      plugins: [Parser, BaseReactComponent, ReactComponents],
      canvasCss: ".gjs-plh-image {width:auto;height:auto;}",
    });

    e.setComponents(`<Hero></Hero>`);
  });

  return <div id="example-editor" />;
}
