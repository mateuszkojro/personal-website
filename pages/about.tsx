import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Card } from "semantic-ui-react";
import CustomFooter from "../components/CustomFooter";
import TopBar from "../components/TopBar";
// import Notebook from "../components/Notebook";

export default function about() {
  return (
    <>
      {/* <TopBar /> */}
      <div style={{marginTop: "4em"}} />
      {/* <h1>Hello</h1> */}
      {/* <Notebook url={String.raw`https://raw.githubusercontent.com/mateuszkojro/quantum/main/basics.ipynb`}/> */}
      <CustomFooter />
    </>
  );
}
