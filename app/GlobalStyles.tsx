"use client";

import { css, Global } from "@emotion/react";
import { Reset } from "styled-reset";

const GlobalStyles = () => {
  return (
    <>
      <Reset />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            -webkit-tap-highlight-color: transparent;
          }
          ul {
            list-style-type: none;
            padding-left: 0;
          }
          a:-webkit-any-link {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
