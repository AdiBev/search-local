import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const BaseStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

${reset}
body {
    font-family: 'Roboto', sans-serif;
}
`;

///Color variables

export const colorPrimary = "#3E4868";

export const inputBorder = "#3e486826";
export const inputFocusBorder = "#3E4868";
