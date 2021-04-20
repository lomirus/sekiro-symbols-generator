import { CSSObject } from '@emotion/react';
import { ReactElement } from 'react';

const FileInputStyle: CSSObject = {
    backgroundColor: "#409EFF",
    color: "#FFFFFF",

    border: "none",
    borderRadius: "4px",

    fontSize:"14px",

    height: "32px",
    width: "81px",

    cursor: "pointer",
    outline: "none",
}

const FileInput = (): ReactElement => (
    <div>
        <input type="file" accept="image/*" hidden={true} />
        <button css={FileInputStyle}>Upload</button>
    </div>
)

export default FileInput;