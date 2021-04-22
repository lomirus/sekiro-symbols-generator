import { CSSObject } from '@emotion/react';

const ButtonStyle: CSSObject = {
    backgroundColor: "#409EFF",
    color: "#FFFFFF",

    border: "none",
    borderRadius: "4px",

    fontSize:"14px",

    cursor: "pointer",
    outline: "none",

    transition: ".1s",
    "&:hover": {
        background: "#66b1ff"
    },
    "&:active": {
        background: "#3a8ee6"
    }
}

export default ButtonStyle