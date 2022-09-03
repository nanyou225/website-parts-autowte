import React from "react";
import ContentA from "./ContentA";
import ContentB from "./ContentB";
import { NContentBox } from "./ContentBox.elements";
import ContentC from "./ContentC";

const ContentBox = () => {
  return (
    <NContentBox>
      <ContentA></ContentA>
      <ContentB></ContentB>
      <ContentC></ContentC>
    </NContentBox>
  );
};

export default ContentBox;
