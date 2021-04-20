import { CSSObject } from '@emotion/react';
import { ReactElement, CSSProperties } from 'react';

type DownloadProps = {
    style?: CSSProperties
}

const DownloadStyle: CSSObject = {
    backgroundColor: "#409EFF",
    color: "#FFFFFF",

    border: "none",
    borderRadius: "4px",

    fontSize:"14px",

    height: "36px",
    width: "96px",

    cursor: "pointer",
    outline: "none",
}

const Download = ({ style }: DownloadProps): ReactElement => (
    <button css={{
        ...DownloadStyle,
        ...style
    }}>Download</button>
)

export default Download