import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const BaseStyles = createGlobalStyle`

${reset}

* {
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
}
`;

///Color variables

export const colorPrimary = "#3E4868";
export const colorPrimaryDark = "#22377d";

export const inputBorder = "#3e486826";
export const inputFocusBorder = "#3E4868";
